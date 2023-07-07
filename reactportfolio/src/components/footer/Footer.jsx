import React from "react";

import "./footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Albikras?tab=repositories" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/albikrasniqi1/" target="_blank">
        <BsInstagram />
      </a>

      <div className="copyRight">
        <small>&copy; Albi Krasniqi</small>
      </div>
    </footer>
  );
};

export default Footer;
