import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <h1>Pizza Delícia</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/order">Pedido</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
