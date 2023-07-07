import React from "react";
import "./about.css";
import lbImg from "../../images/Myname.jpg";

import { FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaPython } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <h5>Learn</h5>
      <h2 className="changeColor">About Me</h2>
      <div className="container aboutContainer">
        <div className="myImg">
          <img src={lbImg} alt="avatar" />
        </div>
        <div className="aboutMe">
          <div className="displayCards">
            <article className="card">
              <MdWork className="icon" />
              <h5>Work Expirence</h5>
              <p>Fine Dining Server</p>
            </article>
            <article className="card">
              <FaAward className="icon" />
              <h5>Schooling</h5>
              <p>U of T Coding Bootcamp</p>
              {/*is it okay like this*/}
            </article>
            <article className="card">
              <FaPython className="icon" />
              <h5>Future Languages</h5>
              <p>Python</p>
            </article>
          </div>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            similique delectus exercitationem quibusdam eos quis vel quisquam
            beatae quaerat autem. Iure adipisci amet molestiae in cupiditate
            esse magnam, illo quos molestias. Sed laboriosam possimus illum ex
            minima distinctio culpa consequuntur exercitationem ducimus unde hic
            veritatis aspernatur, ipsa itaque repellat dolorum, doloribus omnis
            tempore non? Veniam obcaecati, explicabo provident voluptatibus
            nihil nulla minus ipsa perferendis officia, dolorem deleniti in
            inventore, repellendus quasi cumque sapiente facilis nostrum! Quod
            at est ratione corrupti ducimus et, quam repellendus asperiores
            natus maiores culpa perspiciatis excepturi. Rem, error nesciunt!
            Maxime iure facere earum eaque sapiente a.
          </p>

          <a href="#contact" className="btn btn-primary">
            contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
