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

function App() {
  return (
    <div> 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/Insurance" element={<Insurance/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
