import React, { useState } from "react";

function OrderPage() {
  const [order, setOrder] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlechange = (event) => {
    setOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Faça Seu Pedido </h2>
      {submitted ? (
        <p>
          Obrigado pelo seu pedido! Em breve, entraremos em contato com você.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="order">Escolha sua pizza:</label>
          <select id="order" value={order} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="Margherita">Pizza Margherita</option>
            <option value="Pepperoni">Pizza Pepperoni</option>
            <option value="Quatro Queijos">Pizza QuatroQueijos</option>
          </select>
          <button type="submit">Enviar Pedido</button>
        </form>
      )}
    </div>
  );
}

export default OrderPage;
