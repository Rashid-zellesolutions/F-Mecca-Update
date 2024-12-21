import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
// const singleProductContext = createContext();

export const AddCartProvider = ({ children }) => {

    // get cart from local storage
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    // Save cart to local storage when cart change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        const checkProduct = cart.find((item) => item.product.uid === product.uid)
        if (checkProduct) {
            setCart((prevCart) => {
                return prevCart.map(item =>
                    item.product.uid === product.uid
                        ? {
                            ...item,
                            product: {
                                ...item.product,
                                quantity: item.product.quantity + quantity,
                            },
                        }
                        : item
                );
            });
        } else {
            const newProduct = {
                product: {
                    ...product,
                    quantity: 1,
                },
            };
            setCart((prevCart) => [...prevCart, newProduct]);
        }
    };

    const removeFromCart = (uid) => {
        setCart((prevCart) => prevCart.filter(item => item.product.uid !== uid));
    };

    const getProductFromCart = (uid) => {
        return cart.find(item => item.product.uid === uid) || null;
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.product.sub_total, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            getProductFromCart,
            calculateTotalPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);