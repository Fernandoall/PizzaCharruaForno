import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app"; // Importa o componente principal
import "./styles/main.css"; // Importa o CSS principal

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
