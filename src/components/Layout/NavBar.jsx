import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = ({ refContact, handleBackClick }) => {
  const [navBarColor, setNavBarColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 70
      ? setNavBarColor("#1E1D22")
      : setNavBarColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <Navbar
      id="main-navbar"
      style={{
        backgroundColor: navBarColor,
        color: "whitesmoke",
        borderBottomRadius: "50px",
      }}
      variant="dark"
      expand="xl"
      className="fixed-top "
    >
      <Container>
        <Navbar.Brand>
          <Link
            id="main-title"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontSize: "20px",
              fontFamily: "Coda",
              textTransform: "uppercase",
            }}
            to={"/Accueil"}
          >
            KEVIN PIRIOU | Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item className="px-5"> </Nav.Item>
          <Nav.Item className="px-5"> </Nav.Item>
          <Nav.Item className="px-5"> </Nav.Item>
          <Nav.Item className="px-5"> </Nav.Item>
          <Nav.Item className="px-5"> </Nav.Item>

          <Nav className="me-auto">
            <Nav.Item className="px-5"> </Nav.Item>

            <Nav.Item className="px-5"> </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
