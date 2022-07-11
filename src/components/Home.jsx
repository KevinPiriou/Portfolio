import React from "react";
import { useState } from "react";

import {
  Badge,
  Container,
  Image,
  Card,
  Button,
  Modal,
  ProgressBar,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [showMatchAndFeat, setShowMatchAndFeat] = useState(false);
  const [showEpicat, setShowEpicat] = useState(false);
  const [showSpaceX, setShowSpaceX] = useState(false);
  const [showPotager, setShowPotager] = useState(false);

  const handleCloseMatchAndFeat = () => setShowMatchAndFeat(false);
  const handleCloseEpicat = () => setShowEpicat(false);
  const handleCloseSpaceX = () => setShowSpaceX(false);
  const handleClosePotager = () => setShowPotager(false);

  const handleShowMatchAndFeat = () => setShowMatchAndFeat(true);
  const handleShowEpicat = () => setShowEpicat(true);
  const handleShowSpaceX = () => setShowSpaceX(true);
  const handleShowPotager = () => setShowPotager(true);

  return (
    <Container className="flex-col md:flex md:flex-row justify-between p-4 mt-5">
      <div className="mb-5">
        <h2
          className="h5 text-5xl md:text-6xl lg:text-7xl mt-5"
          style={{ opacity: "1" }}
        >
          Bonjour, je m'appelle
        </h2>

        <br></br>
        <Card
          bg="dark"
          style={{
            border: "solid",
            borderColor: "#F09D0F",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          }}
          className="m-2 p-4"
        >
          <p className="display-6 text-5xl md:text-6xl lg:text-8xl my-6 md:my-9">
            Kévin PIRIOU
          </p>
          <hr></hr>
          <p
            className="h4 font-body text-2xl md:text-3xl "
            style={{
              opacity: "1",
              transform: "translateX(0px) translateZ(0px)",
            }}
          >
            Alternant Développeur Web{" "}
          </p>
          <em className="text-center">
            - Admis à l'école Wild Code School pour une Formation développeur
            d'applications en alternance -
          </em>
          <hr></hr>

          <div
            className="d-flex p-2 justify-content-center mt-3 mb-3"
            style={{
              border: "solid",
              borderColor: "#026760",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
              flexDirection: "column",
            }}
          >
            <div className="h4 font-body text-2xl md:text-3xl">
              <p>Statut actuel</p>
            </div>

            <div>
              <em>
                - En recherche d'une entreprise pour un contrat de
                professionalisation d'une durée de 1 an -
              </em>
            </div>
          </div>

          <Container
            fluid
            className="d-flex flex-row justify-content-evenly m-2 "
          >
            <Container
              fluid
              style={{
                backgroundColor: "#202529",
                border: "solid",
                margin: "5px",
                padding: "15px",
                maxWidth: "fill-available",
                width: "200px",
              }}
            >
              <h6>SoftSkills</h6>
              <hr></hr>
              <div
                className="d-flex"
                style={{ flexDirection: "column", maxWidth: "fill-available" }}
              >
                <p>Autonomie</p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="light"
                  animated
                  now={90}
                  max={100}
                  min={0}
                />
                <br></br>
                <p> Travail en équipe </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="light"
                  animated
                  now={73}
                  max={100}
                  min={0}
                />
                <br></br>
                <p>Curiosité</p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="light"
                  animated
                  now={90}
                  max={100}
                  min={0}
                />
                <br></br>
                <p>Communication</p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="light"
                  animated
                  now={70}
                  max={100}
                  min={0}
                />
                <br></br>
              </div>
            </Container>

            <Container
              fluid
              style={{
                backgroundColor: "#202529",
                border: "solid",
                margin: "5px",
                padding: "15px",
                maxWidth: "fill-available",
                width: "200px",
              }}
            >
              <h6>HardSkills</h6>
              <hr></hr>
              <div
                className="d-flex"
                style={{ flexDirection: "column", maxWidth: "fill-available" }}
              >
                <p style={{ color: "#DD4B26" }}> HTML </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#DD4B26",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="dark"
                  animated
                  now={15}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#244BDD" }}>CSS</p>
                <ProgressBar
                  style={{
                    backgroundColor: "#244BDD",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="dark"
                  animated
                  now={35}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#EFD81E" }}> JavaScript </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#EFD81E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="dark"
                  animated
                  now={30}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#5ED3F3" }}> React & React Native </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#5ED3F3",
                    border: "solid",
                    borderColor: "black",
                    color: "#5ED3F3",
                  }}
                  variant="dark"
                  animated
                  now={50}
                  max={100}
                  min={0}
                />
                <br></br>
              </div>
            </Container>
          </Container>
          <br></br>
        </Card>
      </div>
      <hr></hr>
      <div className="mb-5">
        <p className="display-5 text-6xl text-t-primary p-4 font-display tracking-wider  ">
          A propos de moi
        </p>
        <em
          className="display-6"
          style={{ fontFamily: "Coda", fontSize: "18px" }}
        >
          Actuellement en reconversion en tant que développeur web, je suis à la
          recherche d’un contrat de professionnalisation d’une durée de un an à
          partir de septembre 2022. Passionné par le numérique et ses outils,
          j'ai su faire preuve de curiosité et d'initiative lors de mes
          précédentes formations durant lesquelles j'ai appris le métier de
          développeur web. Cependant, conscient de la richesse que ce monde
          offre en connaissances, je préfère apprendre auprès d'une entreprise,
          de ses collaborateurs et de leur savoir, pour ainsi me garantir une
          qualiﬁcation qualitative.
        </em>
      </div>
      <hr></hr>
      <p className="display-5 text-6xl text-t-primary p-4 font-display tracking-wider  ">
        Mes Formations
      </p>

      <Container
        fluid
        style={{
          backgroundColor: "#202529",
          border: "solid",
          borderColor: "#F09D0F",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="d-flex flex-row justify-content-center ">
          <div
            className="m-2 p-2 text-5xl md:text-6xl lg:text-8xl my-6 md:my-9"
            style={{ backgroundColor: "#6666CE" }}
          >
            <h1 className="display-6">THE HACKING PROJECT</h1>
            <em>'Formation Fullstack Ruby'</em>
            <br></br>
            <br></br>
            <p>Sept 21 / Dec 21</p>

            <p>- Distanciel -</p>
            <p class="flex justify-content-center m-2 p-2">
              <hr></hr>
              <p className="text-dark">Notions et languages appris</p>
              <p style={{ listStyleType: "none" }}>
                HTML CSS JS Bootstrap AJAX Git GitHub<br></br> RubyOnRails POO
                MVC API SQL Agile Scrum
              </p>
              <hr></hr>
            </p>
          </div>
          <div className="vr"></div>
          <div className="d-flex flex-row justify-content-evenly"></div>
          <div
            className="m-2 p-2 text-6xl md:text-6xl lg:text-8xl my-6 md:my-9"
            style={{ backgroundColor: "#EF6969", color: "whitesmoke" }}
          >
            <h1 className="display-6">WILD CODE SCHOOL</h1>
            <em>'Spécialisation Front-end JS | React'</em>
            <br></br>
            <br></br>
            <p>Fev 22 / Mai 22</p>

            <p>- Distanciel -</p>
            <p className="flex justify-content-center m-2 p-2">
              <hr></hr>
              <p className="text-dark">Notions et languages appris</p>
              <p style={{ listStyleType: "none" }}>
                JS React ReactNative Node.js NPM Agile Scrum
              </p>
              <hr></hr>
            </p>
          </div>
        </div>
      </Container>

      <p className="display-5 text-6xl text-t-primary p-4  font-display tracking-wider  ">
        Mes Projets
      </p>

      <div className="flex flex-col items-center" style={{ heigth: "auto" }}>
        <div>
          <Card
            className="d-flex mt-3 p-3 rounded border-info bg-dark text-white"
            style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Header>
              <h2 className="text-success">
                <FontAwesomeIcon icon="fa-solid fa-rocket" border inverse />{" "}
                SPACEX INFO{" "}
              </h2>
            </Card.Header>
            <Badge pill className="mb-3 p-2 mt-1" bg="light" text="dark">
              <h6>PROJET PERSONNEL</h6>
            </Badge>
            <div>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>HTML</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>CSS</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>JavaScript</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>React</h6>
              </Badge>
            </div>
            <div className="d-flex m-2 justify-content-center">
              <Image
                src="https://i.ibb.co/CsNTrDy/space-Site.png"
                alt="screen-SpaceXinfo-site"
                border="1"
                className="img-fluid"
              />
            </div>

            <div className="d-flex justify-content-center mt-1 mb-1">
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#61dafb",
                  }}
                >
                  <a
                    href="https://spacex-info-portfolio.netlify.app/"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#61dafb",
                    }}
                  >
                    VISITER
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#fb9961",
                  }}
                >
                  <a
                    href="https://github.com/KevinPiriou/SpaceXInfo"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#fb9961",
                    }}
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <hr className="items-center"></hr>
            <div className="d-flex mt-2 mb-2 row">
              <Card.Title>Description </Card.Title>

              <div className="flex justify-content-center mt-2">
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </div>
              <div>
                <button
                  className="btn text-5xl mt-3"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#9B1FE8",
                  }}
                  onClick={handleShowSpaceX}
                >
                  EN SAVOIR PLUS
                </button>
                <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showSpaceX}
                  onHide={handleCloseSpaceX}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="items-center">
                      SpaceX Info
                    </Modal.Title>
                  </Modal.Header>
                  <Badge className="m-3" bg="info" text="dark">
                    React
                  </Badge>

                  <Modal.Body>
                    Framework front-end: React && Bootstrap
                    <br></br>
                    API: SpaceX-API
                    <br></br>
                    Lien API:{" "}
                    <a
                      href="https://github.com/r-spacex/SpaceX-API"
                      target="about_blank"
                    >
                      Github
                    </a>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      href="https://spacex-info-portfolio.netlify.app/"
                      target="about_blank"
                    >
                      Visiter
                    </Button>
                    <Button variant="secondary" onClick={handleCloseSpaceX}>
                      Fermer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Card>
          <Card
            className="d-flex mt-3 p-3 rounded border-info bg-dark text-white"
            style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Header>
              <h2 className="text-success">
                <FontAwesomeIcon icon="fa-solid fa-leaf" border inverse />{" "}
                POTAGER COMPATIBLE{" "}
              </h2>
            </Card.Header>
            <Badge pill className="mb-3 p-2 mt-1" bg="info" text="dark">
              <h6>FORMATION - @WILD CODE SCHOOL -</h6>
            </Badge>
            <div>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>HTML</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>CSS</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>JavaScript</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>React</h6>
              </Badge>
            </div>
            <div className="d-flex m-2 justify-content-center">
              <Image
                src="https://i.ibb.co/hCGpMYs/potager.png"
                alt="screen-match-feat"
                border="1"
                className="img-fluid"
              />
            </div>

            <div className="d-flex justify-content-center mt-1 mb-1">
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#61dafb",
                  }}
                >
                  <a
                    href="https://mon-potager-wcs.netlify.app/"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#61dafb",
                    }}
                  >
                    VISITER
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#fb9961",
                  }}
                >
                  <a
                    href="https://github.com/WildCodeSchool/remote-js-202203-mainproject-1/tree/main"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#fb9961",
                    }}
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <hr className="items-center"></hr>
            <div className="d-flex mt-2 mb-2 row">
              <Card.Title>Description </Card.Title>

              <div className="flex justify-content-center mt-2">
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </div>
              <div>
                <button
                  className="btn text-5xl mt-3"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#9B1FE8",
                  }}
                  onClick={handleShowPotager}
                >
                  EN SAVOIR PLUS
                </button>
                <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showPotager}
                  onHide={handleClosePotager}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="items-center">E-picat</Modal.Title>
                  </Modal.Header>
                  <Badge className="m-3" bg="danger" text="white">
                    Ruby
                  </Badge>
                  <Badge className="m-3" bg="danger" text="white">
                    RubyonRails
                  </Badge>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      href="https://mon-potager-wcs.netlify.app/"
                      target="about_blank"
                    >
                      Visiter
                    </Button>
                    <Button variant="secondary" onClick={handleClosePotager}>
                      Fermer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Card>

          <Card
            className="d-flex mt-3 p-3 rounded border-info bg-dark text-white"
            style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Header>
              <h2 className="text-success">
                <FontAwesomeIcon
                  icon="fa-brands fa-itunes-note"
                  border
                  inverse
                />{" "}
                MATCH & FEAT{" "}
              </h2>
            </Card.Header>
            <Badge pill className="mb-3 p-2 mt-1" bg="info" text="dark">
              <h6>FORMATION -THE HACKING PROJECT-</h6>
            </Badge>
            <div>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>HTML</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>CSS</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>Ruby</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>RubyOnRails</h6>
              </Badge>
            </div>
            <div className="d-flex m-2 justify-content-center">
              <Image
                src="https://i.ibb.co/m4C7ppt/screen-match-feat.png"
                alt="screen-match-feat"
                border="1"
                className="img-fluid"
              />
            </div>

            <div className="d-flex justify-content-center mt-1 mb-1">
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#61dafb",
                  }}
                >
                  <a
                    href="https://matchandfeathp.herokuapp.com/"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#61dafb",
                    }}
                  >
                    VISITER
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#fb9961",
                  }}
                >
                  <a
                    href="https://github.com/MatchAndFeat/MatchAndFeat"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#fb9961",
                    }}
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <hr className="items-center"></hr>
            <div className="d-flex mt-2 mb-2 row">
              <Card.Title>Description </Card.Title>

              <div className="flex justify-content-center mt-2">
                <Card.Text>
                  Première plateforme d'entraide créative Match & Feat est un
                  lieu de rencontre artistique pour collaboration musicale,
                  poster votre projet inachevé afin de laisser la créativité
                  d'un tier s'exprimer.<br></br> Ne laisser pas dormir vos
                  projets musicaux inachever, donner leurs une visibilité aux
                  yeux et aux oreilles de tous pour donner l'occasion a d'autres
                  de combler le manque<br></br> De nombreux talents en tous
                  genres sont disponibles pour collaborer et apporter leur idées
                  artistiques.
                </Card.Text>
              </div>
              <div>
                <button
                  className="btn text-5xl mt-3"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#9B1FE8",
                  }}
                  onClick={handleShowMatchAndFeat}
                >
                  EN SAVOIR PLUS
                </button>
                <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showMatchAndFeat}
                  onHide={handleCloseMatchAndFeat}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="items-center">E-picat</Modal.Title>
                  </Modal.Header>
                  <Badge className="m-3" bg="danger" text="white">
                    Ruby
                  </Badge>
                  <Badge className="m-3" bg="danger" text="white">
                    RubyonRails
                  </Badge>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      href="https://matchandfeathp.herokuapp.com/"
                      target="about_blank"
                    >
                      Visiter
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleCloseMatchAndFeat}
                    >
                      Fermer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="d-flex mt-3 p-3 rounded border-info bg-dark text-white"
            style={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)" }}
          >
            <Card.Header>
              <h2 className="text-success">
                <FontAwesomeIcon icon="fa-solid fa-cat" border inverse />{" "}
                E-PICAT{" "}
              </h2>
            </Card.Header>
            <Badge pill className="mb-3 p-2 mt-1" bg="info" text="dark">
              <h6>FORMATION -THE HACKING PROJECT-</h6>
            </Badge>
            <div>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>HTML</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>CSS</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>Ruby</h6>
              </Badge>
              <Badge className="mb-3 p-2 mt-1 m-2" bg="warning" text="dark">
                <h6>RubyOnRails</h6>
              </Badge>
            </div>
            <div className="d-flex m-2 justify-content-center">
              <Image
                src="https://i.ibb.co/VVkcHhp/capture-readme.png"
                alt="screen-match-feat"
                border="1"
                className="img-fluid"
              />
            </div>

            <div className="d-flex justify-content-center mt-1 mb-1">
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#61dafb",
                  }}
                >
                  <a
                    href="https://epicathp.herokuapp.com/"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#61dafb",
                    }}
                  >
                    VISITER
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="btn text-5xl"
                  style={{
                    textDecoration: "none",
                    color: "#fb9961",
                  }}
                >
                  <a
                    href="https://github.com/HaryRabarijoely/e-picat"
                    target="about_blank"
                    style={{
                      textDecoration: "none",
                      color: "#fb9961",
                    }}
                  >
                    CODE
                  </a>
                </button>
              </div>
            </div>

            <hr className="items-center"></hr>
            <div className="d-flex mt-2 mb-2 row">
              <Card.Title>Description </Card.Title>

              <div className="flex justify-content-center mt-2">
                <Card.Text>
                  scrollable-div Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>
              </div>
              <div>
                <button
                  className="btn text-5xl mt-3"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#9B1FE8",
                  }}
                  onClick={handleShowEpicat}
                >
                  EN SAVOIR PLUS
                </button>
                <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={showEpicat}
                  onHide={handleCloseEpicat}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="items-center">E-picat</Modal.Title>
                  </Modal.Header>
                  <Badge className="m-3" bg="danger" text="white">
                    Ruby
                  </Badge>
                  <Badge className="m-3" bg="danger" text="white">
                    RubyonRails
                  </Badge>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      href="https://epicathp.herokuapp.com/"
                      target="about_blank"
                    >
                      Visiter
                    </Button>
                    <Button variant="secondary" onClick={handleCloseEpicat}>
                      Fermer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Home;
