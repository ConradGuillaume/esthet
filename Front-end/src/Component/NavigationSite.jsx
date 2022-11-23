import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../img/right-arrow.png";

const NavigationSite = () => {
  return (
    <NavLink to="/" className="nav">
      <img className="back" src={arrow} alt="" />
    </NavLink>
  );
};

export default NavigationSite;
