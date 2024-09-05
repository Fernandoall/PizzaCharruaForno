import React from "react";
import "./MenuItem.css";

function MenuItem({ title, description, price, imageUrl }) {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={title} className="menu-item-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
      <button>Peça Agora</button>
    </div>
  );
}

export default MenuItem;
