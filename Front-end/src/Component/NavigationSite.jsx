import React from "react";
import arrow from "../img/right-arrow.png";

const NavigationSite = () => {
  return (
    <div>
      <img
        className="back"
        src={arrow}
        alt=""
        onClick={() => {
          window.location.href = "/";
        }}
      />
    </div>
  );
};

export default NavigationSite;
