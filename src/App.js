import "./App.css";

//FRONT DISPLAY && FEATURES
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import ScrollToTop from "react-scroll-to-top";
import "./assets/reveal";
// React import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useRef } from "react";

//Components
import Home from "./components/Informations/Home";

import Contact from "./components/Contact";

import Details from "./components/Informations/Details";

function App() {
  const refContact = useRef();
  function handleBackClick() {
    refContact.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Coda", "Concert One", "Noto Sans"],
      },
    });
  }, []);

  return (
    <div className="App ">
      <Router>
        <ScrollToTop smooth />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home handleBackClick={handleBackClick} />}
          ></Route>
          <Route
            path="/Accueil"
            element={<Home refContact={refContact} />}
          ></Route>
          <Route
            path="/Contact"
            element={<Contact refContact={refContact} />}
          ></Route>
          <Route path="/Connexion"></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
