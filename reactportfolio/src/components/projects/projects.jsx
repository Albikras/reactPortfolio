import React from "react";

import blackjack from "../../images/blakcJackWebpage.png";
import bookApp from "../../images/bookflix.png";
import notes from "../../images/notes.png";
import plan from "../../images/daily.png";
import quiz from "../../images/quiz.png";
import blog from "../../images/blog.png";

import "./projects.css";

const data = [
  {
    id: 1,
    image: blackjack,
    altimg: "application image",
    title: "Blackjack Webpage",
    github: "https://github.com/Nick-JDA/Blackjack-Webpage",
    liveApp: "https://nick-jda.github.io/Blackjack-Webpage/",
  },
  {
    id: 2,
    image: bookApp,
    title: "BookFlix",
    altimg: "application image",
    github: "https://github.com/JohnDavidSmith/Book-Database",
    liveApp: "https://stormy-atoll-29529-b51ffbbd6de0.herokuapp.com/",
  },
  {
    id: 3,
    image: notes,
    altimg: "application image",
    title: "Notes",
    github: "https://github.com/Albikras/Notes",
    liveApp: "https://notescreator.herokuapp.com/",
  },
  {
    id: 4,
    image: plan,
    altimg: "application image",
    title: "Daily Planner",
    github: "https://github.com/Albikras/DailyPlanner",
    liveApp: "https://albikras.github.io/DailyPlanner/",
  },
  {
    id: 5,
    image: quiz,
    altimg: "application image",
    title: "Quiz",
    github: "https://github.com/Albikras/Quiz",
    liveApp: "https://albikras.github.io/Quiz/",
  },
  {
    id: 6,
    image: blog,
    altimg: "application image",
    title: "Tech Blog",
    github: "https://github.com/Albikras/Blog",
    liveApp: "https://blogtech1287-5a4305b591eb.herokuapp.com/",
  },
];

const projects = () => {
  return (
    <section>
      <h5>Have A Look At Some Of My Previous</h5>
      <h2>Projects</h2>

      <div className="container portContainer">
        {data.map(({ id, image, altimage, title, github, liveApp }) => {
          return (
            <article key={id} className="project">
              <div className="projectImg">
                <img src={image} alt={altimage} />
              </div>
              <h3>{title}</h3>
              <div className="projectBtns">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={liveApp} className="btn btn-primary">
                  Live App
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default projects;
