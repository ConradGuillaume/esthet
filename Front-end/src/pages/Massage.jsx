import React from "react";

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
      <div className="img-container">
        <img src="./img/massage3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Massage;
