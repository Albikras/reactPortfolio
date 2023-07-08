import React from "react";
import { Link } from "react-router-dom";

const IntroBtns = () => {
  return (
    <div className="introButtons">
      <Link to="/about">
        <a href="/about" className="btn">
          Learn More
        </a>
      </Link>
      <Link to="/contact">
        <a href="/contact" className="btn btn-primary">
          Contact Me
        </a>
      </Link>
    </div>
  );
};

export default IntroBtns;
