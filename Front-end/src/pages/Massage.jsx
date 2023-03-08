import React from "react";
import { useState } from "react";
import NavigationSite from "../Component/NavigationSite";
import massage from "../img/massage3.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import bol from "../img/bol.jpg";
import { useWindowSize } from "react-use";
import { useEffect } from "react";

const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const modal = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { duration: 1, type: "ease" } },
  exit: { opacity: 0 },
};
const article = {
  hidden: { width: "0%" },
  visible: {
    width: "90%",
  },
};
const title = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.2 } },
};

const Massage = () => {
  const Massage = useSelector((state) => state.Prestation.massage);
  const [selectedMassage, setSelectedMassage] = useState(null);
  const [info, setInfo] = useState(false);
  const [Aside, setAside] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 1000) {
      setAside(true);
    } else {
      setAside(false);
    }
  }, [width]);
  return (
    <motion.div
      variants={homeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container"
    >
      <NavigationSite />
      <h1>Massage bien-être</h1>
      <header></header>

      <div className="massage-container">
        {Massage.map((massage, index) => (
          <motion.article
            variants={article}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: index * 0.2 }} // ici chaque div prend 0.2 millisec décalage
          >
            <button>Réserver</button>
            <motion.h2
              variants={title}
              initial="hidden"
              animate="visible"
              onClick={() => {
                setInfo(true);
                setSelectedMassage(massage);
              }}
            >
              {massage.prestation}
            </motion.h2>
            <p>{massage.prix}€</p>
          </motion.article>
        ))}
      </div>
      <img className="massage" src={massage} alt="" />
      <AnimatePresence>
        {info && (
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-contain"
          >
            <div className="modal">
              <button
                onClick={() => {
                  setInfo(false);
                }}
              >
                X
              </button>
              <h3>{selectedMassage.prestation}</h3>
              <p>{selectedMassage.argumentaire}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {Aside && (
        <aside className="desktop">
          <article className="explain">
            <img src={bol} alt="bol tibétain" />
            <p>
              Le massage bien-être est une technique de relaxation qui a de
              nombreux bienfaits pour la santé. <br /> <br /> Il permet de
              soulager le stress et l'anxiété en libérant des endorphines,{" "}
              <br />
              d'améliorer la circulation sanguine en dilatant les vaisseaux
              sanguins, <br /> de soulager les douleurs musculaires et
              articulaires en détendant les muscles et en éliminant les toxines
              qui peuvent causer des inflammations, <br /> de favoriser un
              sommeil de qualité en relaxant le corps et l'esprit,
              <br /> de renforcer le système immunitaire en améliorant la
              circulation sanguine et en libérant des endorphines. <br />
              <br /> Le massage bien-être est donc une solution idéale pour
              prendre soin de sa santé et de son bien-être en favorisant la
              détente et la relaxation profonde.
            </p>
          </article>
        </aside>
      )}
    </motion.div>
  );
};

export default Massage;
