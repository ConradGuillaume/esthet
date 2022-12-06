import React from "react";
import { useState } from "react";
import NavigationSite from "../Component/NavigationSite";
import { motion } from "framer-motion";
const homeVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {  duration: 1.5 },
  },
  exit: {
    y: "-100vh",
    transition: { duration: 1.5 },
  },
};

const Esthetique = () => {
  const [Epilation, SetEpilation] = useState(true);
  const [Maquillage, SetMaquillage] = useState(false);
  const [Soins, SetSoins] = useState(false);
  const [exit, SetExit] = useState(0);
  return (
    <div>
      <motion.div
        variants={homeVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="main-container-est"
      >
        <NavigationSite />
        <h1>Soins Esthétiques</h1>
        <header></header>
        <article>
          <div className="button-select">
            <button
              className="btn-1"
              onClick={() => {
                SetExit(1);
                SetEpilation(true);
                SetMaquillage(false);
                SetSoins(false);
              }}
            >
              Epilation
            </button>
            <button
              className="btn-2"
              onClick={() => {
                SetExit(1);
                SetMaquillage(true);
                SetEpilation(false);
                SetSoins(false);
              }}
            >
              Maquillage
            </button>
            <button
              className="btn-3"
              onClick={() => {
                SetExit(1);
                SetMaquillage(false);
                SetEpilation(false);
                SetSoins(true);
              }}
            >
              Soins
            </button>
          </div>
          <div className="caroussel">
            {Epilation && (
              <div
                className="caroussel-container"
                exit={exit}
                onAnimationEnd={() => SetExit(0)}
              >
                <div className="product">EPILATION</div>
                <div className="product">EPILATION</div>
                <div className="product">EPILATION</div>
                <div className="product">EPILATION</div>
                <div className="product">EPILATION</div>
                <div className="product">EPILATION</div>
              </div>
            )}
            {Maquillage && (
              <div
                className="caroussel-container"
                exit={exit}
                onAnimationEnd={() => SetExit(0)}
              >
                <div className="product">Maquillage</div>
                <div className="product">Maquillage</div>
                <div className="product">Maquillage</div>
                <div className="product">Maquillage</div>
                <div className="product">Maquillage</div>
                <div className="product">Maquillage</div>
              </div>
            )}
            {Soins && (
              <div
                className="caroussel-container"
                exit={exit}
                onAnimationEnd={() => SetExit(0)}
              >
                <div className="product">Soins</div>
                <div className="product">Soins</div>
                <div className="product">Soins</div>
                <div className="product">Soins</div>
                <div className="product">Soins</div>
                <div className="product">Soins</div>
              </div>
            )}
          </div>
        </article>
        <footer>footer</footer>
      </motion.div>
    </div>
  );
};

export default Esthetique;
