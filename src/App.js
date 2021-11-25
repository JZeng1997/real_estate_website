import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Buy from "./Pages/buy"

function App() {
  return (
    <div> 
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
