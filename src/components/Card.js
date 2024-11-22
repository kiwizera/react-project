import React from "react";
import "../styles/Card.css";

const Card = ({ titulo, conteudo }) => (
  <div className="card">
    <h3>{titulo}</h3>
    <p>{conteudo}</p>
  </div>
);

export default Card;
