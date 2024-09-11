import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <h1>Fornos Charrua</h1>
      </div>
      <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
              Cardápio
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={() => setIsMenuOpen(false)}>
              Faça Seu Pedido
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="cta">
        <Link to="/order" className="order-btn">
          Peça Agora
        </Link>
      </div>
    </header>
  );
}

export default Header;
