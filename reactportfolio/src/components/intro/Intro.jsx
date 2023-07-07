import React from "react";
import "./header.css";
import lbImg from "../../images/Myname.jpg";
import Socials from "./Socials";

const Intro = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Albi Krasniqi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div>
          <div className="myImage">
            <img src={lbImg} alt="avatar" />
          </div>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Intro;
