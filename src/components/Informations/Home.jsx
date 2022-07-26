import React from "react";
import Contact from "../Contact";
import AboutMe from "./AboutMe";
import Presentation from "./Presentation";
import Training from "./Training";
import Projects from "./Projects";
import { Container } from "react-bootstrap";
import Slogan from "./Slogan";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { useRef } from "react";
const Home = () => {
  const aboutWild1 = useRef(null);
  const scrollDownWild = () => {
    window.scrollTo({
      top: aboutWild1.current,
      behavior: "smooth",
    });
  };
  return (
    <Container className="flex-col md:flex md:flex-row justify-between p-4 mt-5">
      <NavBar />
      <Slogan />
      <Presentation />
      <hr></hr>
      <AboutMe />
      <hr></hr>
      <Training scrollDownWild={scrollDownWild} aboutWild1={aboutWild1} />
      <hr></hr>
      <Projects aboutWild1={aboutWild1} />
      <hr></hr>
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
