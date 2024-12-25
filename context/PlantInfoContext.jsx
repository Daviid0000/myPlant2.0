import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const PlantInfoContext = createContext();

// Crear el proveedor del contexto
export const PlantInfoProvider = ({ children }) => {
    const [modalData, setModalData] = useState(null);

    return (
        <PlantInfoContext.Provider value={{ modalData, setModalData }}>
            {children}
        </PlantInfoContext.Provider>
    );
};

// Crear un hook para usar el contexto fácilmente
export const usePlantInfo = () => {
    return useContext(PlantInfoContext);
};
