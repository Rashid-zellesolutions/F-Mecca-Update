import { createContext, useContext, useState } from "react";

export const VariationsContext = createContext();

export const VariationProvider = ({children}) => {
    const [selectedColorValue, setSelectedColorValue] = useState()
    const [selectedLabel, setSelectedLabel] = useState();

    return (
        <VariationsContext.Provider value={{
            selectedColorValue,
            setSelectedColorValue,
            selectedLabel,
            setSelectedLabel,
        }}>
            {children}
        </VariationsContext.Provider>
    )
}

export const useVariation = () => useContext(VariationsContext);