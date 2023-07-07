import React from "react";
import "./intro.css";
import lbImg from "../../images/Myname.jpg";
import Socials from "./Socials";
import IntroBtns from "../introBtns/IntroBtns";

const Intro = () => {
  return (
    <section>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Albi Krasniqi</h1>
        <h5>Fullstack Developer</h5>
        <IntroBtns />
        <div>
          <div className="myImage">
            <img src={lbImg} alt="avatar" />
          </div>
          <Socials />
        </div>
        <h5>Or Use the Navigation Bar Below to See More!!</h5>
      </div>
    </section>
  );
};

export default Intro;
