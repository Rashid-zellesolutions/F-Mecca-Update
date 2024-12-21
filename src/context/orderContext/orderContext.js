import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvivder = ({ children }) => {
    // const [orders, setOrders] = useState(() => {
    //     const savedOrders = localStorage.getItem('order');
    //     return savedOrders ? savedOrders : [];
    // })
      const [billingData , setBillingData] = useState({
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
        is_shipping:1,
        shipping_cost: 10
    })

    // console.log("set billing info direct", billingData)

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
        console.log("inputs in context", orders);
        setOrders((prevPayload) => ({
            ...prevPayload,
            [field]: value
        }));
        console.log("pay met", orders)
    }

    const updateBillingField = (field, value) => {
        setOrders((prevPayload) => ({
            ...prevPayload,
            billing: {
                ...prevPayload.billing,
                [field]: value
            }
        }));
        console.log("this is billing data", orders)
    };

    // const addProducts = (product) => {
    //     setOrders((prevOrder) => ({
    //         ...prevOrder,
    //         items: [
    //             product
    //         ]
    //     }))
    // }

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
            console.log("inputs in context", orders);
            setBillingData((prevPayload) => ({
                ...prevPayload,
                [field]: value
            }));
        }

    // const handleValueChange = (e) => {
    //     const { name, value } = e.target;

    //     setOrders((prevOrders) => ({
    //         ...prevOrders,
    //         billing: {
    //             ...prevOrders.billing,
    //             [name]: value, // Update the specific field in billing
    //         },
    //     }));
    // };



    // const addOrders = (order) => {
    //     console.log("order payload check in context", order)
    //     setOrders((prevOrders) => {
    //             return [...prevOrders, { ...order }];
    //     })
    //     console.log("updated orders payload", orders)
    // }


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