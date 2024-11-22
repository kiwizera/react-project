import React from "react";
import Form from "../components/Form";
import api from "../services/api";

const Contato = () => {
  const handleSubmit = (dados) => {
    api.post("/contacts", dados).then(() => {
      alert("Contato enviado com sucesso!");
    });
  };

  return (
    <div>
      <h2>Fale Conosco</h2>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Contato;
