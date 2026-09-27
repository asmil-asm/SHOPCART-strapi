import { factories } from '@strapi/strapi';
export default factories.createCoreController(
  'api::cart-item.cart-item',
  ({ strapi }: any) => ({
    async create(ctx: any) {
      const user = ctx.state.user;
      if (!user) return ctx.unauthorized();

      let cart = await strapi.db.query('api::cart.cart').findOne({
        where: { users_permissions_user: user.id },
      });

      if (!cart) {
        cart = await strapi.db.query('api::cart.cart').create({
          data: { users_permissions_user: user.id },
        });
      }

      ctx.request.body.data.cart = cart.id;
      return super.create(ctx);
    },
  })
);