import React from "react";
import Header from "../common/header";
import MenuItem from "../MenuItem";
import "./MenuPage.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Header />
      <section className="menu-list">
        <h2>Nosso Menu</h2>
        <MenuItem
          name="Pizza Margherita"
          description="Tomate, manjericão e mozzarella"
          price="R$35,00"
        />
        <MenuItem
          name="Pizza Pepperoni"
          description="Pepperoni e mozzarella"
          price="R$40,00"
        />
        <MenuItem
          name="Pizza Quatro Queijos"
          description="Mozzarella, gorgonzola, provolone e parmesão"
          price="R$45,00"
        />
        <MenuItem
          name="Pizza Vegetariana"
          description="Tomate, pimentão, azeitona, cogumelos e mozzarella"
          price="R$38,00"
        />
      </section>
    </div>
  );
}

export default MenuPage;
