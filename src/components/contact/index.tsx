import React from "react";
import { MdEmail } from "react-icons/md";
import { SiWhatsapp, SiInstagram, SiLinkedin } from "react-icons/si";
import { ContactStyled } from "./styles";

const Contact = () => {
  return (
    <ContactStyled id="contact">
      <div className="container">
        <a href="mailto:leonardo.abreu.dev@gmail.com?">
          <MdEmail size={40} color="white" />
        </a>
        <a href="https://wa.me/12992412575">
          <SiWhatsapp size={40} color="white" />
        </a>
        <a href="https://www.instagram.com/leomitas/">
          <SiInstagram size={40} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-abreu2402/">
          <SiLinkedin size={40} color="white" />
        </a>
      </div>
    </ContactStyled>
  );
};

export default Contact;
