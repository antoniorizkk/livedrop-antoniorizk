import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Catalog from "./pages/catalog";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderStatus from "./pages/order-status";
import AskSupportPanel from "./components/organisms/AskSupportPanel";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/p/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<OrderStatus />} />
      </Routes>

      {/* Global Ask Support Panel */}
      <AskSupportPanel />
    </BrowserRouter>
  );
}
