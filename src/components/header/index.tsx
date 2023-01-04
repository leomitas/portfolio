import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";

const Header = () => {
  return (
    <HeaderStyled className="container">
      <h2>Leonardo Abreu</h2>
      <nav>
        <a href="#about-me">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
