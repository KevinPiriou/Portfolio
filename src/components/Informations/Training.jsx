import { Container } from "react-bootstrap";
const Training = () => {
  return (
    <div>
      <p className="display-5 text-6xl text-t-primary p-4 font-display tracking-wider  ">
        Mes Formations
      </p>

      <Container fluid>
        <div className="d-flex flex-row justify-content-evenly mb-5">
          <div
            className="m-2 p-2 text-5xl md:text-6xl lg:text-8xl my-6 md:my-9"
            style={{
              backgroundColor: "#6666CE",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              border: "solid",
            }}
          >
            <h1 className="display-6" style={{ color: "#171615" }}>
              THE HACKING PROJECT
            </h1>
            <hr></hr>
            <em>'Formation Fullstack Ruby'</em>
            <br></br>
            <br></br>
            <p>Sept 21 / Dec 21</p>

            <p>- Distanciel -</p>
            <div className="flex justify-content-center m-2 p-2">
              <hr></hr>
              <p style={{ color: "#171615" }}>Notions et languages appris</p>
              <p>
                HTML CSS JS Bootstrap AJAX Git GitHub<br></br> RubyOnRails POO
                MVC API SQL Agile Scrum
              </p>
              <hr></hr>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-evenly"></div>
          <div
            className="m-2 p-2 text-6xl md:text-6xl lg:text-8xl my-6 md:my-9"
            style={{
              backgroundColor: "#EF6969",
              color: "whitesmoke",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              border: "solid",
            }}
          >
            <h1 className="display-6" style={{ color: "#171615" }}>
              WILD CODE SCHOOL
            </h1>
            <hr></hr>
            <em>'Spécialisation Front-end JS | React'</em>
            <br></br>
            <br></br>
            <p>Fev 22 / Mai 22</p>

            <p>- Distanciel -</p>
            <div className="flex justify-content-center m-2 p-2">
              <hr></hr>
              <p style={{ color: "#171615" }}>Notions et languages appris</p>
              <p>JS React ReactNative Node.js NPM Agile Scrum</p>
              <hr></hr>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Training;
