import React from "react";
import ProjectHamburgueriaKenzie from "./projectHamburgueriaKenzie";
import ProjectKenzieHub from "./projectKenzieHub";
import { ProjectsStyled } from "./styles";

const Projects = () => {
  return (
    <ProjectsStyled>
      <div className="border" id="projects">
        <ProjectKenzieHub />
      </div>
      <ProjectHamburgueriaKenzie />
    </ProjectsStyled>
  );
};

export default Projects;
