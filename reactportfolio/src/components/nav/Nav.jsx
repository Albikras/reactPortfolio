import React from "react";
import { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaCog } from "react-icons/fa";

import { Link } from "react-router-dom";

import { GrProjects } from "react-icons/gr";

import "./nav.css";

const Nav = () => {
  const [navbar, setNav] = useState("/");
  return (
    <>
      <nav>
        <Link to="/">
          <a
            href="/"
            onClick={() => setNav("/")}
            className={navbar === "/" ? "active" : ""}
          >
            <AiOutlineHome className="iconNav" />
          </a>
        </Link>
        <Link to="/about">
          <a
            href="/about"
            onClick={() => setNav("/about")}
            className={navbar === "/about" ? "active" : ""}
          >
            <AiOutlineUser className="iconNav" />
          </a>
        </Link>
        <Link to="/portfolio">
          <a
            href="/portfolio"
            onClick={() => setNav("/portfolio")}
            className={navbar === "/portfolio" ? "active" : ""}
          >
            <GrProjects className="iconNav" />
          </a>
        </Link>
        <Link to="/expirence">
          <a
            href="/expirence"
            onClick={() => setNav("/expirence")}
            className={navbar === "/expirence" ? "active" : ""}
          >
            <FaCog className="iconNav" />
          </a>
        </Link>
        <Link to="/contact">
          <a
            href="/contact"
            onClick={() => setNav("/contact")}
            className={navbar === "/contact" ? "active" : ""}
          >
            <AiFillMessage className="iconNav" />
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
