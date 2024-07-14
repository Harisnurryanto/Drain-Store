import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegiterPage from "./pages/register";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Cart from "./pages/cart";
import CartProvider from "./Context/CartContext";
import ProductService from "./pages/product-services";

axios.defaults.withCredentials = true;
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegiterPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/services",
    element: <ProductService />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
