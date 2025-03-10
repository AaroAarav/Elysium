import React from 'react';
import Home from "../Components/Home";
import Events from "../Components/Events";
import Ambassadors from "../Components/Ambassadors";
import About from "../Components/About";
import KeyStats from "../Components/KeyStats";
import ContactUs from "../Components/ContactUs";
import { Routes, Route, Navigate } from "react-router-dom";

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Ambassadors" element={<Ambassadors />} />
        <Route path="/About" element={<About />} />
        <Route path="/KeyStats" element={<KeyStats />} />
        <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default Routing;
