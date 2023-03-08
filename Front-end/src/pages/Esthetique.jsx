import React from "react";
import { useState } from "react";
import NavigationSite from "../Component/NavigationSite";
import { motion } from "framer-motion";
import epile from "../img/epilation.jpg";
import maquille from "../img/maquille.jpg";
import moment from "moment";
import { useSelector } from "react-redux";
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
    transition: { duration: 0.3 },
  },
};

const Esthetique = () => {
  const PrestEpilation = useSelector((state) => state.Prestation.epile);
  const [Epilation, SetEpilation] = useState(true);
  const [EpilationModal, setEpilationModal] = useState(true);
  const [Maquillage, SetMaquillage] = useState(false);
  const [MaquillageModal, SetMaquillageModal] = useState(false);
  const [Soins, SetSoins] = useState(false);
  const [exit, SetExit] = useState(0);
  const [RendezVous, setRendezVous] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedHour, setSelectedHour] = useState(8);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateTimeChange = (
    selectedItem,
    selectedDate,
    selectedHour,
    setSelectedItem
  ) => {
    const dateString = selectedDate;
    const date = moment(dateString);
    const formattedDate = date.format("DD/MM/YYYY");
    const selectedDateTime = `${formattedDate} à ${selectedHour}:00`;

    setSelectedItem({
      ...selectedItem,
      dateRendezVous: selectedDateTime,
    });
  };
  console.log(PrestEpilation);
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
                SetEpilation(true);
                setEpilationModal(true);
                SetMaquillage(false);
                SetMaquillageModal(false);
                SetSoins(false);
              }}
            >
              Epilation
            </button>
            <button
              className="btn-2"
              onClick={() => {
                SetMaquillage(true);
                SetMaquillageModal(true);
                SetEpilation(false);
                setEpilationModal(false);
                SetSoins(false);
              }}
            >
              Maquillage
            </button>
            <button
              className="btn-3"
              onClick={() => {
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
                {PrestEpilation &&
                  PrestEpilation.map((item) => {
                    return (
                      <div className="product">
                        <button
                          onClick={(e) => {
                            setRendezVous(true);
                            setSelectedItem(item);
                            console.log(item);
                          }}
                        >
                          Réserver
                        </button>
                        <h2>{item.prestation}</h2>
                        <p>{item.prix}€</p>
                      </div>
                    );
                  })}
              </div>
            )}
            {Maquillage && (
              <div
                className="caroussel-container"
                exit={exit}
                onAnimationEnd={() => SetExit(0)}
              >
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>
              </div>
            )}
            {Soins && (
              <div
                className="caroussel-container"
                exit={exit}
                onAnimationEnd={() => SetExit(0)}
              >
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>{" "}
                <div className="product">
                  <button>réserver</button>
                  <h2>titre</h2>
                  <p>prix€</p>
                </div>
              </div>
            )}
          </div>
        </article>
        {EpilationModal && (
          <aside className="rendez-vous">
            <img src={epile} alt="" />
            <div className="advice">
              <h3>conseil pour une épilation : </h3>
              <div className="advice-box">
                <div>
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <strong>La veille :</strong> Il est recommandé de faire un
                    gommage.
                  </p>
                </div>
                <div>
                  <i class="fa-solid fa-star"></i>
                  <p>
                    <strong> Le jour de l’épilation :</strong> Ne mettre ni
                    crème ni lait hydratant sur les zones à épiler. Il faut 4mm
                    de poils minimum pour attraper les poils le jour de
                    l’épilation.
                  </p>
                </div>
                <p>
                  <h4>L’ÉPILATION À LA CIRE</h4> <br />
                  La cire ne coupe pas le poil, elle l'arrache à sa racine, ce
                  qui permet une repousse plus lente.
                  <br />
                  <br />
                  Pour chaque zone du corps j'uttilise des cires spécifiques.
                </p>
              </div>
            </div>
            <div className="citation">
              <p>" Un moment pour vous ! "</p>
            </div>
          </aside>
        )}
        {MaquillageModal && (
          <aside className="rendez-vous">
            <img src={maquille} alt="" />
            <div className="advice">
              <h3>Maquillage </h3>
              <div className="advice-box">
                <p>
                  Qu’il soit naturel ou sophistiqué, il sera le reflet de votre
                  personnalité. <br />
                  Je serais sublimer votre teint, illuminer votre regard pour
                  des maquillages adaptés à toutes situations.
                  <br />
                  <br />
                  <i class="fa-solid fa-star"></i>Maquillage FX/effet
                  spéciaux/3D pour soirée à thème{" "}
                  <i class="fa-solid fa-star"></i>
                </p>
              </div>
            </div>
            <div className="citation">
              <p className="citate">
                " Le maquillage, c'est l'art de révéler la beauté sans masquer
                le naturel "
              </p>
            </div>
          </aside>
        )}
        <footer>footer</footer>
        {RendezVous && (
          <div className="backdrop">
            <div
              className="rendezvous"
              item={selectedItem}
              updateItem={setSelectedItem}
            >
              <h1>Mon rendez-vous :</h1>
              <h2>
                {selectedItem.prestation} {selectedItem.prix}€
              </h2>
              <div className="tableau">
                <label>Choisissez une date :</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <label>Choisissez une heure :</label>
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                >
                  {[...Array(11)].map((_, i) => (
                    <option value={8 + i}>{8 + i}:00</option>
                  ))}
                </select>
              </div>
              <button
                className="btn"
                onClick={() => {
                  if (selectedDate && selectedHour) {
                    handleDateTimeChange(
                      selectedItem,
                      selectedDate,
                      selectedHour,
                      setSelectedItem
                    );
                    console.log(selectedItem);
                  }
                }}
              >
                valider
              </button>
              {(!selectedItem.dateRendezVous && (
                <div className="selected">
                  <h2 className="error-text">
                    Veuillez sélectionner une date et une heure
                  </h2>
                </div>
              )) || (
                <div className="selected">
                  <h2>Le {selectedItem.dateRendezVous}</h2>
                </div>
              )}
              <button className="confirm"> Confirmer mon rendez-vous</button>
              <div className="closemodal">
                <i
                  class="fa-regular fa-rectangle-xmark fa-3x"
                  onClick={() => {
                    setRendezVous(false);
                    setSelectedHour(8);
                    setSelectedDate(null);
                  }}
                ></i>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Esthetique;
