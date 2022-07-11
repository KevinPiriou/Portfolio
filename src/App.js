import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import WebFont from "webfontloader";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Coda", "Concert One"],
      },
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/"></Route>
        </Routes>

        <Home />
        <Contact />
        <ScrollToTop smooth />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
