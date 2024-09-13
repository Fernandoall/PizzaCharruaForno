import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuItem.css";

function MenuItem({ name, description, price, imageUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order"); // Redireciona para a página de pedidos
  };

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
        <button onClick={handleClick}>Peça Agora</button>
      </div>
    </div>
  );
}

export default MenuItem;
