import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
    return useContext(NavigationContext);
};

export const NavigationProvider = ({ children }) => {
    const [navigationHistory, setNavigationHistory] = useState([]);

    const addToHistory = (path) => {
        setNavigationHistory((prev) => [...prev, path]);
    };

    return (
        <NavigationContext.Provider value={{ navigationHistory, addToHistory }}>
            {children}
        </NavigationContext.Provider>
    );
};
