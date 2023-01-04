import React from "react";
import { SiGithub } from "react-icons/si";
import printBurguerKenzie from "../../../assets/printBurguerKenzie.png";
import { Project } from "../styles";

const ProjectKenzieHub = () => {
  return (
    <Project className="container">
      <div className="links">
        <h2>
          <a href="https://kenzie-hub-neon-sigma.vercel.app">Kenzie Hub</a>
        </h2>
      </div>
      <p className="size-18">
        Esse projeto simula um ambiente, no qual o usuário pode criar uma conta
        e administrar o próprio status de conhecimento com cada tecnologia que
        ele escolher criar.
      </p>
      <p className="size-18">
        Ele tem funcionalidades como login, cadastro, modal para criar
        tecnologias, editar o status de conhecimento e deletar tecnologia.
      </p>
      <p className="size-18">
        Foi feito conforme entrega semanal do curso Kenzie Academy e está
        utilizando a api disponibilizada por eles.
      </p>
      <div className="div-below">
        <div className="w-50">
          <p className="size-18 margin-10 color-silver">
            ReactJs, bibliotecas utilizadas:
          </p>
          <ul className="list-disc color-silver">
            <li>Axios para fazer as requisições da api;</li>
            <li>Styled-components para estilizar a aplicação;</li>
            <li>React-router-dom para criar rotas de páginas;</li>
            <li>React-hook-form para pegar os dados dos formulários;</li>
            <li>
              @hookform/resolvers yup para mostrar e aplicar os requisitos para
              cada dado dos formulários;
            </li>
            <li>
              React-toastify para mostrar as mensagens de toast depois de alguma
              requisição;
            </li>
            <li>React-icons para pegar icones e adicionar na aplicação.</li>
            <a href="https://github.com/leomitas/kenzie-hub" className="github">
              <SiGithub size={40} />
              Portifólio do projeto
            </a>
          </ul>
        </div>
        <img src={printBurguerKenzie} />
      </div>
    </Project>
  );
};

export default ProjectKenzieHub;
