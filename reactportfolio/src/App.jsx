import React from "react";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Expirence from "./components/expirence/Expirence";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route exact path="/reactPortfolio" element={<Intro />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/portfolio" element={<Projects />}></Route>
          <Route exact path="/expirence" element={<Expirence />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Nav />
        <Footer />
      </Router>
    </>
  );
};

export default App;
