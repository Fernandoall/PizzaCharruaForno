import React from "react";
import Header from "../common/header";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <section className="intro">
        <h2>Bem-vindo à Fornos Charrua</h2>
        <p>
          Na Fornos Charrua, você encontra a verdadeira paixão pela pizza. Feita
          com ingredientes selecionados, nossa pizza é conhecida pelo sabor
          autêntico e a qualidade incomparável.
        </p>
        <div className="offers">
          <h3>Ofertas Especiais:</h3>
          <ul>
            <li>Segunda-feira: Pizza Margherita com 20% de desconto!</li>
            <li>
              Quarta-feira: Leve 2 Pizzas pelo preço de 1 em qualquer sabor!
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
