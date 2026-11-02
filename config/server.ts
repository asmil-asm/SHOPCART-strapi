import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  
  // اجعلها تبحث عن متغير البيئة URL أولاً، ثم PUBLIC_URL، ثم الرابط الخاص بك على Render افتراضياً
  url: env('URL', env('PUBLIC_URL', 'https://shopcart-back-end.onrender.com')),

  app: {
    keys: env.array('APP_KEYS')!,
  },
  
  proxy: {
    koa: true,
    maxIpsCount: 1, 
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

export default config;