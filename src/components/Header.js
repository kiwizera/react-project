import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <Link to="/">
      <h1>Projeto Institucional React</h1>
    </Link>
    <nav>
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/posts">Publicações</Link>
      <Link to="/contatos">Contatos</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  </header>
);

export default Header;
