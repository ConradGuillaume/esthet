import React from "react";
import Tree from "../Component/Tree";
import insta from "../img/insta.png";
import fb from "../img/fb.png";
import linkd from "../img/linkdin.png";
import tiktok from "../img/tiktok.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <p>L'arbre de vie</p>
      <h1>Esthétique et bien-être </h1>
      <Tree />
      <ul className="menu">
        <NavLink to="/massage">
          <li>Soins bien-être</li>
        </NavLink>
        <NavLink to="/esthetique">
          <li>Soins Esthétique</li>
        </NavLink>
      </ul>
      <div className="social">
        <div className="imgcontain">
          <img src={fb} alt="Facebook" />
        </div>
        <div className="imgcontain">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="imgcontain">
          <img src={linkd} alt="Linkdin" />
        </div>
        <div className="imgcontain">
          <img src={tiktok} alt="Tiktok" />
        </div>
      </div>
    </div>
  );
};

export default Home;
