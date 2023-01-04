import React from "react";
import { SiGithub } from "react-icons/si";
import { Project } from "../styles";
import printBurguerKenzie from "../../../assets/printBurguerKenzie.png";

const ProjectHamburgueriaKenzie = () => {
  return (
    <Project className="container">
      <h2>
        <a href="https://hamburgueria-kenzie-beige.vercel.app/">
          Hamburgueria Kenzie
        </a>
      </h2>
      <p className="size-18">
        Esse projeto simula um ambiente de uma loja online, no qual o usuário
        pode criar uma conta, ver os produtos disponíveis e valor total da
        compra, além de adicionar os produtos ao carrinho.
      </p>
      <p className="size-18">
        Ele tem funcionalidades como login, cadastro, modal de carrinho que
        mostra os produtos adicionados.
      </p>
      <p className="size-18">
        Foi feito como entrega semanal do curso Kenzie Academy e está utilizando
        a api disponibilizada por eles.
      </p>
      <div className="div-below">
        <div className="w-50">
          <p className="color-silver size-18">
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
            <a
              href="https://github.com/leomitas/hamburgueria-kenzie"
              className="github"
            >
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

export default ProjectHamburgueriaKenzie;
