import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiGit,
  SiVercel,
  SiFigma,
  SiNotion,
} from "react-icons/si";

const Techs = () => {
  return (
    <>
      <h2>Técnologias:</h2>
      <ul className="techs">
        <li>
          <SiReact size={40} />
          <h3>React</h3>
        </li>
        <li>
          <SiRedux size={40} />
          <h3>Redux</h3>
        </li>
        <li>
          <SiJavascript size={40} />
          <h3>JavaScript</h3>
        </li>
        <li>
          <SiTypescript size={40} />
          <h3>TypeScript</h3>
        </li>
        <li>
          <SiHtml5 size={40} />
          <h3>HTML5</h3>
        </li>
        <li>
          <SiCss3 size={40} />
          <h3>CSS3</h3>
        </li>
      </ul>
      <h2>Ferramentas:</h2>
      <ul className="techs">
        <li>
          <SiGithub size={40} />
          <h3>GitHub</h3>
        </li>
        <li>
          <SiGit size={40} />
          <h3>GitBash</h3>
        </li>
        <li>
          <SiFigma size={40} />
          <h3>Figma</h3>
        </li>
        <li>
          <SiNotion size={40} />
          <h3>Notion</h3>
        </li>
        <li>
          <SiVercel size={40} />
          <h3>Vercel</h3>
        </li>
      </ul>
    </>
  );
};

export default Techs;
