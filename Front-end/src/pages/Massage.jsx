import React from "react";
import NavigationSite from "../Component/NavigationSite";
import massage from "../img/massage3.jpg";

const Massage = () => {
  return (
    <div className="container">
      <NavigationSite />
      <h1>Massage bien-être</h1>
      <header></header>
      <div className="massage-container">
        <article>
          <button>Réserver</button>
          <h2> Techniques douces des Rebouteux</h2>
          <p>Prix€</p>
        </article>
        <article>
          <button>Réserver</button>
          <h2>Deep Tissue</h2>
          <p>Prix€</p>
        </article>
        <article>
          <button>Réserver</button>
          <h2>Techniques des Diapasons thérapeutiques</h2>
          <p>Prix€</p>
        </article>
        <article>
          <button>Réserver</button>
          <h2>Sportif</h2>
          <p>Prix€</p>
        </article>
        <article>
          <button>Réserver</button>
          <h2> Toucher Métamorphique </h2>
          <p>Prix€</p>
        </article>
      </div>
      <img className="massage" src={massage} alt="" />
    </div>
  );
};

export default Massage;
