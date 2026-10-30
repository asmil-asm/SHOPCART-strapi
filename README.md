# 🛠️ SHOPCART Backend — Strapi Headless CMS & REST API

The backend service for **SHOPCART**, an e-commerce platform.  
Built with **Strapi 5**, it provides a flexible headless CMS and a ready-to-use REST API for managing products, categories, carts, orders, and other store data consumed by the SHOPCART React frontend.

> ⚠️ **Note:** The current `README.md` in this repository is still the default Strapi template. This document replaces it with project-specific documentation.

---

## ✨ Features

- **Headless CMS** — Auto-generated admin panel to manage all store content without writing code.
- **REST API** — Clean, versioned endpoints consumed by the SHOPCART frontend.
- **Product Management** — Full CRUD for products, categories, and top brands.
- **Cart & Checkout** — Content types for `cart`, `cart-item`, `order`, and `order-item` to support the shopping flow.
- **Shipping & Contact** — Dedicated content types for `shipping-info` and `contact` submissions.
- **Blog Support** — A `blog` content type for store news, guides, or announcements.
- **JWT Authentication** — Built-in user authentication via Strapi's Users & Permissions plugin.
- **Media Library** — Upload and serve product images and other assets.
- **Role-Based Access Control (RBAC)** — Configure public and authenticated permissions per content type.

---

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| **CMS / Framework** | Strapi 5 |
| **Runtime** | Node.js 20+ |
| **Language** | TypeScript |
| **Database (Dev)** | SQLite |
| **Database (Prod)** | PostgreSQL (recommended) |
| **API Style** | REST (GraphQL plugin optional) |
| **Auth** | JWT (Strapi Users & Permissions) |
| **File Storage** | Local (default), S3/Cloudinary (optional) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 20+**
- **npm** or **yarn**
- **Git**

### 1. Clone the repository
```bash
git clone https://github.com/asmil-asm/SHOPCART-strapi.git
cd SHOPCART-strapi
