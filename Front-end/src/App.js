import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Component/AnimatedRoutes";
import { getEpilation, getMassage } from "./features/PrestationSlice";
import Epilation from "./Prestations/EpilationObject";
import Massage from "./Prestations/MassageObject";

const App = () => {
  const dispatch = useDispatch();
  dispatch(getEpilation(Epilation));
  dispatch(getMassage(Massage));
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
