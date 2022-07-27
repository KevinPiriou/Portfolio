import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container } from "react-bootstrap";

const Contact = ({ refContact }) => {
  const form = useRef();

  const [mailSend, SetMailSend] = useState(false);

  function mailer() {
    SetMailSend(true);
    console.log("email envoyé");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wb8b3bg",
        "template_op6khec",
        form.current,
        "muSgRwuWpIylauMMW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Container fluid>
        <Card
          fluid
          style={{
            display: "flex",
            border: "solid #54b3d6 2px",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
            justifyContent: "center",
            marginBottom: "35px",
            padding: "60px",
            borderRadius: "50px",
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",

            fontFamily: "Coda",
          }}
        >
          <div className="display-6 m-3">Contact</div>
          <div className="d-flex flex-row justify-content-center">
            <div className="m-3">
              <svg
                id="icon-contact"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200"
                height="200"
                viewBox="0 0 64 64"
                style={{ fill: "#000000", minWidth: "50%", minHeight: "50%" }}
              >
                <linearGradient
                  id="QAzoyWpXxOdtGYT2BhOtLa_43993_gr1"
                  x1="19"
                  x2="19"
                  y1="34.417"
                  y2="40.584"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#D14F09"></stop>
                  <stop offset="1" stop-color="#D14F09"></stop>
                </linearGradient>
                <path
                  fill="url(#QAzoyWpXxOdtGYT2BhOtLa_43993_gr1)"
                  d="M24.81,37.5C23.35,39.04,21.29,40,19,40c-2.29,0-4.35-0.96-5.81-2.5 C14.65,35.96,16.71,35,19,35C21.29,35,23.35,35.96,24.81,37.5z"
                ></path>
                <linearGradient
                  id="QAzoyWpXxOdtGYT2BhOtLb_43993_gr2"
                  x1="19"
                  x2="19"
                  y1="26.583"
                  y2="33.425"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#6dc7ff"></stop>
                  <stop offset="1" stop-color="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#QAzoyWpXxOdtGYT2BhOtLb_43993_gr2)"
                  d="M19 27A3 3 0 1 0 19 33A3 3 0 1 0 19 27Z"
                ></path>
                <linearGradient
                  id="QAzoyWpXxOdtGYT2BhOtLc_43993_gr3"
                  x1="32"
                  x2="32"
                  y1="7.75"
                  y2="57.004"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#1a6dff"></stop>
                  <stop offset="1" stop-color="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#QAzoyWpXxOdtGYT2BhOtLc_43993_gr3)"
                  d="M57,29c0-1.654-1.346-3-3-3v-2c1.654,0,3-1.346,3-3s-1.346-3-3-3v-5c0-2.757-2.243-5-5-5h-1 c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2H23c-2.757,0-5,2.243-5,5v7.051C11.85,20.562,7,25.72,7,32s4.85,11.438,11,11.949V51 c0,2.757,2.243,5,5,5h17c0,1.103,0.897,2,2,2h4c1.103,0,2-0.897,2-2h1c2.757,0,5-2.243,5-5v-3c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2 c1.654,0,3-1.346,3-3s-1.346-3-3-3v-2C55.654,32,57,30.654,57,29z M23,10h17v9H28c-1.103,0-2,0.897-2,2v1.273 c-1.718-1.24-3.771-2.037-6-2.222V13C20,11.346,21.346,10,23,10z M28,24.089V21h12v6H29.895C29.405,25.936,28.765,24.958,28,24.089z M9,32c0-5.514,4.486-10,10-10s10,4.486,10,10s-4.486,10-10,10S9,37.514,9,32z M23,54c-1.654,0-3-1.346-3-3v-7.051 C26.15,43.438,31,38.28,31,32c0-1.038-0.146-2.039-0.395-3H40v2h-7v2h7v2h-7v2h7v2h-7v2h7v2H30v2h10v9H23z M55,29 c0,0.552-0.448,1-1,1v-2C54.552,28,55,28.448,55,29z M55,21c0,0.552-0.448,1-1,1v-2C54.552,20,55,20.448,55,21z M42,56V8h4l0.002,48 H42z M55,45c0,0.552-0.448,1-1,1v-2C54.552,44,55,44.448,55,45z M55,37c0,0.552-0.448,1-1,1v-2C54.552,36,55,36.448,55,37z M52,36v6 h-2v2h2v7c0,1.654-1.346,3-3,3h-1V10h1c1.654,0,3,1.346,3,3v5h-2v2h2v6h-2v2h2v6h-2v2H52z"
                ></path>
              </svg>
            </div>
            <div className="m-5">
              <div className="d-flex p-1 ">
                <FontAwesomeIcon
                  icon="fa-solid fa-at"
                  size="lg"
                  border
                  pull="left"
                />

                <p> kevinpiriou@yahoo.fr</p>
              </div>
              <div className="d-flex p-1 ">
                <FontAwesomeIcon
                  icon="fa-solid fa-mobile-screen-button"
                  size="lg"
                  shake
                  border
                  pull="left"
                />
                <p> 07 80 81 98 08 </p>
              </div>
              <div className="d-flex p-1 ">
                <FontAwesomeIcon
                  icon="fab fa-linkedin"
                  border
                  size="lg"
                  pull="left"
                />
                Linkedin:
                <a
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#d14f09",
                  }}
                  href="https://www.linkedin.com/in/kevin-piriou/"
                  target="about_blank"
                >
                  @KevinPiriou
                </a>
              </div>
              <div className="d-flex p-1 ">
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  border
                  size="lg"
                  pull="left"
                />
                GitHub:
                <a
                  style={{
                    textDecoration: "none",
                    marginLeft: "2px",
                    color: "#d14f09",
                  }}
                  href="https://github.com/KevinPiriou"
                  target="about_blank"
                >
                  @KevinPiriou
                </a>
              </div>
            </div>
            <br></br>
          </div>
          <hr></hr>
          <div className="d-flex flex-column">
            {" "}
            <div className="display-6 m-3">Message Direct</div>
            <div className="d-flex justify-content-center">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column mb-5 my-3 lg "
                style={{
                  border: "solid 2px",
                  borderRadius: "35px",
                  maxWidth: "fill-available",
                  width: "900px",
                  backgroundColor: "#181715",
                  fontFamily: "Coda",
                  color: "whitesmoke",
                  justifyContent: "center",
                }}
              >
                <label htmlFor="user_name">Nom</label>
                <input type="text" name="user_name" id="user_name" />
                <label htmlFor="user_email">Email</label>
                <input type="email" name="user_email" id="user_email" />
                <label>Votre message</label>
                <textarea name="message" />
                <input
                  id="sendButton"
                  style={{
                    color: "white",
                    fontFamily: "Coda",
                    margin: "20px",
                    padding: "10px",
                    backgroundColor: "#1E1D1C",
                    border: "solid 1px #71BC68",
                    borderRadius: "35px",
                  }}
                  onClick={() => mailer()}
                  type="submit"
                  value="Envoyer"
                />
                {mailSend ? (
                  <mark
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      fontFamily: "Coda",
                    }}
                  >
                    Votre message a bien été envoyé !
                  </mark>
                ) : null}
              </form>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
