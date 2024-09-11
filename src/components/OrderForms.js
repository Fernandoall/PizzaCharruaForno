import React, { useState } from "react";
import "./OrderForms.css";

// Lista de sabores de pizza que você pode preencher com os sabores do Menu
const pizzaFlavors = [
  "Pizza Margherita",
  "Pizza Pepperoni",
  "Pizza Quatro Queijos",
  "Pizza Vegetariana",
  "Pizza Calabresa",
  "Pizza Portuguesa",
];

const initialPizzaState = {
  flavor: pizzaFlavors[0], // Definindo o primeiro sabor como padrão
  size: "M",
  ingredients: "",
};

function OrderForm() {
  const [pizzas, setPizzas] = useState([initialPizzaState]);

  const handleAddPizza = () => {
    setPizzas([...pizzas, { ...initialPizzaState }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newPizzas = pizzas.slice();
    newPizzas[index] = { ...newPizzas[index], [name]: value };
    setPizzas(newPizzas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você lidará com o envio do formulário para o backend
    console.log("Submitting order:", pizzas);
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      {pizzas.map((pizza, index) => (
        <div key={index} className="pizza-item">
          <h3>Pizza {index + 1}</h3>
          <label>
            Sabor:
            <select
              name="flavor"
              value={pizza.flavor}
              onChange={(e) => handleChange(index, e)}
            >
              {pizzaFlavors.map((flavor, i) => (
                <option key={i} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </label>
          <label>
            Tamanho:
            <select
              name="size"
              value={pizza.size}
              onChange={(e) => handleChange(index, e)}
            >
              <option value="S">Pequena</option>
              <option value="M">Média</option>
              <option value="L">Grande</option>
            </select>
          </label>
          <label>
            Ingredientes:
            <input
              type="text"
              name="ingredients"
              value={pizza.ingredients}
              onChange={(e) => handleChange(index, e)}
              placeholder="Ex: Tomate, Queijo"
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddPizza}>
        Adicionar Outra Pizza
      </button>
      <button type="submit" className="submit-btn">
        Finalizar Pedido
      </button>
    </form>
  );
}

export default OrderForm;
