
import { createContext, useContext, useEffect, useState } from "react";
import { url } from "../../utils/api";
import axios from "axios";
import { CartContext } from "../cartContext/cartContext";
import { useCart } from "../cartContext/cartContext";
import { useGlobalContext } from "../GlobalContext/globalContext";

const MyOrderContext = createContext();

export const MyOrdersProvider = ({ children }) => {

    const [activePaymentMethods,setActivePaymentMethods]=useState([]);
    const [loader,setLoader]=useState(false);
    const {cartProducts,subTotal} = useCart();
    const {totalTax,calculateTotalTax,getShippingInfo,selectedOption} = useGlobalContext();

    const [creditCardData, setCreditCardData] = useState({
        card_holder_name: '',
        card_number: '',
        expiry_date: '',
        sec_code: '',
        card_type:''
    })

    const [orderPayload, setOrderPayload] = useState({
        status: 'pending',
        currency: "USD",
        billing: {
            first_name: "",
            last_name: "",
            address_1: "",
            city: "",
            state: "",
            postal_code: "",
            country: "USA",
            email: "",
            phone: ""
        },
        shipToDiffAdd:false,
        shipping: {
            first_name: "",
            last_name: "",
            address_1: "",
            city: "",
            state: "",
            postal_code: "",
            country: "USA",
            email: "",
            phone: ""
        },

        payment_method: "",
        card_info: {
            card_holder_name: '',
            card_number: '',
            expiry_month: '',
            expiry_year: '',
            sec_number: ''
        },
        tax_lines:{
            id:"",
            name:"",
            tax_rate:""
        },
        shipping_lines:{
            id:"",
            method_id:"",
            tax:"",
            cost:""
        },
        items: [],
        discount: 0,
        tax: 5,
        cart_protected: cartProducts.is_all_protected,
        is_shipping: 1,
        shipping_cost: 10,
        professional_assembled:cartProducts.is_professional_assembly
    })

    const [emptyField, setEmptyField] = useState({});
    const [loading, setLoading] = useState(true); // Loading state
    const [selectedTab, setSelectedTab] = useState(0)
    const [isLoader, setIsLoader] = useState(false)
    const { resetCart } = useContext(CartContext)

    async function fetchActivePaymentMethods() {
        const apiUrl = `${url}/api/v1/payment-methods/get`;
      
        try {
            setLoader(true)
          const response = await fetch(apiUrl);
          
          if (!response.ok) {
            setLoader(false)
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
            
          }
      
          const data = await response.json();
          console.log("API Response:", data);
          setLoader(false)
          return data; // You can return the data for further processing
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoader(false)
          return null; // Return null or handle the error accordingly
        }
    }

    const getActivePaymentMethods = async () => {
        const data = await fetchActivePaymentMethods();
        setActivePaymentMethods(data?.activePaymentMethods);
    };

    useEffect(() => {
        const storeOrders = localStorage.getItem('myOrders');
        if (storeOrders) {
            try {
                setOrderPayload(JSON.parse(storeOrders));
            } catch (error) {
                console.error("Failed to parse myOrders from localStorage:", error);
            }
        }
        setLoading(false); // Set loading to false after processing
        getActivePaymentMethods();
    }, []);

    useEffect(() => {
        if (orderPayload) {
            localStorage.setItem('myOrders', JSON.stringify(orderPayload)); // Save as a JSON string
        }
    }, [orderPayload]);

    const handleNestedValueChange = (e) => {
        const { name, value } = e.target;

        setOrderPayload((prevOrders) => ({
            ...prevOrders,
            billing: {
                ...prevOrders.billing,
                [name]: value, // Update the specific field in billing
            },
        }));
        setEmptyField((prev) => ({ ...prev, [name]: "" }));
    };

    const handleNestedValueChangeShipping = (e) => {
        const { name, value } = e.target;

        setOrderPayload((prevOrders) => ({
            ...prevOrders,
            shipping: {
                ...prevOrders.shipping,
                [name]: value, // Update the specific field in billing
            },
        }));
        setEmptyField((prev) => ({ ...prev, [name]: "" }));
    };

    const handleNestedShippingBool = () => {
        setOrderPayload((prevOrders) => ({
            ...prevOrders,
            shipToDiffAdd: !prevOrders.shipToDiffAdd,
        }));
    };

    const addProducts = (products) => {
        setOrderPayload((prevOrder) => ({
            ...prevOrder,
            items: [
                ...(Array.isArray(products) ? products : [products]) // Ensure single product is handled like an array
                    .map((product) => ({
                        name: product.name,
                        product_id: product.product_uid,
                        variation_uid:product.variation_uid,
                        quantity: product.quantity,
                        sku: product.sku,
                        is_protected: product.is_protected,
                        image: product?.image?.image_url
                    }))
            ]
        }));
    }

    useEffect(()=>{
        addProducts(cartProducts.products)
    },[cartProducts])

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setOrderPayload((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleClickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleTabOpen = (tabId, scrollTop) => {

        setSelectedTab(tabId);

        if (scrollTop) {
            scrollTop();
        }
    }

    const sendProducts = async () => {
        try {
            setIsLoader(true);
    
            const updatedPayload = {
                ...orderPayload,
                items: cartProducts.products.map((product) => ({
                    name: product.name,
                    product_id: product.product_uid,
                    variation_uid: product.variation_uid,
                    quantity: product.quantity,
                    sku: product.sku,
                    is_protected: product.is_protected,
                    image: product?.image?.image_url
                })),
                professional_assembled: cartProducts?.is_professional_assembly,
                cart_protected: cartProducts?.is_all_protected,
                tax: calculateTotalTax(subTotal, parseFloat(totalTax?.tax_value)),
                shipping_cost: getShippingInfo(selectedOption)?.cost,
                tax_lines: {
                    id: totalTax?._id || "",
                    name: totalTax?.tax_name || "",
                    tax_rate: totalTax?.tax_value || "0",
                    description: totalTax?.tax_description || "",
                    updatedAt: totalTax?.updatedAt || "",
                },
                shipping_lines: {
                    id: selectedOption?._id || "",
                    method_id: selectedOption?.id || "",
                    tax: selectedOption?.tax || "0",
                    cost: selectedOption?.cost || ""
                },
            };
    
            // const url = "http://localhost:8080";
            const api = `/api/v1/orders/add`;
            const response = await axios.post(`${url}${api}, ${updatedPayload}`);
    
            if (response.status === 201) {
                console.log("Order added successfully!");
            }
        } catch (error) {
            console.error("Error adding order:", error);
        } finally {
            setIsLoader(false);
        }
    };
    
    const handlePaymentInfo = () => {
        // Split the expiry_date to get month and year
        const [expiry_month, expiry_year] = creditCardData.expiry_date.split("/");

        // Update the orderPayload with the values from creditCardData
        setOrderPayload((prevPayload) => ({
            ...prevPayload,
            card_info: {
                ...prevPayload.payment_info,
                card_holder_name: creditCardData.card_holder_name,
                card_number: creditCardData.card_number,
                expiry_month: expiry_month || '',  // Set month, default to empty string if not present
                expiry_year: expiry_year || '',    // Set year, default to empty string if not present
                sec_number: creditCardData.sec_code,
            }
        }));
    }

    useEffect(()=>{
        handlePaymentInfo();
    },[creditCardData])

    return (
        <MyOrderContext.Provider value={{
            orderPayload,
            setOrderPayload,
            handleNestedValueChange,
            handleNestedShippingBool,
            handleNestedValueChangeShipping,
            handleValueChange,
            loading,
            selectedTab,
            handleTabOpen,
            addProducts,
            sendProducts,
            isLoader,
            setIsLoader,
            handleClickTop,
            emptyField,
            setEmptyField,
            creditCardData,
            setCreditCardData,
            handlePaymentInfo,
            activePaymentMethods
        }}>
            {children}
        </MyOrderContext.Provider>
    )
}

export const useMyOrders = () => useContext(MyOrderContext)