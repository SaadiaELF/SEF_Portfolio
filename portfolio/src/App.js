import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Calling all components and using router to render pages
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Masthead />} />
          <Route exact path="/about" element={<AboutMe />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;