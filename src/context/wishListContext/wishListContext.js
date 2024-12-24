import { createContext, useContext, useEffect, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({children}) => {

    const [wishList, setWishList] = useState(() => {
        const savedList = localStorage.getItem('wishList');
        return savedList ? JSON.parse(savedList) : [];
    })

    useEffect(() => {
        const storedList = localStorage.getItem('wishList');
        if (storedList) {
            setWishList(JSON.parse(storedList));
        }
    }, []);

    // save cart to local storage when eer it changes
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
        // console.log("cart storage", cart)
    }, [wishList])

    // Add item to the wishlist if it doesn't already exist
    const addToList = (product) => {
        const exists = wishList.some((item) => item.uid === product.uid);
        if (!exists) {
            setWishList((prevList) => [...prevList, product]);
        } else {
            // console.warn(`Product with ID ${product.uid} already in the wishlist.`);
            alert(`Product with ID ${product.uid} already in the wishlist.`)
        }
    };
    // Remove item from the wishlist
    const removeFromList = (productId) => {
        setWishList((prevList) => prevList.filter((item) => item.uid !== productId));
    };

    // Check if an item exists in the wishlist
    const isInWishList = (productId) => {
        return wishList.some((item) => item.uid === productId);
    };
    
    return (
        <WishListContext.Provider value={
            { 
                wishList, 
                addToList, 
                removeFromList, 
                isInWishList 
                }
            }>
            {children}
        </WishListContext.Provider>
    );
}

export const useList = () => useContext(WishListContext);