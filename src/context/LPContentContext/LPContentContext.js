import { createContext, useContext, useState, useEffect } from "react";
import { url } from "../../utils/api";

const LPContentContext = createContext();

export const LPContentProvider = ({ children }) => {
  const [data, setData] = useState(null);  // Store API data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);
  const [landingPageCategories, setLandingPageCategories] = useState([]);
  const [landingPageFOEB, setLandingPageFOEB] = useState([]);

  const postData = async () => {
    if (data === null) {
      try {
        const response = await fetch(`${url}/api/v1/content1/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }// Data to send
        });
        const result = await response.json();
        setData(result);
        setLandingPageCategories(result.landingPageContent.sectional_schema.shop_by_category);
        setLandingPageFOEB(result.landingPageContent.sectional_schema.furniture_for_every_budget);
        // console.log(result)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {

    }
  };


  return (
    <LPContentContext.Provider value={{
      postData, data, loading, landingPageCategories, landingPageFOEB, setLandingPageFOEB
    }}>
      {children}
    </LPContentContext.Provider>
  );
}

export const useLPContentContext = () => {
  return useContext(LPContentContext);
};

