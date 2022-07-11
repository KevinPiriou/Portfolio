import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
      <div className="display-6">ME CONTACTER</div>
      <div>
        <div className="d-flex justify-content-center mt-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column mb-5 lg"
            style={{
              border: "solid",
              maxWidth: "fill-available",
              width: "900px",
              backgroundColor: "#202529",
              fontFamily: "Righteous",
            }}
          >
            <label for="user_name">Nom</label>
            <input type="text" name="user_name" id="user_name" />
            <label for="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" />
            <label>Votre message</label>
            <textarea name="message" />
            <input
              style={{ backgroundColor: "#202529", color: "white" }}
              onClick={() => mailer()}
              type="submit"
              value="Envoyer"
            />
            {mailSend ? (
              <mark style={{ backgroundColor: "green", color: "white" }}>
                VALIDE
              </mark>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
