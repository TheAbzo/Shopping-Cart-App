
# 🛒 Shopping Cart App

A modern, lightweight e-commerce frontend built with React, Vite, TypeScript, and React Query.
Supports infinite scrolling, cart management, toast notifications, and clean reusable components.


🎬 Video:

[18.11.2025 23_09.webm](https://github.com/user-attachments/assets/45e1502c-53db-4f4f-a2b4-ce1690e2442f)




## 🚀 Features
- 🌀 **Infinite Scroll Product Listing**:
    - Fetches products page-by-page using React Query infinite queries
    - Smooth auto-loading when user reaches bottom

- 🧺 **Cart System (Add / Remove):**
    - Add product to cart from listing or details page
    -  Remove product directly from cart
      
- 📱 **Responsive UI**:
    - Mobile-first design, works well on tablets and desktops.
    - Modern UI with TailwindCSS styling.
- 🔔**Toast Notifications**:
    - Successful toast on successful purchase.
    
- 🧭 **Three Pages:**
    - Products Page, infinite list of products
    - Product Details Page, open product card to view more info
    - Cart Page, view and modify cart items
      
- 💻 **Clean & Maintainable Code**:
    - Modular components.
    - TypeScript types for type safety.

### Setup & Run

1. Clone the repo

```
git clone https://github.com/TheAbzo/Shopping-Cart-App.git
cd shopping-cart-app/
```
2. Install & Run
```
npm install
npm run dev
```

## 🛠️ Tech Stack
- Frontend: React 18, TypeScript, Vite


## 📂 Project Structure Overview
```
.
├── Shopping-cart-app
└── public/
    ├── images/
    │   └── fallback.jpg
    └── src/
        ├── api/
        │   └── fakeApi.ts
        ├── components/
        │   ├── NavBar/
        │   │   ├── index.tsx
        │   │   └── style.scss
        │   ├── ProductCard/
        │   │   ├── index.tsx
        │   │   └── style.scss
        │   └── ProductGrid/
        │       ├── index.tsx
        │       └── style.scss
        ├── context/
        │   ├── ToastProvider/
        │   │   ├── ToastProvider.tsx
        │   │   └── style.scss
        │   ├── CartContext.ts
        │   ├── CartContextProvider.tsx
        │   └── useCartContext.tsx
        ├── hooks/
        │   └── useProducts.ts
        ├── pages/
        │   ├── CartPage/
        │   │   ├── index.tsx
        │   │   └── style.scss
        │   ├── ProductDetails/
        │   │   ├── index.tsx
        │   │   └── style.scss
        │   └── ProductList/
        │       ├── index.tsx
        │       └── style.scss
        ├── styles/
        │   ├── global.scss
        │   └── _variables.scss
        ├── types/
        │   └── product.ts
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx  
        └── router.tsx

```





