import React from "react";
import { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { PiNotepadBold } from "react-icons/pi";

import { GrProjects } from "react-icons/gr";

import "./nav.css";

const Nav = () => {
  const [navbar, setNav] = useState("/");
  return (
    <nav>
      <a
        href="/"
        onClick={() => setNav("/")}
        className={navbar === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="/about"
        onClick={() => setNav("/about")}
        className={navbar === "/about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="/portfolio"
        onClick={() => setNav("/portfolio")}
        className={navbar === "/portfolio" ? "active" : ""}
      >
        <GrProjects />
      </a>
      <a
        href="/resume"
        onClick={() => setNav("/resume")}
        className={navbar === "/resume" ? "active" : ""}
      >
        <PiNotepadBold />
      </a>
      <a
        href="/contact"
        onClick={() => setNav("/contact")}
        className={navbar === "/contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
