import React, { useState, useEffect } from "react";
import Header from "../common/header";
import "./DeliveryPage.css";

function DeliveryPage() {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState(""); // Campo para o CEP
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(""); // Campo para agendar a data
  const [deliveryTime, setDeliveryTime] = useState(""); // Campo para agendar a hora

  // Função para obter a localização do dispositivo
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
  }, []);

  // Função para buscar o endereço baseado no CEP usando a API do ViaCEP
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

  // Função para enviar os dados para o banco de dados
  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      name,
      phone,
      cep,
      address,
      city,
      state,
      deliveryDate,
      deliveryTime,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Pedido agendado com sucesso!");
        // Limpar o formulário após o envio
        setName("");
        setPhone("");
        setCep("");
        setAddress("");
        setCity("");
        setState("");
        setDeliveryDate("");
        setDeliveryTime("");
      } else {
        alert("Erro ao agendar o pedido. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao agendar o pedido.");
    }
  };

  return (
    <div className="delivery-page">
      <Header />
      <section className="delivery-section">
        <h2>Informações de Entrega</h2>
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
