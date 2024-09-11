import React, { useState } from "react";
import axios from "axios";
import "./AdminLoginPage.css";

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/admin/dashboard"; // Redireciona para o painel
    } catch (error) {
      setErrorMessage("Credenciais incorretas.");
    }
  };

  return (
    <div className="admin-login-page">
      <h2>Painel Administrativo</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="username">
          Usuário:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
