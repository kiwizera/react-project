import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Posts from "./pages/Posts";
import Contato from "./pages/Contato";
import Contatos from "./pages/Contatos";
import "./styles/App.css";

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
