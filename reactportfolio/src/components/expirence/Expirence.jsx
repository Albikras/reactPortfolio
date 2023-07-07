import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./expirence.css";
import DownloadRes from "./DownloadRes";

const Expirence = () => {
  return (
    <section>
      <h5>Skills I Have</h5>
      <h2>My Expirence</h2>

      <div className="container expContainer">
        <div className="frontEnd">
          <h3>Frontend</h3>
          <div className="content">
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Bootstrap</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>JavaScript</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>React</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Tailwind</h4>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
        <div className="backEnd">
          <h3>Backend</h3>
          <div className="content">
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Node JS</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MongoDB</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Java</h4>
                <p>Basic</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Express JS</h4>
                <p>Intermediate</p>
              </div>
            </article>
            <article className="expText">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Python</h4>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <DownloadRes />
    </section>
  );
};

export default Expirence;
