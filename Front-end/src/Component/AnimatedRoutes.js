import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Esthetique from "../pages/Esthetique";
import Galerie from "../pages/Galerie";
import Home from "../pages/Home";
import Massage from "../pages/Massage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/*" element={<Home />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/esthetique" element={<Esthetique />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
