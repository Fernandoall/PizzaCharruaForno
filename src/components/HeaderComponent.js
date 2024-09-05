import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <h1>Forno Charrua</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/order">Order Now</a>
      </nav>
    </header>
  );
}

export default HeaderComponent;
