import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { Card, ListGroup } from "react-bootstrap";
const Details = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "125px" }}>
        <Card
          fluid
          style={{
            display: "flex",
            border: "solid #D14F09",

            padding: "20px",
            margin: "20px",
            borderRadius: "50px",
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",

            fontFamily: "Coda",
          }}
          className="mx-3 p-2 mt-5"
        >
          <Card.Title>IDENTITE</Card.Title>

          <Card.Body>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              PIRIOU
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              KEVIN
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              27 / 03 / 1990
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              TOURS
            </ListGroup.Item>
          </Card.Body>
        </Card>

        <Card
          fluid
          style={{
            display: "flex",
            border: "solid #D14F09",

            padding: "20px",
            margin: "20px",
            borderRadius: "50px",
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",

            fontFamily: "Coda",
          }}
          className="mx-3 p-2 mt-2"
        >
          <Card.Title>EXPERIENCES PROFESSIONNELLES</Card.Title>

          <Card.Body>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>2011 - 2020 : ASSISTANT MANAGER EN RESTAURATION RAPIDE</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>2010 - 2011 : EMPLOYE POLYVALENT EN RESTAURATION RAPIDE</pre>
            </ListGroup.Item>
          </Card.Body>
        </Card>

        <Card
          fluid
          style={{
            display: "flex",
            border: "solid #D14F09",

            padding: "20px",
            margin: "20px",
            borderRadius: "50px",
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",

            fontFamily: "Coda",
          }}
          className="mx-3 p-2 mt-2"
        >
          <Card.Title>STACKS</Card.Title>

          <Card.Body>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>HTML | CSS | JAVASCRIPT</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>REACT | REACT NATIVE</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>RUBY | RUBY ON RAILS</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>BOOTSTRAP | STYLED-COMPONENTS</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>GIT | GITHUB | TRELLO | FIGMA | AGILE | SCRUM | VSCODE</pre>
            </ListGroup.Item>
          </Card.Body>
        </Card>

        <Card
          fluid
          style={{
            display: "flex",
            border: "solid #D14F09",

            padding: "20px",
            margin: "20px",
            borderRadius: "50px",
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",

            fontFamily: "Coda",
          }}
          className="mx-3 p-2 mt-2"
        >
          <Card.Title>HOBBY</Card.Title>

          <Card.Body>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>INFORMATIQUE | TECHNOLOGIES</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>NEW SPACE | ASTROMODELISME</pre>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                borderRadius: "50px",
                backgroundColor: "#1C1B1A",
                color: "whitesmoke",
              }}
            >
              <pre>JEUX-VIDEOS | SPORT AUTOMOBILE</pre>
            </ListGroup.Item>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
