# ShopNest

ShopNest is a small responsive e-commerce catalog built for a React course assignment. Users can search and filter mock products, view details, add products to a cart, change quantities, and complete a demo checkout form.

There is no backend, real payment processing, or external product API. The cart and selected theme are saved in browser localStorage.

## Features

- Twenty realistic products with images, descriptions, ratings, and stock.
- Search, category filters, and price/name sorting.
- Product details route with invalid-product handling.
- Add to cart, quantity controls, remove buttons, and totals.
- Cart and theme persistence with localStorage.
- Controlled checkout form with required-field validation.
- Responsive desktop, tablet, and mobile layouts.

## Technologies

React, React Router, Vite, plain CSS, and browser localStorage.

## Installation and Usage

```bash
npm install
npm run dev
```

The development server will print a local URL, usually `http://localhost:5173`.

## Project Structure

```text
src/
├── components/   Navbar, Footer, ProductCard, SearchBar, FilterBar, CartItem
├── data/          Mock product data
├── pages/         Home, Cart, ProductDetails, Checkout
├── App.jsx        Shared cart state, persistence, and routing
├── App.css        Main responsive styling
└── main.jsx       React entry point
```

## React Concepts Demonstrated

| Requirement | Where it appears |
| --- | --- |
| Components | `Navbar`, `ProductCard`, `CartItem`, `FilterBar`, and `Footer` are reusable components |
| Props | `ProductCard product={product}` plus cart data and handler props |
| useState | Search, filters, cart, theme, and checkout form state |
| useEffect | `App.jsx` saves cart and theme changes to localStorage |
| map() | Product list, category buttons, cart items, and checkout items |
| key | Product IDs and cart item IDs provide unique keys during rendering |
| Controlled input | Search input and checkout form fields use React state values |
| onChange | Search, category, sort, and checkout fields update state |
| onSubmit | Checkout validates the form and displays the success message |
| Conditional rendering | Empty cart, no results, stock, invalid product, and success states |
| React Router | Home, Cart, Product Details, Checkout, Login, and Sign in routes |
| localStorage | Cart and theme persistence after refreshing the browser |
| Responsive CSS | Product grid and cart layout adapt for desktop, tablet, and mobile |
| Git and README | Ten incremental commit suggestions and this documentation |

## Screenshots

Add screenshots here after running the app in a browser.

## Known Limitations

- Product data is local and cannot be edited.
- Checkout is a demonstration only and does not process payments.
- Product images use public Unsplash URLs and need an internet connection.

## Future Improvements

- Add a product admin page or a real backend API.
- Add order history and a real payment provider.
- Add a stronger image fallback and more detailed form feedback.

## Suggested Git Progress

1. `Initial React project setup`
2. `Add local ShopNest product data`
3. `Build reusable product catalog components`
4. `Add product search filters and sorting`
5. `Add product details route`
6. `Add cart state and cart page`
7. `Persist cart and theme with localStorage`
8. `Add controlled checkout form`
9. `Polish responsive layout and theme`
10. `Add README and final assignment cleanup`

## Viva / Learning Guide

1. **What is React?** A JavaScript library for building user interfaces from reusable components. ShopNest uses it for each screen and state update.
2. **What is a component?** A reusable piece of UI. ProductCard displays one product.
3. **Why use components?** They organise code and avoid repeating markup.
4. **What are props?** Values passed from a parent to a child. Home passes a product to ProductCard.
5. **What is state?** Data that can change while the app runs. The cart is state.
6. **Where is useState used?** App uses it for cart/theme, Home for filters, and Checkout for form data.
7. **Why use useState?** React re-renders the UI when state changes.
8. **What is useEffect?** Code that runs after rendering when selected values change.
9. **Why use useEffect here?** It saves cart and theme values outside React, in localStorage.
10. **What is localStorage?** Browser storage that keeps small string values after refresh.
11. **How is localStorage used?** JSON.stringify stores the cart and JSON.parse loads it.
12. **How is map used?** The product array becomes one ProductCard per product.
13. **Why are keys needed?** A unique key helps React identify a list item. Product IDs are used.
14. **What is a controlled input?** Its value comes from React state. Search uses value={searchTerm}.
15. **What does onChange do?** It updates state when input text changes.
16. **What does onSubmit do?** It handles checkout submission, validation, and success.
17. **What is conditional rendering?** Showing UI based on a condition, such as an empty-cart message.
18. **Why use React Router?** It shows different views at different URLs without a full reload.
19. **What does /product/:id mean?** id is a URL parameter read with useParams.
20. **How does Add to Cart work?** A handler prop adds an item or increases its quantity.
21. **How do quantity updates work?** map creates a new cart array with one quantity changed.
22. **How is total price calculated?** reduce adds price multiplied by quantity for every item.
23. **How do parent and child props work?** App owns cart state and passes data and handlers to CartItem.
24. **How does responsive CSS work?** Media queries change the grid from four columns to two and then one.
25. **Why keep product data separate?** It keeps content away from UI code and is easy to update.
26. **Why no Redux?** This small app is clearer with plain React state.
27. **What happens with an empty cart?** A friendly message and Continue shopping link appear.
28. **What happens with a bad product ID?** Product not found and a back link appear.
29. **How do search and filters work together?** A product must match both conditions.
30. **Why call preventDefault?** It stops the browser form reload so React can handle the form.
31. **Why call Number(id)?** URL parameters are strings but product IDs are numbers.
32. **Why disable an out-of-stock button?** It prevents adding unavailable products.
33. **How does cart count update?** reduce adds all item quantities and passes the result to Navbar.
34. **Why use JSON.stringify?** localStorage stores strings, so the array must become text first.
35. **How would you add a product?** Add an object with a unique ID and the same fields to products.js.
