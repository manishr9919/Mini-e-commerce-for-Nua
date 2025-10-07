# 🛍 Mini E-Commerce Frontend

A **mini e-commerce web application** built with **React**, **Redux Toolkit**, and **Tailwind CSS**, consuming the **Fake Store API**.  
This project demonstrates:

- Modern SPA structure with routing  
- Global state management using Redux  
- Product listing, search, category filter  
- Product details with quantity selector  
- Shopping cart and checkout flow  
- Responsive design with Tailwind CSS  
- Data caching using `localStorage`

---

## 🎯 Features

### 🏠 Product Listing (`/`)
- Responsive grid layout  
- Search by product title  
- Category filter  
- Loading and error handling  
- Cached product data in `localStorage`

### 📦 Product Detail (`/product/:id`)
- Show image(s), title, description, price, rating  
- Quantity selector (1–5)  
- “Add to Cart” functionality  

### 🛒 Shopping Cart (`/cart`)
- List of items with thumbnail, title, price, quantity, subtotal  
- Update quantity (1–10) or remove item  
- Grand total calculation  
- Clear all items button  

### 💳 Checkout (`/checkout`)
- Order summary with items and total  
- Simple form: Name, Email, Address (with validation)  
- “Place Order” clears cart and shows confirmation  

### ⚙️ State Management
- Redux Toolkit for global state  
- Cart data persisted using `localStorage`

### 📱 Responsive Design
- Tailwind CSS for modern and mobile-friendly UI  
- Adaptive grid and form layouts  

---

## 🛠 Tech Stack

| Layer        | Technology                   |
| ------------ | ---------------------------- |
| Frontend     | React, React Router          |
| State        | Redux Toolkit                |
| Styling      | Tailwind CSS                 |
| API          | Fake Store API (`https://fakestoreapi.com`) |
| Build Tools  | Vite, npm                    |

---

## 📁 Folder Structure

```
src/
├─ components/
│ ├─ Navbar.jsx
│ └─ ProductCard.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ ProductDetail.jsx
│ ├─ Cart.jsx
│ └─ Checkout.jsx
├─ services/
│ └─ api.js
├─ store/
│ ├─ index.js
│ └─ slices/
│ ├─ cartSlice.js
│ └─ productSlice.js
└─ main.jsx
```
---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/mini-ecommerce-frontend.git
cd mini-ecommerce-frontend
```

 ### 2️⃣ Install dependencies
 ```
npm install
```
### 3️⃣ Run the development server

```
 npm run dev
```
