import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import fileDownload from "js-file-download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Presentation = () => {
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
    <div>
      <div>
        <hr></hr>
      </div>
      <div className="mb-5">
        <div>
          <h2>Bonjour, je m'appelle</h2>
        </div>

        <br></br>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
            border: "solid #54b3d6 2px",
            borderRadius: "35px",

            boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
            fontFamily: "Coda",
          }}
          className="m-2 p-4"
        >
          <div
            id="name-effect"
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <p className="display-5 text-5xl md:text-6xl lg:text-8xl my-6 md:my-9">
              Kévin PIRIOU
            </p>
          </div>

          <p className="h4 font-body text-2xl md:text-3xl ">
            - Développeur Web -
          </p>

          <div>
            <Button
              id="cv"
              className="btn btn-md text-5xl p-3"
              style={{
                textDecoration: "none",
                color: "#54b3d6",
                backgroundColor: "#1E1D22",
                margin: "15px",
                borderColor: "#54b3d6",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              }}
              onClick={() => {
                handleClick(
                  "https://rawcdn.githack.com/KevinPiriou/CV/044b8d4d07df1731b89186be56ab0082e1f32723/CV_2022-07-25_KEVIN_PIRIOU.pdf",
                  "CV_PIRIOU_KEVIN.pdf"
                );
              }}
            >
              Téléchargez mon CV
              <FontAwesomeIcon
                icon="fa fa-id-card"
                beat
                pull="right"
                inverse
                border
              />
            </Button>
            <hr></hr>
          </div>
          <div
            id="method"
            className="d-flex p-1 justify-content-center mt-3 mb-5"
            style={{
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "whitesmoke",
                backgroundColor: "#1E1D22",
                margin: "20px",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "35px",
                border: " solid 1px #71BC68",
              }}
            >
              <p className="h5 font-body text-2xl md:text-3xl ">
                STATUT ACTUEL
              </p>
            </div>
            <div className="mb-3">
              <br></br>
              <strong>Admis</strong> à l'école Wild Code School pour une
              formation de Concepteur Développeur d’Application en alternance
            </div>
            <div className="d-flex flex-column justify-content-center pb-2">
              <p style={{ color: "#d8cdba", fontSize: "20px" }}>
                Mon objectif est de trouver un contrat de professionnalisation
                d'une durée de 1 an à partir de <strong>Septembre 2022</strong>,
                qui me permettra de mettre mon apprentissage au service d'une
                entreprise et d'enrichir mes compétences professionnelles
              </p>
              <br></br>
              <div
                style={{
                  color: "whitesmoke",
                  backgroundColor: "#1E1D22",
                  margin: "20px",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "35px",
                  border: " solid 1px #71BC68",
                }}
              >
                <p className="h5 font-body text-2xl md:text-3xl ">
                  WILD CODE SCHOOL
                </p>
              </div>
              <br></br>
              <p>
                <strong>Concepteur Développeur d’Application</strong>
              </p>
              <p>Niveau 6 et inscrit au RNCP</p>

              <p>
                React - NodeJS - Typescript - JEST - MongoDb - MySQL - GraphQL -
                Flutter / React Native
              </p>
              <p>3 semaines en entreprise pour 1 semaine à l'école</p>
              <p>Région CENTRE | Télétravail partiel ou 100% possible</p>
              <br></br>
              <div
                style={{
                  color: "whitesmoke",
                  backgroundColor: "#1E1D22",
                  padding: "10px",
                  border: " solid 1px #CB022D",
                  borderRadius: "35px",
                }}
              >
                <strong>
                  Une aide de 5 000 € ou 8 000 € est accordée aux entreprises
                  pour les embauches d'apprentis dont les contrats sont signés
                  jusqu’au 31 décembre 2022
                </strong>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-row justify-content-center mb-3"
            style={{ boxShadow: "12px 12px 12px 0px rgba(0,0,0,0.75)" }}
          >
            <Container
              fluid
              style={{
                backgroundColor: "#171615",

                border: "solid",
                borderWidth: "1px",
                padding: "3px",
              }}
            >
              <div className="d-flex justify-content-center p-2 pt-4">
                <p
                  className="h5 font-body text-2xl md:text-3xl "
                  style={{ color: "#D14F09" }}
                >
                  {" "}
                  Soft Skills{" "}
                </p>
              </div>
              <hr></hr>
              <div
                className="d-flex justify-content-center px-2 py-2"
                style={{
                  flexDirection: "column",
                  padding: "3px",
                  alignItems: "center",
                }}
              >
                <div
                  className="info-collapseSoft pt-1"
                  style={{ backgroundColor: "#1F1E1D", border: "solid 1px" }}
                >
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    Autonomie{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p>
                      Lors de ma collaboration au sein d'un restaurant rapide,
                      mon sens de l'organisation et mon autonomie m'ont permis
                      de devenir <br></br>-assistant- manager du restaurant.
                    </p>
                  </div>
                </div>

                <br></br>
                <div
                  className="info-collapseSoft pt-1"
                  style={{ backgroundColor: "#1F1E1D", border: "solid 1px" }}
                >
                  {" "}
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    Travail en équipe{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p>
                      En tant que<br></br> -assistant- manager la mise en avant
                      du travail en équipe et pour l'équipe était primordiale.
                      Nous avons su fédéré une équipe autour des mêmes
                      objectifs.
                    </p>
                  </div>
                </div>

                <br></br>
                <div
                  className="info-collapseSoft pt-1"
                  style={{ backgroundColor: "#1F1E1D", border: "solid 1px" }}
                >
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    Curiosité{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p>Blablablacla</p>
                  </div>
                </div>

                <br></br>
                <div
                  className="info-collapseSoft pt-1"
                  style={{ backgroundColor: "#1F1E1D", border: "solid 1px" }}
                >
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    Communication{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p>Blablablacla</p>
                  </div>
                </div>

                <br></br>
              </div>
            </Container>

            <Container
              fluid
              style={{
                backgroundColor: "#171615",
                border: "solid",
                borderWidth: "1px",
                padding: "3px",
              }}
            >
              <div className="d-flex justify-content-center p-2 pt-4">
                <p
                  className="h5 font-body text-2xl md:text-3xl "
                  style={{ color: "#D14F09" }}
                >
                  {" "}
                  Hard Skills{" "}
                </p>
              </div>
              <hr></hr>
              <div
                className="d-flex justify-content-center px-2 py-2"
                style={{
                  flexDirection: "column",
                  padding: "3px",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <div
                  className="info-collapse pt-1"
                  style={{
                    color: "#DC3545",
                    backgroundColor: "#1F1E1D",
                    border: "solid 1px",
                  }}
                >
                  {" "}
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    HTML{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p> Elément HTML </p>
                    <p> Formulaire </p>
                    <p> Media Queries </p>
                    <p> CDN </p>
                  </div>
                </div>

                <br></br>
                <div
                  className="info-collapse pt-1"
                  style={{
                    color: "#244BDD",
                    backgroundColor: "#1F1E1D",
                    border: "solid 1px",
                  }}
                >
                  {" "}
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    CSS{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p> Border-Box </p>
                    <p> Flex | Grid </p>
                    <p> Animation </p>
                    <p> Bootstrap </p>
                    <p> Less | Sass </p>
                  </div>
                </div>

                <br></br>

                <div
                  className="info-collapse pt-1"
                  style={{
                    color: "#EFD81E",
                    backgroundColor: "#1F1E1D",
                    border: "solid 1px",
                  }}
                >
                  {" "}
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    JavaScript{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p> POO </p>
                    <p> Approche Fonctionnel </p>
                    <p> ES6+ </p>
                    <p> DOM </p>
                  </div>
                </div>

                <br></br>
                <div
                  className="info-collapse pt-1"
                  style={{
                    color: "#5ED3F3",
                    backgroundColor: "#1F1E1D",
                    border: "solid 1px",
                  }}
                >
                  {" "}
                  <h6
                    id="tagSkills"
                    style={{ fontFamily: "Concert One", fontSize: "17px" }}
                  >
                    {" "}
                    React{" "}
                  </h6>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-down" id="arrow" />
                  <br></br>
                  <div>
                    <p> Hooks </p>
                    <p> Axios </p>
                    <p> Api REST </p>
                    <p> React Bootstrap </p>
                    <p> Styled-Components </p>
                    <p> React Native </p>
                  </div>
                </div>

                <br></br>
              </div>
            </Container>
          </div>
          <br></br>
        </Card>
      </div>
    </div>
  );
};

export default Presentation;
