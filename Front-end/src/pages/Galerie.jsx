import React from "react";
import { useState } from "react";

const Galerie = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <div>
      <label>Choisissez une date et une heure :</label>
      <input
        type="datetime-local"
        value={selectedDateTime}
        onChange={(e) => setSelectedDateTime(e.target.value)}
        step={3600}
      />
    </div>
  );
};

export default Galerie;
