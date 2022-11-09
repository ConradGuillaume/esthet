import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Esthetique from "./pages/Esthetique";
import Galerie from "./pages/Galerie";
import Home from "./pages/Home";
import Massage from "./pages/Massage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/esthetique" element={<Esthetique />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
