import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import "./OrderPage.css";

const pizzaPrices = {
  "Pizza Margherita": 25.0,
  "Pizza Pepperoni": 30.0,
  "Pizza Quatro Queijos": 35.0,
  "Pizza Vegetariana": 28.0,
  "Pizza Calabresa": 27.0,
  "Pizza Portuguesa": 32.0,
};

function OrderPage() {
  const [pizzas, setPizzas] = useState([
    { flavor: "Pizza Margherita", quantity: 1 },
  ]);
  const navigate = useNavigate(); // Hook de navegação

  const handlePizzaChange = (index, event) => {
    const newPizzas = [...pizzas];
    newPizzas[index].flavor = event.target.value;
    setPizzas(newPizzas);
  };

  const handleQuantityChange = (index, event) => {
    const newPizzas = [...pizzas];
    newPizzas[index].quantity = parseInt(event.target.value, 10);
    setPizzas(newPizzas);
  };

  const handleAddPizza = () => {
    setPizzas([...pizzas, { flavor: "Pizza Margherita", quantity: 1 }]);
  };

  const handleRemovePizza = (index) => {
    const newPizzas = pizzas.filter((_, i) => i !== index);
    setPizzas(newPizzas);
  };

  const calculateTotal = () => {
    return pizzas
      .reduce((total, pizza) => {
        const price = pizzaPrices[pizza.flavor] || 0;
        return total + price * pizza.quantity;
      }, 0)
      .toFixed(2); // Retorna o total com 2 casas decimais
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Salva as pizzas e o total no localStorage
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
    localStorage.setItem("total", calculateTotal());
    // Redireciona para a página de entrega
    navigate("/delivery");
  };

  return (
    <div className="order-page">
      <Header />
      <section className="order-section">
        <h2>Monte seu Pedido</h2>
        <p>Escolha suas pizzas e faça seu pedido agora!</p>
        <form className="order-form" onSubmit={handleSubmit}>
          {pizzas.map((pizza, index) => (
            <div key={index} className="pizza-item">
              <label htmlFor={`pizza-${index}`}>
                Selecione a Pizza
                <select
                  id={`pizza-${index}`}
                  value={pizza.flavor}
                  onChange={(event) => handlePizzaChange(index, event)}
                >
                  <option value="Pizza Margherita">Pizza Margherita</option>
                  <option value="Pizza Pepperoni">Pizza Pepperoni</option>
                  <option value="Pizza Quatro Queijos">
                    Pizza Quatro Queijos
                  </option>
                  <option value="Pizza Vegetariana">Pizza Costela Seca</option>
                  <option value="Pizza Calabresa">Pizza Frango Catupiry</option>
                  <option value="Pizza Portuguesa">Pizza Vegetariana</option>
                </select>
              </label>
              <label htmlFor={`quantity-${index}`}>
                Quantidade
                <input
                  type="number"
                  id={`quantity-${index}`}
                  min="1"
                  value={pizza.quantity}
                  onChange={(event) => handleQuantityChange(index, event)}
                />
              </label>
              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemovePizza(index)}
              >
                Remover Pizza
              </button>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={handleAddPizza}>
            Adicionar Pizza
          </button>
          <label>
            Observações
            <textarea placeholder="Digite suas observações (opcional)" />
          </label>
          <div className="order-total">
            <p>Total: R${calculateTotal()}</p>
          </div>
          <button type="submit" className="submit-btn">
            Enviar Pedido
          </button>
        </form>
      </section>
    </div>
  );
}

export default OrderPage;
