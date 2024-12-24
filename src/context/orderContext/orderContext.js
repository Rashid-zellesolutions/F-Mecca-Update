import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvivder = ({ children }) => {

    const [billingData, setBillingData] = useState({
        first_name: "",
        last_name: "",
        address_1: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        email: "",
        phone: ""
    })

    const [orders, setOrders] = useState({
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

        payment_method: "",
        items: [],
        discount: 10,
        tax: 5,
        cart_protected: 0,
        is_shipping: 1,
        shipping_cost: 10
    })

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setOrders(storedOrders);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('orders', orders)
    }, [orders]);

    // Function to update specific field or the entire order
    const addOrder = (field, value) => {
        setOrders((prevPayload) => ({
            ...prevPayload,
            [field]: value
        }));
    }

    const updateBillingField = (field, value) => {
        setOrders((prevPayload) => ({
            ...prevPayload,
            billing: {
                ...prevPayload.billing,
                [field]: value
            }
        }));
    };

    // Add item to cart (items is an array of product objects)
    const addItemToCart = (item) => {
        setOrders((prevPayload) => ({
            ...prevPayload,
            items: [...prevPayload.items, item]
        }));
    };

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setBillingData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const addOrderPayment = (field, value) => {
        setBillingData((prevPayload) => ({
            ...prevPayload,
            [field]: value
        }));
    }

    return (
        <OrderContext.Provider value={{
            orders,
            setOrders,
            addOrder,
            addItemToCart,
            updateBillingField,
            billingData,
            setBillingData,
            handleValueChange,
            addOrderPayment
        }}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrder = () => useContext(OrderContext)