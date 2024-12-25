import React, { createContext, useState, useContext } from 'react';

const PlantInfoContext = createContext();

export const PlantInfoProvider = ({ children }) => {
    const [modalData, setModalData] = useState(null);

    return (
        <PlantInfoContext.Provider value={{ modalData, setModalData }}>
            {children}
        </PlantInfoContext.Provider>
    );
};

export const usePlantInfo = () => {
    return useContext(PlantInfoContext);
};
