import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboardPage.css";

function AdminDashboardPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/orders", {
        headers: { Authorization: token },
      });
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-dashboard-page">
      <h2>Pedidos Recebidos</h2>
      <table>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Quantidade</th>
            <th>Endereço</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.pizza}</td>
              <td>{order.quantity}</td>
              <td>{order.address}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboardPage;
