// PasantiasContext.js

import React, { createContext, useState } from 'react';

const PasantiasContext = createContext();

export const PasantiasProvider = ({ children }) => {
  const [pasantias, setPasantias] = useState([]);

  const agregarPasantia = (nuevaPasantia) => {
    setPasantias([...pasantias, nuevaPasantia]);
  };

  return (
    <PasantiasContext.Provider value={{ pasantias, agregarPasantia }}>
      {children}
    </PasantiasContext.Provider>
  );
};

export default PasantiasContext;
