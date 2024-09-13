import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/header";
import "./PaymentPage.css";

function PaymentPage() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Recuperar os dados do pedido salvos no localStorage
    const savedOrderData = localStorage.getItem("orderData");
    if (savedOrderData) {
      setOrderData(JSON.parse(savedOrderData));
    } else {
      alert("Nenhum pedido encontrado. Retornando à página de entrega.");
      navigate("/delivery");
    }
  }, [navigate]);

  const handleSendToWhatsApp = () => {
    if (orderData) {
      const message = `
    Olá, seja muito bem vindo(o) a Fornos Charrua! \n 
    Seu Pedido de Pizza foi confirmado.
    Seguem abaixo as informações do seu pedido: 
        \n
    Nome: ${orderData.name}
    Telefone: ${orderData.phone}
    Endereço: ${orderData.address}, ${orderData.number}, ${
        orderData.complement
      }, ${orderData.city}, ${orderData.state}
    Data de Entrega: ${orderData.deliveryDate}
    Hora de Entrega: ${orderData.deliveryTime}
    Total: R$${orderData.total}
        \n\nPor favor, confira as informações do seu pedido e aguarde instruções sobre o pagamento.
        \n\nDetalhes das Pizzas:
      ${orderData.pizzas
        .map((pizza) => `${pizza.flavor} - Quantidade: ${pizza.quantity}`)
        .join("\n")}
      `;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5584994084459&text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      // Limpar o localStorage após o envio
      localStorage.removeItem("orderData");

      // Atualizar estado para exibir a mensagem de agradecimento
      setIsSubmitted(true);
    } else {
      alert("Erro ao processar o pedido. Tente novamente.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="thank-you-page">
        <Header />
        <main className="thank-you-main">
          <h2>Obrigado pelo seu Pedido!</h2>
          <p>
            Seu pedido foi enviado com sucesso. Em breve, você receberá
            instruções sobre o pagamento pelo WhatsApp.
          </p>
          <button onClick={() => navigate("/")} className="home-btn">
            Voltar para Início
          </button>
          <button onClick={() => navigate("/menu")} className="menu-btn">
            Voltar ao Cardápio
          </button>
        </main>
      </div>
    );
  }

  if (!orderData) {
    return <p>Carregando informações do pedido...</p>;
  }

  return (
    <div className="payment-page">
      <Header />
      <main className="payment-main">
        <h2>Confirmação do Pedido</h2>
        <div className="order-summary">
          <h3>Resumo do Pedido</h3>
          <div className="pizza-list">
            <h3 className="Especial">Suas Pizzas</h3>
            {orderData.pizzas.length > 0 ? (
              <ul>
                {orderData.pizzas.map((pizza, index) => (
                  <li key={index}>
                    {pizza.flavor} - Quantidade: {pizza.quantity}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma pizza foi adicionada.</p>
            )}
          </div>
          <p>Total: R${orderData.total}</p>
          <h4>Informações de Entrega</h4>
          <p>
            <strong>Nome:</strong> {orderData.name}
          </p>
          <p>
            <strong>Telefone:</strong> {orderData.phone}
          </p>
          <p>
            <strong>Endereço:</strong> {orderData.address}, {orderData.number},{" "}
            {orderData.complement}, {orderData.city}, {orderData.state}
          </p>
          <p>
            <strong>Data de Entrega:</strong> {orderData.deliveryDate}
          </p>
          <p>
            <strong>Hora de Entrega:</strong> {orderData.deliveryTime}
          </p>
        </div>
        <button onClick={handleSendToWhatsApp} className="confirm-btn">
          Confirmar Pedido via WhatsApp
        </button>
        <p className="instructions">
          Clique no botão acima para confirmar seu pedido via WhatsApp. Você
          receberá instruções sobre o pagamento.
        </p>
      </main>
    </div>
  );
}

export default PaymentPage;
