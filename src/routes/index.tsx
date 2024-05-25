import { Routes, Route } from "react-router-dom";
import Dashboard from "../features/Dashboard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/cart" element={<CartPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/contact/success" element={<ContactSuccess />} /> */}
  </Routes>
);

export default AppRoutes;
