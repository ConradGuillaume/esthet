import React from "react";
import { NavLink } from "react-router-dom";
import massage from "../img/massage.jpg";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import esthetique from "../img/esthétique.jpg";
import galerie from "../img/galerie.jpg";
import { motion } from "framer-motion";
const homeVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: { duration: 1.5 },
  },
  exit: {
    y: "-100vh",
    transition: { duration: 1.5 },
  },
};
const Home = () => {
  return (
    <>
      <motion.div
        variants={homeVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="App"
      >
        <h1>Instant pour soi</h1>
        <ul className="media">
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
        </ul>
        <header></header>
        <ul className="main-container">
          <NavLink to="/massage">
            <li>
              <img src={massage} alt="none" />
              <h2>Massage bien-être</h2>
            </li>
          </NavLink>
          <NavLink to="/esthetique">
            <li>
              <img src={esthetique} alt="" />
              <h2>Soins esthétiques</h2>
            </li>
          </NavLink>
          <NavLink to="/galerie">
            <li>
              <img src={galerie} alt="" />
              <h2>Galerie</h2>
            </li>
          </NavLink>
        </ul>
        <footer>
          <ul>
            <li class="box-1">
              <div class="btn btn-one">
                <span>Mon parcours</span>
              </div>
            </li>
            <li class="box-1">
              <div class="btn btn-one">
                <span>Me contacter</span>
              </div>
            </li>
          </ul>
        </footer>
      </motion.div>
    </>
  );
};

export default Home;
