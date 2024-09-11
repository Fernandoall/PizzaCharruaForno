import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />

      {/* Seção de introdução com imagem de fundo */}
      <section
        className="intro"
        style={{ backgroundImage: "url('/path-to-image.jpg')" }}
      >
        <div className="intro-text">
          <h2>Bem-vindo à Fornos Charrua</h2>
          <p>
            Na Fornos Charrua, você encontra a verdadeira paixão pela pizza.
            Feita com ingredientes selecionados, nossa pizza é conhecida pelo
            sabor autêntico e a qualidade incomparável.
          </p>
          <Link to="/menu" className="cta-button">
            Veja Nosso Menu
          </Link>
        </div>
      </section>

      {/* Nova Seção de Ofertas Especiais com Cards */}
      <section className="offers-section">
        <h3>Ofertas Especiais</h3>
        <div className="offer-cards">
          <div className="offer-card">
            <img src="url-da-imagem-1" alt="Oferta 1" className="offer-image" />
            <h4>Pizza Margherita</h4>
            <p>Clássica pizza com molho de tomate, mussarela, manjericão.</p>
            <p className="offer-price">R$ 39,90</p>
          </div>

          <div className="offer-card">
            <img src="url-da-imagem-2" alt="Oferta 2" className="offer-image" />
            <h4>Pizza Pepperoni</h4>
            <p>Molho de tomate, mussarela e fatias de pepperoni.</p>
            <p className="offer-price">R$ 44,90</p>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <h3>Descubra Nossas Novidades!</h3>
        <p>
          Estamos sempre inovando para oferecer a melhor experiência.
          Experimente nossas novas receitas exclusivas ou aproveite nosso
          programa de fidelidade para garantir prêmios incríveis!
        </p>
        <Link to="/order" className="cta-button">
          Faça Seu Pedido Agora!
        </Link>
      </section>

      {/* Seção de Testemunhos */}
      <section className="testimonials">
        <h3>O que nossos clientes dizem</h3>

        <div className="testimonial-grid">
          {/* Testemunho 1 */}
          <div className="testimonial-item">
            <img
              src="url-da-imagem-1"
              alt="João Silva"
              className="testimonial-image"
            />
            <p>
              "Melhor pizza da cidade! Atendimento rápido e eficiente. Recomendo
              a todos!"
            </p>
            <h4>- João Silva</h4>
          </div>

          {/* Testemunho 2 */}
          <div className="testimonial-item">
            <img
              src="url-da-imagem-2"
              alt="Maria Oliveira"
              className="testimonial-image"
            />
            <p>
              "Ingredientes frescos e pizza deliciosa. Sempre peço aqui com a
              família!"
            </p>
            <h4>- Maria Oliveira</h4>
          </div>

          {/* Novo Testemunho 3 */}
          <div className="testimonial-item">
            <img
              src="url-da-imagem-3"
              alt="Carlos Souza"
              className="testimonial-image"
            />
            <p>"Pizza crocante e saborosa, sempre chega quentinha!"</p>
            <h4>- Carlos Souza</h4>
          </div>

          {/* Novo Testemunho 4 */}
          <div className="testimonial-item">
            <img
              src="url-da-imagem-4"
              alt="Ana Costa"
              className="testimonial-image"
            />
            <p>
              "Uma verdadeira experiência gastronômica. Atendimento excelente!"
            </p>
            <h4>- Ana Costa</h4>
          </div>
        </div>
      </section>

      <Link to="/order" className="cta-fixed-button">
        Faça Seu Pedido Agora!
      </Link>
    </div>
  );
}

export default HomePage;
