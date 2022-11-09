import React from "react";
import massage from "../img/massage3.jpg";

const Massage = () => {
  return (
    <div className="container">
      <header>
        <h1>Massage bien-être</h1>
      </header>
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
      <img src={massage} alt="" />
    </div>
  );
};

export default Massage;
