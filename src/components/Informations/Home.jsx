import React from "react";
import AboutMe from "./AboutMe";
import Presentation from "./Presentation";
import Training from "./Training";
import Projects from "./Projects";
import { Container } from "react-bootstrap";
import Slogan from "./Slogan";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
const Home = () => {
  return (
    <Container className="flex-col md:flex md:flex-row justify-between p-4 mt-5">
      <NavBar />
      <Slogan />
      <Presentation />
      <hr></hr>
      <AboutMe />
      <hr></hr>
      <Training />
      <hr></hr>
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
