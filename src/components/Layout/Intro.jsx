import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/intro.css";
const Intro = () => {
  return (
    <div>
      <Container fluid className="container-intro">
        <h1 className="title-intro">PIRIOU KEVIN</h1>

        <Link to={"/Accueil"}>VISITER</Link>
      </Container>
    </div>
  );
};

export default Intro;
