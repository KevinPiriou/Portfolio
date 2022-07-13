import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container } from "react-bootstrap";

import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";

const Contact = () => {
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
      <NavBar />
      <Container fluid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30vh",
            marginTop: "55px",
          }}
          className="display-6"
        >
          ME CONTACTER
        </div>
        <Card
          fluid
          bg="dark"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            padding: "25px",
            borderRadius: "50px",

            fontFamily: "Coda",
          }}
        >
          <div className="p-2">
            <FontAwesomeIcon icon="fa-solid fa-at" size="lg" border />
            <Card.Text>kevinpiriou@yahoo.fr</Card.Text>
          </div>
          <div className="p-2">
            <FontAwesomeIcon
              icon="fa-solid fa-mobile-screen-button"
              size="lg"
              shake
              border
            />
            <Card.Text>07 80 81 98 08</Card.Text>
          </div>
        </Card>
      </Container>
      <hr></hr>
      <div className="display-6 mb-5">Message Direct</div>
      <div className="d-flex justify-content-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column mb-5 lg"
          style={{
            border: "solid",
            maxWidth: "fill-available",
            width: "900px",
            backgroundColor: "#171615",
            fontFamily: "Coda",
          }}
        >
          <label htmlFor="user_name">Nom</label>
          <input type="text" name="user_name" id="user_name" />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" />
          <label>Votre message</label>
          <textarea name="message" />
          <input
            style={{
              backgroundColor: "#171615",
              color: "white",
              fontFamily: "Coda",
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
              VALIDE
            </mark>
          ) : null}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
