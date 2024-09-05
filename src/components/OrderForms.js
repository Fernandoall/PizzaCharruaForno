import React from "react";
import "./OrderForms.css";

function OrderForm() {
  return (
    <form className="order-form">
      <div className="form-group">
        <label htmlFor="pizza-type">Escolha o tipo de pizza</label>
        <select id="pizza-type">
          <option>Marguerita</option>
          <option>Calabresa</option>
          <option>Quatro Queijos</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="size">Escolha o tamanho</label>
        <select id="size">
          <option>Pequena</option>
          <option>Média</option>
          <option>Grande</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="extras">Adicionais</label>
        <input
          type="text"
          id="extras"
          placeholder="Ex: Bacon, borda recheada"
        />
      </div>

      <button type="submit">Fazer Pedido</button>
    </form>
  );
}

export default OrderForm;
