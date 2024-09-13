import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import DeliveryPage from "./pages/DeliveryPage";
import AboutPage from "./pages/AboutPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
