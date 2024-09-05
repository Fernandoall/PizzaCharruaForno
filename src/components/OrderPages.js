import React, { useState } from "react";

import OrderForm from "./OrderForms";

function OrderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleOrderSubmit = (order) => {
    setSubmitted(true);
    console.log("Pedido recebido:", order);
  };

  return (
    <div>
      <h2>Faça seu Pedido</h2>
      {submitted ? (
        <p>Obrigado pelo seu pedido! Em breve entraremos em contato com você</p>
      ) : (
        <OrderForm onOrderSubmit={handleOrderSubmit} />
      )}
    </div>
  );
}
