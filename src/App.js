import "./App.css";

//FRONT DISPLAY && FEATURES
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import ScrollToTop from "react-scroll-to-top";

// React import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";

//Components
import Home from "./components/Informations/Home";

import Contact from "./components/Contact";

import Details from "./components/Informations/Details";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Coda", "Concert One"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop smooth />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Accueil" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Connexion"></Route>
          <Route path="/Details" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
