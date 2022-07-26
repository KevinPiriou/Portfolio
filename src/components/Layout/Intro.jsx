import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Intro = () => {
  function unlockBody() {
    document.body.style = "background:none";
  }
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <NavBar />

      <h1 className="title-intro">Bienvenu sur mon portfolio</h1>
      <div class="ocean">
        <div class="wave"></div>
        <Link to={"/Accueil"} onClick={unlockBody}>
          VISITER
        </Link>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Intro;
