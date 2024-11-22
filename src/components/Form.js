import React, { useState } from "react";
import api from "../services/api";
import "../styles/Form.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // Função de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    try {
      const newContact = {
        nome: name, 
        email 
      };

      // Envia os dados ao JSON Server
      await api.post("/contacts", newContact);

      // Limpa o formulário e exibe sucesso
      setName("");
      setEmail("");
      setStatus("Contato adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar contato:", error);
      setStatus("Ocorreu um erro ao enviar o formulário.");
    }
  };

  return (
    <div>
      <h2>Adicionar Contato</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
