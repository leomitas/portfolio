import React from "react";
import AboutMe from "../../components/aboutMe";
import Contact from "../../components/contact";
import Header from "../../components/header";
import PersonalImage from "../../components/PersonalImage";
import Projects from "../../components/projects";
import { Home } from "./styles";

const HomePage = () => {
  return (
    <Home>
      <Header />
      <PersonalImage />
      <AboutMe />
      <Projects />
      <Contact />
    </Home>
  );
};

export default HomePage;
