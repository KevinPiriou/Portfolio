import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import fileDownload from "js-file-download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleClick = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  return (
    <Navbar id="main-navbar" variant="dark" className="fixed-top ">
      <Container fluid className="justify-content-evenly m-1">
        <Nav.Item>
          <a
            className="hover-fx"
            href="https://www.linkedin.com/in/kevin-piriou/"
            target="about_blank"
          >
            <FontAwesomeIcon
              icon="fab fa-linkedin"
              bounce
              transform="down-20 left-5"
            />
          </a>
        </Nav.Item>
        <Nav.Item> KEVIN PIRIOU Portfolio </Nav.Item>

        <Nav.Item className="mr-5">
          <a
            className="hover-fx"
            href="https://github.com/KevinPiriou"
            target="about_blank"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              bounce
              transform="down-20 left-5"
            />
          </a>
        </Nav.Item>
        <Button
          className="btn text-5xl p-3"
          style={{
            textDecoration: "none",
            color: "#EF6969",
            backgroundColor: "#161616",
          }}
          onClick={() => {
            handleClick(
              "https://raw.githack.com/KevinPiriou/CV/main/CV_2022-06-14_KEVIN_PIRIOU.pdf",
              "CV_PIRIOU_KEVIN.pdf"
            );
          }}
        >
          MON CV{" "}
          <FontAwesomeIcon
            icon="fa fa-id-card"
            beat
            pull="right"
            transform="shrink-1 right-5 down-6"
            inverse
          />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
