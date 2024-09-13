import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para redirecionar
import Header from "../common/header";
import "./DeliveryPage.css";

function DeliveryPage() {
  const navigate = useNavigate(); // Definir navegação para redirecionamento
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(""); // Novo estado para o número
  const [complement, setComplement] = useState(""); // Novo estado para o complemento
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocalização não é suportada pelo navegador.");
    }

    // Carregar as pizzas e o total do localStorage
    const savedPizzas = localStorage.getItem("pizzas");
    const savedTotal = localStorage.getItem("total");
    if (savedPizzas) {
      setPizzas(JSON.parse(savedPizzas));
    }
    if (savedTotal) {
      setTotal(savedTotal);
    }
  }, []);

  const handleCepChange = async (event) => {
    const inputCep = event.target.value;
    setCep(inputCep);

    if (inputCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${inputCep}/json/`
        );
        const data = await response.json();

        if (data.erro) {
          alert("CEP inválido. Por favor, tente novamente.");
        } else {
          setAddress(data.logradouro);
          setCity(data.localidade);
          setState(data.uf);
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderData = {
      name,
      phone,
      cep,
      address,
      number, // Adicionar o número ao pedido
      complement, // Adicionar o complemento ao pedido
      city,
      state,
      deliveryDate,
      deliveryTime,
      pizzas,
      total,
    };

    // Simular a criação do pedido antes de ir para a página de pagamento
    localStorage.setItem("orderData", JSON.stringify(orderData)); // Salvar o pedido no localStorage

    // Redirecionar para a página de pagamento
    navigate("/payment");
  };

  return (
    <div className="delivery-page">
      <Header />
      <section className="delivery-section">
        <h2>Informações de Entrega</h2>
        <div className="pizza-list">
          <h3>Suas Pizzas</h3>
          {pizzas.length > 0 ? (
            <ul>
              {pizzas.map((pizza, index) => (
                <li key={index}>
                  {pizza.flavor} - Quantidade: {pizza.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma pizza foi adicionada.</p>
          )}
        </div>
        <div className="order-total">
          <p>Total do Pedido: R${total}</p>
        </div>
        <form className="delivery-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome Completo
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone">
            Telefone
            <input
              type="tel"
              id="phone"
              placeholder="Digite seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label htmlFor="cep">
            CEP
            <input
              type="text"
              id="cep"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={handleCepChange}
              maxLength="8"
              required
            />
          </label>
          <label htmlFor="address">
            Endereço
            <input
              type="text"
              id="address"
              placeholder="Endereço"
              value={address}
              readOnly
              required
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              type="text"
              id="number"
              placeholder="Número da residência"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </label>
          <label htmlFor="complement">
            Complemento
            <input
              type="text"
              id="complement"
              placeholder="Complemento (opcional)"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </label>
          <label htmlFor="city">
            Cidade
            <input
              type="text"
              id="city"
              placeholder="Cidade"
              value={city}
              readOnly
              required
            />
          </label>
          <label htmlFor="state">
            Estado
            <input
              type="text"
              id="state"
              placeholder="Estado"
              value={state}
              readOnly
              required
            />
          </label>
          <label htmlFor="delivery-date">
            Data de Entrega
            <input
              type="date"
              id="delivery-date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
            />
          </label>
          <label htmlFor="delivery-time">
            Hora de Entrega
            <input
              type="time"
              id="delivery-time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Finalizar Pedido
          </button>
        </form>
      </section>
    </div>
  );
}

export default DeliveryPage;
