import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Pages/HomePage/Homepage";
import AboutMe from "./Pages/AboutPage/AboutMe";
import Portfolio from "./Pages/PortfolioPage/Portfolio";
import Contact from "./Pages/ContactPage/Contact";

// Calling all components and using router to render Pages
function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )

}

export default App;