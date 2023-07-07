import React from "react";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const app = () => {
  return (
    <>
      <Router>
        {/*header*/}
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Nav />
        <Footer />
      </Router>
      {/*  */}
    </>
  );
};

export default app;
