import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Buy from "./Pages/buy";
import Sell from './Pages/sell';
import Insurance from './Pages/insurance';
import About from './Pages/about';
import Contact from './Pages/contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/insurance" element={<Insurance/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
