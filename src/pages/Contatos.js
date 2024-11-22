import React, { useState, useEffect } from "react";
import api from "../services/api";
import Card from "../components/Card";

const Contatos = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then((response) => setContacts(response.data));
  }, []);

  return (
    <div>
      <h2>Contatos</h2>
      {contacts.map((contact) => {
        function handleClick() {
          api.delete("/contacts/" + contact.id);
          window.location.reload();
        }
        
        return (
          <>
            <Card key={contact.id} titulo={contact.nome} conteudo={`Email: ${contact.email}`} />
            <button onClick={handleClick}>Deletar contato</button>
          </>
        );
      })}
    </div>
  );
};

export default Contatos;
