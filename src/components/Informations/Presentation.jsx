import { Container, Card, Button, ProgressBar } from "react-bootstrap";
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
            backgroundColor: "#171615",
            border: "solid",
            borderRadius: "50px",
            borderColor: "#F09D0F",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
            fontFamily: "Coda",
          }}
          className="m-2 p-4"
        >
          <div
            className="d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <p className="display-6 text-5xl md:text-6xl lg:text-8xl my-6 md:my-9">
              Kévin PIRIOU
            </p>
            <Button
              className=" btn text-5xl p-3 "
              style={{
                textDecoration: "none",
                color: "whitesmoke",
                backgroundColor: "#262422",
                margin: "15px",
                borderColor: "#AA46CB",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              }}
              onClick={() => {
                handleClick(
                  "https://raw.githack.com/KevinPiriou/CV/main/CV_2022-07-13_KEVIN_PIRIOU.pdf",
                  "CV_PIRIOU_KEVIN.pdf"
                );
              }}
            >
              <FontAwesomeIcon
                icon="fa fa-id-card"
                beat
                pull="left"
                inverse
                border
              />
              MON CV
              <FontAwesomeIcon
                icon="fa fa-id-card"
                beat
                pull="right"
                inverse
                border
              />
            </Button>
          </div>
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
            id="method"
            className="d-flex p-1 justify-content-center mt-3 mb-5"
            style={{
              border: "solid",
              borderColor: "#026760",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
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
            className="d-flex flex-row justify-content-evenly align-stretch "
          >
            <Container
              fluid
              style={{
                backgroundColor: "#171615",
                border: "solid",
                borderWidth: "1px",
                padding: "1.5px",
              }}
            >
              <div className="p-2 pt-4">
                <h6>Soft Skills</h6>
              </div>
              <hr></hr>
              <div
                className="d-flex px-2 py-2"
                style={{
                  flexDirection: "column",
                  padding: "3px",
                }}
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
                backgroundColor: "#171615",
                border: "solid",
                borderWidth: "1px",
                padding: "1.5px",
              }}
            >
              <div className="p-2 pt-4">
                <h6> Hard Skills </h6>
              </div>
              <hr></hr>
              <div
                className="d-flex px-2 py-2"
                style={{
                  flexDirection: "column",
                  padding: "3px",
                }}
              >
                <p style={{ color: "#DC3545" }}> HTML </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="danger"
                  now={88}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#244BDD" }}>CSS</p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="primary"
                  now={79}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#EFD81E" }}> JavaScript </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="warning"
                  now={78}
                  max={100}
                  min={0}
                />
                <br></br>
                <p style={{ color: "#5ED3F3" }}> React </p>
                <ProgressBar
                  style={{
                    backgroundColor: "#3E3E3E",
                    border: "solid",
                    borderColor: "black",
                  }}
                  variant="info"
                  now={62}
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
    </div>
  );
};

export default Presentation;
