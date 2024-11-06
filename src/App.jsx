import React from "react";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Client from "./Components/Client";
import Services from "./Components/Services";
import Partners from "./Components/Partners";
import JoinUs from "./Components/JoinUs";
import ContactUS from "./Components/ContactUS";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
    <Navbar />
      
      <Home />
      <Client />
      <Services />
      <ContactUS />
      <Partners />
      <JoinUs />
      <Footer /> 
    </>
  );
}
