import { createContext, useContext, useState, useEffect } from "react";
import { url } from "../../utils/api";

const SEOContext = createContext();

export const SEOctxProvider = ({ children }) => {
 const [title,setTitle]=useState("My Furniture Mecca");
 const [description,setDescription]=useState("My Furniture Mecca Description");
 const [image,setImage]=useState("https://fm.skyhub.pk/uploads/media/Pages/home/slider/1731385502484_209_Main-Desktop-Banner-2-2048x545.webp");

    return (
        <SEOContext.Provider value={{
            title,setTitle,description,setDescription,image,setImage
        }}>
            {children}
        </SEOContext.Provider>
    );
}

export const useSEOContext = () => {
    return useContext(SEOContext);
};

