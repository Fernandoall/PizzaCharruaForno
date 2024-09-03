import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomePage from "./HomePage"; // Supondo que você tenha uma página inicial
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage"; // Supondo que você tenha uma página de menu

function App() {
  return (
    <Router>
      <HeaderComponent />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
