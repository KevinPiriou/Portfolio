import {
  Badge,
  Image,
  Card,
  Button,
  Modal,
  ProgressBar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = ({ aboutWild1 }) => {
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
    <div>
      <p className="display-5 text-6xl text-t-primary p-4  font-display tracking-wider  ">
        Mes Projets
      </p>

      <div className="flex flex-col items-center" style={{ heigth: "auto" }}>
        <div>
          <Card
            id="projectCard"
            className="d-flex mt-3 p-3 mb-5 border-info text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundImage:
                "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
              borderRadius: "50px",
            }}
          >
            <Card.Header>
              <h2 style={{ color: "#D14F09" }}>
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
            <div
              className="d-flex m-2 justify-content-center"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            >
              <Image
                src="https://i.ibb.co/CsNTrDy/space-Site.png"
                alt="screen-SpaceXinfo-site"
                border="1"
                className="img-thumbnail"
                width="400"
                style={{
                  borderRadius: "50px",
                }}
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
                      color: "#D14F09",
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
                <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
                  Passionné depuis de nombreuses années par l'espace et les
                  moyens mis en oeuvre pour y accéder, je souhaitais donc créer
                  pour mon premier projet personnel, un mélange entre cette
                  passion de l'espace et ma conversion professionnelle.
                  Dernièrement, SpaceX, créée et dirigée par Elon Musk, est
                  l'entreprise privée qui s'est le plus démarquée par ses
                  prouesses techniques ou bien sa culture de l'apprentissage par
                  l'échec. Toutes ces technologies et chemins de développement
                  me fascinent, j'ai donc décidé de faire une application
                  permettant de regrouper un maximum d'informations générales
                  propres à l'entreprise. SpaceX permet, grâce à une API REST,
                  de récupérer des informations de façon dynamique et en temps
                  réel. SpaceX Info est donc née.
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
                  style={{ color: "whitesmoke" }}
                >
                  <div style={{ border: "solid" }}>
                    <Modal.Header
                      closeButton
                      style={{ backgroundColor: "#171615" }}
                    >
                      <Modal.Title
                        className="items-center"
                        style={{ backgroundColor: "#171615" }}
                      >
                        SpaceX Info
                      </Modal.Title>
                    </Modal.Header>
                    <div style={{ backgroundColor: "#171615" }}>
                      <Badge className="m-3" bg="info" text="dark">
                        React
                      </Badge>
                    </div>
                    <Modal.Body style={{ backgroundColor: "#171615" }}>
                      <div
                        className="d-flex"
                        style={{
                          backgroundColor: "#171615",
                          flexDirection: "column",
                        }}
                      >
                        <p>Projet : initialisé le 22 / 06 / 22</p>
                        <p>Type : Projet personnel</p>
                        <p style={{ color: "#d14f09" }}>Statut du projet</p>
                        <ProgressBar
                          style={{
                            backgroundColor: "#3E3E3E",
                            border: "solid",
                            borderColor: "black",
                          }}
                          variant="warning"
                          alt="progress bar"
                          now={62}
                          max={100}
                          min={0}
                        />
                        <p></p>
                        <p>Framework Front-end = React | @Bootstrap</p>
                        <p>Framework Back-end = Node.js</p>
                        <p>API REST = SpaceX-API</p>
                        <p>
                          Lien API ={" "}
                          <a
                            href="https://github.com/r-spacex/SpaceX-API"
                            target="about_blank"
                            style={{ textDecoration: "none", color: "#d14f09" }}
                          >
                            https://github.com/r-spacex/SpaceX-API
                          </a>
                        </p>
                      </div>
                    </Modal.Body>

                    <Modal.Footer
                      style={{
                        backgroundImage:
                          "linear-gradient(to right top,#0e334b,#01384b,#003c49,#044046,#124442)",
                      }}
                    >
                      <Button
                        href="https://spacex-info-portfolio.netlify.app/"
                        target="about_blank"
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#9B1FE8",
                          border: " solid black 1px",
                        }}
                      >
                        Visiter
                      </Button>
                      <Button
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#7B1424",
                          border: " solid black 1px",
                        }}
                        onClick={handleCloseSpaceX}
                      >
                        Fermer
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
              </div>
            </div>
          </Card>
          <Card
            id="projectCard"
            className="d-flex mt-3 p-3 mb-5 text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundImage:
                "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
              borderRadius: "50px",
              border: "solid #54b3d6 2px",
            }}
          >
            <Card.Header>
              <h2 style={{ color: "#D14F09" }} ref={aboutWild1}>
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
                src="https://i.ibb.co/XZRfsGG/Potager-Compatible.jpg"
                alt="screen-potager"
                border="1"
                className="img-thumbnail"
                width="400"
                style={{
                  borderRadius: "50px",
                }}
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
                      color: "#D14F09",
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
                <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
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
                  style={{ color: "whitesmoke" }}
                >
                  <div style={{ border: "solid" }}>
                    <Modal.Header
                      closeButton
                      style={{ backgroundColor: "#171615" }}
                    >
                      <Modal.Title
                        className="items-center"
                        style={{ backgroundColor: "#171615" }}
                      >
                        Potager Compatible
                      </Modal.Title>
                    </Modal.Header>
                    <div style={{ backgroundColor: "#171615" }}>
                      <Badge className="m-3" bg="info" text="dark">
                        React
                      </Badge>
                    </div>
                    <Modal.Body style={{ backgroundColor: "#171615" }}>
                      <div
                        className="d-flex"
                        style={{
                          backgroundColor: "#171615",
                          flexDirection: "column",
                        }}
                      >
                        <p>
                          Projet : initialisé le 23 / 03 / 2022 et finalisé le
                          08 / 04 / 2022
                        </p>
                        <p>Type : Projet en groupe validant la formation</p>
                        <p>Formation: @Wild Code School</p>
                        <p style={{ color: "#d14f09" }}>Statut du projet</p>
                        <ProgressBar
                          style={{
                            backgroundColor: "#3E3E3E",
                            border: "solid",
                            borderColor: "black",
                          }}
                          variant="success"
                          alt="progress bar"
                          now={100}
                          max={100}
                          min={0}
                        />
                        <p></p>
                        <p>Framework Front-end = React </p>
                        <p>Framework Back-end = NodeJS </p>
                      </div>
                    </Modal.Body>

                    <Modal.Footer
                      style={{
                        backgroundImage:
                          "linear-gradient(to right top,#0e334b,#01384b,#003c49,#044046,#124442)",
                      }}
                    >
                      <Button
                        href="https://mon-potager-wcs.netlify.app/"
                        target="about_blank"
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#9B1FE8",
                          border: " solid black 1px",
                        }}
                      >
                        Visiter
                      </Button>
                      <Button
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#7B1424",
                          border: " solid black 1px",
                        }}
                        onClick={handleClosePotager}
                      >
                        Fermer
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
              </div>
            </div>
          </Card>

          <Card
            id="projectCard"
            className="d-flex mt-3 p-3 mb-5 text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundImage:
                "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
              borderRadius: "50px",
              border: "solid #54b3d6 2px",
            }}
          >
            <Card.Header>
              <h2 style={{ color: "#D14F09" }}>
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
                src="https://i.ibb.co/hfrR9mh/Matchandfeat.jpg"
                alt="screen-match-feat"
                border="1"
                className="img-thumbnail"
                width="400"
                style={{
                  borderRadius: "50px",
                }}
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
                      color: "#D14F09",
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
                <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
                  Première plateforme d'entraide créative Match & Feat est un
                  lieu de rencontre artistique pour collaboration musicale:
                  postez votre projet inachevé afin de laisser la créativité
                  d'un tiers s'exprimer. Ne laissez pas dormir vos projets
                  musicaux inachevés, donnez leurs une visibilité aux yeux et
                  aux oreilles de tous pour donner l'occasion à d'autres de
                  combler le manque. De nombreux talents en tous genres sont
                  disponibles pour collaborer et apporter leur idées
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
                  style={{ color: "whitesmoke" }}
                >
                  <div style={{ border: "solid" }}>
                    <Modal.Header
                      closeButton
                      style={{ backgroundColor: "#171615" }}
                    >
                      <Modal.Title
                        className="items-center"
                        style={{ backgroundColor: "#171615" }}
                      >
                        Match & Feat
                      </Modal.Title>
                    </Modal.Header>
                    <div style={{ backgroundColor: "#171615" }}>
                      <Badge className="m-3" bg="danger" text="dark">
                        Ruby
                      </Badge>
                      <Badge className="m-3" bg="danger" text="dark">
                        RubyOnRails
                      </Badge>
                      <Badge className="m-3" bg="primary" text="dark">
                        Postgresql
                      </Badge>
                    </div>
                    <Modal.Body style={{ backgroundColor: "#171615" }}>
                      <div
                        className="d-flex"
                        style={{
                          backgroundColor: "#171615",
                          flexDirection: "column",
                        }}
                      >
                        <p>
                          Projet : initialisé le 07 / 12 / 2021 et finalisé le
                          18 / 12 / 2021
                        </p>
                        <p>Type : Projet en groupe validant la formation</p>
                        <p>Formation : @The Hacking Project</p>
                        <p style={{ color: "#d14f09" }}>Statut du projet</p>
                        <ProgressBar
                          style={{
                            backgroundColor: "#3E3E3E",
                            border: "solid",
                            borderColor: "black",
                          }}
                          variant="success"
                          alt="progress bar"
                          now={100}
                          max={100}
                          min={0}
                        />
                        <p></p>
                        <p>Framework Front-end = @Bootstrap</p>
                        <p>Framework Back-end = RubyOnRails</p>
                      </div>
                    </Modal.Body>

                    <Modal.Footer
                      style={{
                        backgroundImage:
                          "linear-gradient(to right top,#0e334b,#01384b,#003c49,#044046,#124442)",
                      }}
                    >
                      <Button
                        href="https://matchandfeathp.herokuapp.com/"
                        target="about_blank"
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#9B1FE8",
                          border: " solid black 1px",
                        }}
                      >
                        Visiter
                      </Button>
                      <Button
                        style={{
                          color: "whitesmoke",
                          backgroundColor: "#7B1424",
                          border: " solid black 1px",
                        }}
                        onClick={handleCloseMatchAndFeat}
                      >
                        Fermer
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Card
          id="projectCard"
          className="d-flex mt-3 mb-5 p-3 text-white"
          style={{
            boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
            backgroundImage:
              "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
            borderRadius: "50px",
            border: "solid #54b3d6 2px",
          }}
        >
          <Card.Header>
            <h2 style={{ color: "#D14F09" }}>
              <FontAwesomeIcon icon="fa-solid fa-cat" border inverse /> E-PICAT{" "}
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
              src="https://i.ibb.co/H2qtwn8/EPicat.jpg"
              alt="screen-epicat"
              border="1"
              className="img-thumbnail"
              width="400"
              style={{
                borderRadius: "50px",
              }}
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
                    color: "#D14F09",
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
              <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
                scrollable-div Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
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
                style={{ color: "whitesmoke" }}
              >
                <div style={{ border: "solid" }}>
                  <Modal.Header
                    closeButton
                    style={{ backgroundColor: "#171615" }}
                  >
                    <Modal.Title
                      className="items-center"
                      style={{ backgroundColor: "#171615" }}
                    >
                      E-picat
                    </Modal.Title>
                  </Modal.Header>
                  <div style={{ backgroundColor: "#171615" }}>
                    <Badge className="m-3" bg="danger" text="dark">
                      Ruby
                    </Badge>
                    <Badge className="m-3" bg="danger" text="dark">
                      RubyOnRails
                    </Badge>
                    <Badge className="m-3" bg="primary" text="dark">
                      Postgresql
                    </Badge>
                  </div>
                  <Modal.Body style={{ backgroundColor: "#171615" }}>
                    <div
                      className="d-flex"
                      style={{
                        backgroundColor: "#171615",
                        flexDirection: "column",
                      }}
                    >
                      <p>
                        Projet : initialisé le 29 / 11 / 2021 et finalisé le 3 /
                        12 / 2021
                      </p>
                      <p>Type : Projet en groupe factice</p>
                      <p>Formation: @The Hacking Project</p>
                      <p style={{ color: "#d14f09" }}>Statut du projet</p>
                      <ProgressBar
                        style={{
                          backgroundColor: "#3E3E3E",
                          border: "solid",
                          borderColor: "black",
                        }}
                        variant="success"
                        alt="progress bar"
                        now={100}
                        max={100}
                        min={0}
                      />
                      <p></p>
                      <p>Framework Front-end = @Bootstrap</p>
                      <p>Framework Back-end = RubyOnRails</p>
                    </div>
                  </Modal.Body>

                  <Modal.Footer
                    style={{
                      backgroundImage:
                        "linear-gradient(to right top,#0e334b,#01384b,#003c49,#044046,#124442)",
                    }}
                  >
                    <Button
                      href="https://epicathp.herokuapp.com/"
                      target="about_blank"
                      style={{
                        color: "whitesmoke",
                        backgroundColor: "#9B1FE8",
                        border: " solid black 1px",
                      }}
                    >
                      Visiter
                    </Button>
                    <Button
                      style={{
                        color: "whitesmoke",
                        backgroundColor: "#7B1424",
                        border: " solid black 1px",
                      }}
                      onClick={handleCloseEpicat}
                    >
                      Fermer
                    </Button>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
