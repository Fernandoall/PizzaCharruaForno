import React from "react";
import Header from "../common/header";
import OrderForm from "../OrderForms";
import "./OrderPage.css";

function OrderPage() {
  return (
    <div className="order-page">
      <Header />
      <section className="order-section">
        <h2>Monte sua Pizza Perfeita</h2>
        <p>Escolha seus ingredientes favoritos e faça seu pedido agora!</p>
        <OrderForm />
      </section>
    </div>
  );
}

export default OrderPage;
