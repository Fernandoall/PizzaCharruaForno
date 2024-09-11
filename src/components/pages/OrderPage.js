import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Adicionar useNavigate para redirecionamento
import Header from "../common/header";
import "./OrderPage.css";

function OrderPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pizzaFromURL = queryParams.get("pizza") || "Pizza Margherita";

  const [selectedPizza, setSelectedPizza] = useState(pizzaFromURL);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Hook de navegação

  const handlePizzaChange = (event) => {
    setSelectedPizza(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redireciona para a página de entrega
    navigate("/delivery");
  };

  useEffect(() => {
    if (pizzaFromURL) {
      setSelectedPizza(pizzaFromURL);
    }
  }, [pizzaFromURL]);

  return (
    <div className="order-page">
      <Header />
      <section className="order-section">
        <h2>Monte seu Pedido</h2>
        <p>Escolha suas pizzas congeladas e faça seu pedido agora!</p>
        <form className="order-form" onSubmit={handleSubmit}>
          <label htmlFor="pizza">
            Selecione a Pizza
            <select
              id="pizza"
              value={selectedPizza}
              onChange={handlePizzaChange}
            >
              <option value="Pizza Margherita">Pizza Margherita</option>
              <option value="Pizza Pepperoni">Pizza Pepperoni</option>
              <option value="Pizza Quatro Queijos">Pizza Quatro Queijos</option>
              <option value="Pizza Vegetariana">Pizza Vegetariana</option>
              <option value="Pizza Calabresa">Pizza Calabresa</option>
              <option value="Pizza Portuguesa">Pizza Portuguesa</option>
            </select>
          </label>
          <label htmlFor="quantity">
            Quantidade
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>
          <label>
            Observações
            <textarea placeholder="Digite suas observações (opcional)" />
          </label>
          <button type="submit" className="submit-btn">
            Enviar Pedido
          </button>
        </form>
      </section>
    </div>
  );
}

export default OrderPage;
