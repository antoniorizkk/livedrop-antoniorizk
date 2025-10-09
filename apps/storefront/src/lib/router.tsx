// /apps/storefront/src/lib/router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "../pages/catalog";
import Product from "../pages/product";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import OrderStatus from "../pages/order-status";
import App from "../app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Catalog /> },
      { path: "/p/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order/:id", element: <OrderStatus /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
