import React from "react";
import { useState } from "react";
import NavigationSite from "../Component/NavigationSite";
import massage from "../img/massage3.jpg";
import { AnimatePresence, delay, motion } from "framer-motion";

const homeVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: { duration: 1.5 },
  },
  exit: {
    y: "100vh",
    transition: { duration: 1.5 },
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
    transition: { duration: 1 },
  },
  visible2: {
    width: "90%",
    transition: { duration: 1, delay: 0.2 },
  },
  visible3: {
    width: "90%",
    transition: { duration: 1, delay: 0.4 },
  },
  visible4: {
    width: "90%",
    transition: { duration: 1, delay: 0.6 },
  },
  visible5: {
    width: "90%",
    transition: { duration: 1, delay: 0.8 },
  },
};
const title = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.2 } },
};

const Massage = () => {
  const [infoRebouteux, setInfoRebouteux] = useState(false);
  const [infoDeepTissue, setInfoDeepTissue] = useState(false);
  const [infoDiapasons, setInfoDiapasons] = useState(false);
  const [infoMétamorphique, setInfoMétamorphique] = useState(false);
  const [infoSportif, setInfoSportif] = useState(false);

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
        <motion.article variants={article} initial="hidden" animate="visible">
          <button>Réserver</button>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setInfoRebouteux(true);
            }}
          >
            Techniques douces des Rebouteux
          </motion.h2>
          <p>Prix€</p>
        </motion.article>
        <motion.article variants={article} initial="hidden" animate="visible2">
          <button>Réserver</button>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setInfoDeepTissue(true);
            }}
          >
            Deep Tissue
          </motion.h2>
          <p>Prix€</p>
        </motion.article>
        <motion.article variants={article} initial="hidden" animate="visible3">
          <button>Réserver</button>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setInfoDiapasons(true);
            }}
          >
            Techniques des Diapasons thérapeutiques
          </motion.h2>
          <p>Prix€</p>
        </motion.article>
        <motion.article variants={article} initial="hidden" animate="visible4">
          <button>Réserver</button>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setInfoSportif(true);
            }}
          >
            Sportif
          </motion.h2>
          <p>Prix€</p>
        </motion.article>
        <motion.article variants={article} initial="hidden" animate="visible5">
          <button>Réserver</button>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setInfoMétamorphique(true);
            }}
          >
            Toucher Métamorphique
          </motion.h2>
          <p>Prix€</p>
        </motion.article>
      </div>
      <img className="massage" src={massage} alt="" />
      <AnimatePresence>
        {infoRebouteux && (
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
                  setInfoRebouteux(false);
                }}
              >
                X
              </button>
              <h3>Techniques douces des rebouteux</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis neque repudiandae alias consequatur optio assumenda
                eum, eius id possimus suscipit officia repellat! Fugiat odit
                eaque quae reiciendis quis, porro nemo.
              </p>
            </div>
          </motion.div>
        )}
        {infoDeepTissue && (
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
                  setInfoDeepTissue(false);
                }}
              >
                X
              </button>
              <h3>Deep Tissue</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis neque repudiandae alias consequatur optio assumenda
                eum, eius id possimus suscipit officia repellat! Fugiat odit
                eaque quae reiciendis quis, porro nemo.
              </p>
            </div>
          </motion.div>
        )}{" "}
        {infoDiapasons && (
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
                  setInfoDiapasons(false);
                }}
              >
                X
              </button>
              <h3>Diapason Thérapeutiques</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis neque repudiandae alias consequatur optio assumenda
                eum, eius id possimus suscipit officia repellat! Fugiat odit
                eaque quae reiciendis quis, porro nemo.
              </p>
            </div>
          </motion.div>
        )}{" "}
        {infoMétamorphique && (
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
                  setInfoMétamorphique(false);
                }}
              >
                X
              </button>
              <h3>Touché Métamorphique</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis neque repudiandae alias consequatur optio assumenda
                eum, eius id possimus suscipit officia repellat! Fugiat odit
                eaque quae reiciendis quis, porro nemo.
              </p>
            </div>
          </motion.div>
        )}{" "}
        {infoSportif && (
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
                  setInfoSportif(false);
                }}
              >
                X
              </button>
              <h3>Sportif</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis neque repudiandae alias consequatur optio assumenda
                eum, eius id possimus suscipit officia repellat! Fugiat odit
                eaque quae reiciendis quis, porro nemo.
              </p>
            </div>
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </motion.div>
  );
};

export default Massage;
