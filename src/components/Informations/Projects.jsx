import { Badge, Image, Card, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = () => {
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
            className="d-flex mt-3 p-3 mb-5 border-info text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundColor: "#171615",
              borderRadius: "50px",
            }}
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
            className="d-flex mt-3 p-3 mb-5 border-info text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundColor: "#171615",
              borderRadius: "50px",
            }}
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
            className="d-flex mt-3 p-3 mb-5 border-info text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundColor: "#171615",
              borderRadius: "50px",
            }}
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
                <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
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
            className="d-flex mt-3 mb-5 p-3 border-info text-white"
            style={{
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              backgroundColor: "#171615",
              borderRadius: "50px",
            }}
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
                <Card.Text style={{ fontFamily: "Coda", fontSize: "18px" }}>
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
    </div>
  );
};

export default Projects;
