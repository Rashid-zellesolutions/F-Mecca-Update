import { createContext, useContext, useEffect, useState } from "react";

const SingleProductContext = createContext();

export const SingleProductProvider = ({children}) => {

    const [singleProduct, setSingleProduct] = useState(() => {
        const savedSingleProduct = localStorage.getItem('singleProduct');
        return savedSingleProduct ? JSON.parse(savedSingleProduct) : []
    });
    
    useEffect(() => {
        const storedSingleProduct = localStorage.getItem('singleProduct');
        if (storedSingleProduct) {
            setSingleProduct(JSON.parse(storedSingleProduct));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('singleProduct', JSON.stringify(singleProduct));
        // console.log("cart storage", cart)
    }, [singleProduct])

    const addSingleProduct = (product) => {
        setSingleProduct((prevState) => ({
            ...product,
            quantity: prevState.quantity || 1,
            is_protected: 0
        }))
    }

    // console.log("check for context", singleProduct)
    // increase quantity function
    const increaseQuantity = () => {
        setSingleProduct((prevState) => {
            if(prevState) {
                return {...prevState, quantity: prevState.quantity + 1};
            }
            return prevState; // in case product is null or empty
        })
        // console.log("quantity increase")
    }

    // descrease qauntity function
    const decsreaseQuantity = () => {
        setSingleProduct((prevState) => {
            if(prevState && prevState.quantity > 1){
                return {...prevState, quantity: prevState.quantity - 1}
            }
            return prevState;
        })
        //  console.log("quantity increase")
    }

    return (
        <SingleProductContext.Provider value={
            {
                singleProduct,
                addSingleProduct,
                increaseQuantity,
                decsreaseQuantity
            }
        }>
            {children}
        </SingleProductContext.Provider>
    )
}

export const useSingleProductContext = () => useContext(SingleProductContext);