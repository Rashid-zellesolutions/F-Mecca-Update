import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../../utils/api";
import { useCart } from "../cartContext/cartContext";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  const [stores, setStores] = useState([]);
  const [shippingMethods, setShippingMethods] = useState(null);
  const [totalTax, setTotalTax] = useState(null);
  const [shippingLoader, setShippingLoader] = useState(false);
  const [taxLoader, setTaxLoader] = useState(false);
  const { subTotal, cartProducts } = useCart();

  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('other_info');
    return savedInfo ? JSON.parse(savedInfo) : {
      locationData: {
        zipCode: '19134',
        stateCode: 'PA',
        city: 'E Venango St',
        state: 'Philadelphia',
        country: 'us',
        longitude: '-75.1276754',
        latitude: '40.0045027',
      }
    };
  });

  const updateLocationData = (newLocationData) => {
    setInfo((prevState) => ({
      ...prevState,
      locationData: {
        ...prevState.locationData,
        ...newLocationData
      }
    }));
  };

  useEffect(() => {
    localStorage.setItem('other_info', JSON.stringify(info));
    fetchAllstores();
    // console.log(subTotal,"here is")
  }, [info])

  const [zipCode, setZipCode] = useState("");
  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  async function getStateByPostalCode(postalCode) {
    const apiUrl = `https://api.zippopotam.us/us/${postalCode}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      //   console.log("API Response:", data);
      return data.places[0]; // You can return the data for further processing
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Return null or handle the error accordingly
    }
  }

  async function getStoresByDistance1(using,zip,lat,lng) {
    var apiUrl = ``;
    // const url ="http://localhost:8080";
    using === "code"?
      apiUrl = `${url}/api/v1/stores/get-distant?zipcode=${zip}`:
    using === "latlng"?
     apiUrl = `${url}/api/v1/stores/get-distant?latitude=${lat}&longitude=${lng}`:
    apiUrl = `${url}/api/v1/stores/get-distant`;
   
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      // console.log("API Response:", data);
      return data.data; // You can return the data for further processing
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Return null or handle the error accordingly
    }
  }

  async function getShippingMethodss() {
    const apiUrl = `${url}/api/v1/shipping/get?stateCode=${info.locationData.stateCode}`;

    try {
      setShippingLoader(true)
      const response = await fetch(apiUrl);

      if (!response.ok) {
        setShippingLoader(false)
        throw new Error(`Error: ${response.status} - ${response.statusText}`);

      }

      const data = await response.json();
      setShippingLoader(false)
      return data; // You can return the data for further processing
    } catch (error) {
      console.error("Error fetching data:", error);
      setShippingLoader(false)
      return null; // Return null or handle the error accordingly
    }
  }

  async function getTotalTax() {
    const apiUrl = `${url}/api/v1/tax/get?stateCode=${info.locationData.stateCode}`;

    try {
      setTaxLoader(true)
      const response = await fetch(apiUrl);

      if (!response.ok) {
        setTaxLoader(false)
        throw new Error(`Error: ${response.status} - ${response.statusText}`);

      }

      const data = await response.json();
      setTaxLoader(false)
      return data; // You can return the data for further processing
    } catch (error) {
      console.error("Error fetching data:", error);
      setTaxLoader(false)
      return null; // Return null or handle the error accordingly
    }
  }

  const fetchAllstores = async (using,zip,lat,lng) => {

    var data = using === "code" ? await getStoresByDistance1("code",zip) : using === "latlng"? await getStoresByDistance1("latlng","",lat,lng) : await getStoresByDistance1();

    if (data) {
      // Sort the data based on the 'distance' attribute
      const sortedData = data.sort((a, b) => {
        // Extract numeric part from distance string (e.g., '10 km' -> 10)
        const distanceA = parseFloat(a.distance);
        const distanceB = parseFloat(b.distance);

        return distanceA - distanceB; // Sort in ascending order (shortest distance first)
      });

      setStores(sortedData); // Set the sorted data to the state
    }
  };

  const setAllShippingMethods = async () => {
    const data = await getShippingMethodss();
    setShippingMethods(data?.shippingZones[0]);
  };

  const setTaxValues = async () => {
    const data = await getTotalTax();
    setTotalTax(data?.tax[0]);
  };

  function calculateTotalTax(subtotal, taxRate) {
    if (isNaN(subtotal) || isNaN(taxRate) || subtotal < 0 || taxRate < 0) {
      throw new Error("Invalid input: subtotal and taxRate must be non-negative numbers.");
    }
    const taxAmount = (subtotal * taxRate) / 100;
    return taxAmount;
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e, option) => {
    setSelectedOption(option);
  };

  const [selectedShippingMethods, setSelectedShippingMethods] = useState(null);
  function getShippingMethods(subtotal, shippingMethods) {
    setSelectedOption({});
    let selectedMethods = [];

    // Case 1: METHOD-1 (Free Shipping)
    const method1 = shippingMethods.find((method) => method.id === "METHOD-1");
    if (method1 && subtotal >= method1.min_cost) {
      selectedMethods.push(method1);
    }

    // If METHOD-1 is applied, no other methods will be shown
    if (selectedMethods.length === 1) {
      setSelectedOption(method1); // Automatically select METHOD-1
      setSelectedShippingMethods(selectedMethods);
      return;
    }

    // Case 2: METHOD-2 (Flat Rate Shipping)
    const method2 = shippingMethods.find((method) => method.id === "METHOD-2");
    if (method2) {
      selectedMethods.push({ ...method2, cost: subtotal >= method2.min_cost ? method2.cost : 0 });
    }

    // Case 3: METHOD-3 (Local Pickup)
    const method3 = shippingMethods.find((method) => method.id === "METHOD-3");
    if (method3 && method3.cost === 0) {
      selectedMethods.push(method3);
    }

    // Handle default selection logic
    if (selectedMethods.length === 2) {
      const defaultMethod = selectedMethods.find((method) => method.id === "METHOD-2") || method3;
      setSelectedOption(defaultMethod); // Set METHOD-2 by default, or METHOD-3 if METHOD-2 is unavailable
    } else if (selectedMethods.length > 0) {
      setSelectedOption(selectedMethods[0]); // Default to the first available method
    }

    setSelectedShippingMethods(selectedMethods);
  }

  useEffect(() => {
    setAllShippingMethods();
    setTaxValues();
    setSelectedOption(null)
  }, [info])

  const handleButtonClick = async () => {
    const data = await getStateByPostalCode(zipCode);
    // console.log(data)
    if (data) {
      updateLocationData({
        zipCode: zipCode,
        stateCode: data['state abbreviation'],
        city: data['place name'],
        state: data['state'],
        country: 'US',
        longitude: data['longitude'],
        latitude: data['latitude'],
      })
    }
  };

  function getShippingInfo(option) {
    let result = "";
    let taxIncluded = "";
    let cost = option?.cost || 0; // Default to 0 if cost is not defined
  
    if (option?.id === "METHOD-2") {
      result = option.cost ? `${option.cost} (Standard Shipping)` : "Standard Shipping";
      taxIncluded = option.tax !== 0 ? "Tax Included" : "No Tax";
    } else if (option?.id === "METHOD-1") {
      result = "Free Shipping";
      taxIncluded = "No Tax";
      cost = 0;
    } else if (option?.id === "METHOD-3") {
      result = "Local Pickup";
      taxIncluded = "No Tax";
      cost = option?.cost || 0; // Local pickup might still have a cost
    } else {
      result = "Identifying";
      taxIncluded = "";
    }
  
    return { result, taxIncluded, cost };
  }
  
  const [grandTotal, setGrandTotal] = useState(0);

  function CalculateGrandTotal() {
    const subTotal1 = parseFloat(subTotal|| 0); // Ensure subTotal is parsed as a number
    const taxValue = parseFloat(totalTax?.tax_value || 0); // Ensure tax_value is parsed as a number
    console.log(subTotal1,taxValue,getShippingInfo(selectedOption)?.cost,"here are subtotal & tax")
    return subTotal + calculateTotalTax(subTotal1, taxValue) + getShippingInfo(selectedOption)?.cost;
  }
  
  return (
    <GlobalContext.Provider value={{
      info,
      setInfo,
      updateLocationData,
      zipCode, setZipCode, handleInputChange, handleButtonClick,
      fetchAllstores, stores, setStores, setAllShippingMethods, shippingMethods, setShippingMethods, shippingLoader, setShippingLoader,
      totalTax, calculateTotalTax, getShippingInfo, setTaxValues, selectedOption, setSelectedOption, handleChange,getShippingMethods,selectedShippingMethods, setSelectedShippingMethods,grandTotal,CalculateGrandTotal
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);