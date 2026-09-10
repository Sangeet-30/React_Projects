# Myntra Clone

A responsive e-commerce frontend built with React and Redux Toolkit, inspired by the Myntra shopping experience.

## 🚀 Live Demo

[View Live Demo](https://myntra-frontend-sangeet1.vercel.app/)

## 📌 Overview

Myntra Clone is a React-based e-commerce project designed to practice React, Redux Toolkit, routing, API integration, state management, and responsive UI development.

The application provides a product listing interface where users can browse products, add products to their shopping bag, remove products, and view dynamically calculated pricing details.

The project focuses on building a clean component-based structure and managing application state using Redux Toolkit.

## ✨ Features

- Display products fetched from the backend API
- Add products to Bag
- Remove products from Bag
- Dynamic Bag item count
- Dynamic price calculation
- Total MRP calculation
- Discount calculation
- Convenience fee calculation
- Total amount calculation
- Empty Bag state
- Loading state while fetching products
- Error state when products cannot be loaded
- Responsive design for different screen sizes
- Mobile-friendly product layout
- Responsive shopping Bag layout
- Clean and simple user interface

## 🛠️ Tech Stack

- React
- JavaScript
- HTML
- CSS
- Vite
- Redux Toolkit
- React Redux
- React Router
- React Icons
- Git & GitHub

## ⚛️ React Concepts Used

This project was built to practice several React and Redux concepts, including:

- Functional components
- JSX
- Props
- State management
- `useEffect`
- `useSelector`
- `useDispatch`
- Event handling
- Conditional rendering
- List rendering
- Array methods
- Component-based UI structure
- Form/input handling
- Redux Toolkit
- Redux slices
- Global state management
- React Router
- API integration
- Loading and error handling

## 🛍️ Shopping Bag Functionality

### Add to Bag

Users can add products to their shopping bag directly from the product listing.

The Bag count is updated dynamically when a product is added.

### Remove from Bag

Users can remove products from the shopping bag using the remove button.

The Bag count and price details are updated automatically.

### Price Details

The shopping bag dynamically calculates:

- Total MRP
- Discount on MRP
- Convenience Fee
- Total Amount

The convenience fee is applied only when the Bag contains products.

### Empty Bag

When all products are removed, the application displays an empty Bag message and resets the price details.

## 📱 Responsive Design

The application is designed to work across different screen sizes.

The layout adapts for:

- Desktop
- Tablet
- Mobile
- Small mobile screens

On smaller screens:

- Product cards adapt to available screen width
- Header content remains accessible
- Shopping Bag layout adjusts to smaller screens
- Product information remains readable
- Price details remain accessible
- Buttons and controls remain usable
- Content avoids horizontal overflow

## 📂 Project Structure

    Myntra-clone/
    │
    ├── Backend/
    │   ├── data/
    │   │   └── items.js
    │   ├── app.js
    │   ├── items.json
    │   ├── package.json
    │   ├── package-lock.json
    │   └── .gitignore
    │
    ├── Frontend/
    │   ├── public/
    │   │   ├── images/
    │   │   ├── favicon.svg
    │   │   └── icons.svg
    │   │
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── BagItem.jsx
    │   │   │   ├── BagSummary.jsx
    │   │   │   ├── FetchItems.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Header.jsx
    │   │   │   ├── HomeItem.jsx
    │   │   │   └── LoadingSpinner.jsx
    │   │   │
    │   │   ├── routes/
    │   │   │   ├── App.jsx
    │   │   │   ├── Home.jsx
    │   │   │   └── Bag.jsx
    │   │   │
    │   │   ├── store/
    │   │   │   ├── bagSlice.js
    │   │   │   ├── fetchingStatusSlice.js
    │   │   │   ├── itemsSlice.js
    │   │   │   └── index.js
    │   │   │
    │   │   ├── index.css
    │   │   └── main.jsx
    │   │
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── package.json
    │   ├── package-lock.json
    │   └── vite.config.js
    │
    └── README.md
