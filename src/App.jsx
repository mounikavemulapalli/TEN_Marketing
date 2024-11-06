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
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clients' element={<Client />} />
        <Route path='/services' element={<Services />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/join-us' element={<JoinUs />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </Router>
  );
}
