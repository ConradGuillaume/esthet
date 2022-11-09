import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Component/Header";
import massage from "../img/massage.jpg";

const Home = () => {
  return (
    <div className="App">
      <ul className="media">
        <li>
          <img src="../img/facebook.png" alt="" />
        </li>
        <li>
          <img src="./img/instagram.png" alt="" />
        </li>
      </ul>
      <header>
        <Header />
      </header>
      <ul className="main-container">
        <NavLink to="/massage">
          <li>
            <img src={massage} alt="none" />
            <h2>Massage bien-être</h2>
          </li>
        </NavLink>
        <NavLink to="/esthetique">
          <li>
            <img src="./img/esthétique.jpg" alt="" />
            <h2>Soins esthétiques</h2>
          </li>
        </NavLink>
        <NavLink to="/galerie">
          <li>
            <img src="./img/galerie.jpg" alt="" />
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
    </div>
  );
};

export default Home;
