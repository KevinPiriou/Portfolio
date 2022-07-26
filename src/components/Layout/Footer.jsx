import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const myFooter = () => {
  return (
    <div>
      <Navbar id="main-footer" className="d-flex">
        <Container className="text-white align-baseline">
          <div className="text-center">
            <a
              className="hover-fx"
              href="https://github.com/KevinPiriou"
              target="about_blank"
              id="github"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" border bounce />
            </a>
          </div>
          <div className="vr"></div>
          <div className="row text-center text-muted">
            <em>Piriou Kévin</em>
          </div>
          <div className="vr"></div>
          <div className="text-center">
            <a
              className="hover-fx"
              href="https://www.linkedin.com/in/kevin-piriou/"
              target="about_blank"
              id="linkedin"
            >
              <FontAwesomeIcon icon="fab fa-linkedin" border bounce />
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default myFooter;
