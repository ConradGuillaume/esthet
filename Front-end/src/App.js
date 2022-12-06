import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Component/AnimatedRoutes";

const App = () => {
  //
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
