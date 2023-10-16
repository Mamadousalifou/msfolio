import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/About/about";
import Experience from "./components/experience/experience";
import Service from "./components/service/service";
import Portfolio from "./components/portfolio/portfolio";
import Temoignage from "./components/temoignage/temoignage";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>

    <BrowserRouter>
    
    <Header index />
    
      <Nav />
      
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Temoignage />
      <Contact  />
      <Footer />
    </BrowserRouter>
    
    </>
  );
};

export default App;
