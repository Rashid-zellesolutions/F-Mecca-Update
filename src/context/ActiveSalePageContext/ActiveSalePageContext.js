import { createContext, useContext, useEffect, useState } from "react";

const ActiveSalePageContext = createContext();

export const ActiveSalePageProvider = ({ children }) => {
    const [salesData, setSalesData] = useState(null); // State to store fetched data
    const [products, setProducts] = useState(null);   // State to store fetched products
    const [loading, setLoading] = useState(false);    // State to track loading status
    const [error, setError] = useState(null);         // State to store error (if any)

    // Utility function to handle retries
    const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (retries > 0) {
                console.warn(`Retrying... ${retries} attempts left`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchWithRetry(url, options, retries - 1, delay);
            }
            throw new Error(`Failed to fetch data: ${error.message}`);
        }
    };

    // Main function to fetch sales data
    const fetchData = async (endpoint) => {
        const url = `https://fm.skyhub.pk/api/v1/sales-page/get${endpoint ? `?${new URLSearchParams(endpoint)}` : ''}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        try {
            setLoading(true);
            const data = await fetchWithRetry(url, options);
           await fetchProductsByCategory(data?.data?.subCategory)
            setSalesData(data); // Store the fetched data in state
        } catch (error) {
            setError(error.message);
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function to fetch products by category
    const fetchProductsByCategory = async (categoryUid) => {
        // Check if products are already fetched
        if (products) {
            console.log("Products already fetched, skipping request.");
            return;
        }

        const url = `https://fm.skyhub.pk/api/v1/products/by-category?categoryUid=${categoryUid}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        try {
            setLoading(true);
            const data = await fetchWithRetry(url, options);
            setProducts(data.products); // Store the fetched products in state
        } catch (error) {
            setError(error.message);
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch sales data on component mount
        
    }, []);

    return (
        <ActiveSalePageContext.Provider value={{ salesData, products, fetchProductsByCategory, loading, error }}>
            {children}
        </ActiveSalePageContext.Provider>
    );
};

export const useActiveSalePage = () => useContext(ActiveSalePageContext);
