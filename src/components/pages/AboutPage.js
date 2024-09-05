import React from "react";
import Header from "../common/header";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <section className="about-section">
        <h2>Sobre Nós</h2>
        <p>
          A Fornos Charrua é uma pizzaria dedicada a oferecer a melhor
          experiência gastronômica, combinando ingredientes de alta qualidade
          com um ambiente acolhedor.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
