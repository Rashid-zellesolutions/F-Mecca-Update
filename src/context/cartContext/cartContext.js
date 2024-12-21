import { createContext, useState, useEffect, useContext } from "react";
import CartItems from "../../UI/Components/Cart-Components/Cart-items/CartItems";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [eachProtectionValue,setEachProtectionValue]=useState(99);
    const [totalProtectionValue,setTotalProtectionValue]=useState(199);
    const [professionalAssemblyValue,setProfessionalAssemblyValue]=useState(210);

    const [cartProducts, setCartProducts] = useState(() => {
        const savedCart = localStorage.getItem('cart2');
        return savedCart ? JSON.parse(savedCart) : {products:[],is_all_protected:0,is_professional_assembly:0};
    });

    const [isCartProtected, setIsCartProtected] = useState(() => {
        const savedCart = localStorage.getItem('cart2');
        const savedIsAllProtected = savedCart ? JSON.parse(savedCart).is_all_protected : 0;
        return savedIsAllProtected === 1;
    });


    const [isProfessionalAssembly, setIsProfessionalAssembly] = useState(() => {
        const savedCart = localStorage.getItem('cart2');
        const savedIsProfessionalAssembly = savedCart ? JSON.parse(savedCart).is_professional_assembly : 0;
        return savedIsProfessionalAssembly === 1; // If saved value is 1, set true; otherwise, false
    });


    const handleCartProtected = () => {
  setIsCartProtected(!isCartProtected);
    
  setCartProducts((prevCart) => ({
      ...prevCart,
      is_all_protected: prevCart.is_all_protected === 0 ? 1 : 0,
  }));
       

    }


    const handleCartAssembly = () => {
        // Toggle the isProfessionalAssembly state
        setIsProfessionalAssembly(!isProfessionalAssembly);
    
        // Update the cartProducts state with the toggled is_assembly value
        setCartProducts((prevCart) => ({
            ...prevCart,
            is_professional_assembly : prevCart.is_professional_assembly === 0 ? 1 : 0,  // Toggle between 0 and 1
        }));
    };
    


    const addToCart0 = (product, variationData,isProtected) => {
        console.log(cartProducts, "here are cart products", variationData);
        setCartProducts((prev) => {
            const updatedProducts = prev.products || []; // Ensure products array exists
    
            const existingProduct =
                product.type === "simple"
                    ? updatedProducts.find((item) => item.product_uid === product.uid)
                    : updatedProducts.find((item) => item.variation_uid === variationData.uid);
    
            if (existingProduct) {
                return {
                    ...prev,
                    products: updatedProducts.map((item) =>
                        product.type === "simple"
                            ? item.product_uid === product.uid
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                            : item.variation_uid === product.default_variation
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                    ),
                };
            } else {
                return {
                    ...prev,
                    products: [
                        ...updatedProducts,
                        {
                            product_uid: product.uid,
                            name: product.name,
                            isVariable: product.type === "simple" ? 0 : 1,
                            variation_uid: product.type === "simple" ? 0 : variationData.uid,
                            image: product.type === "simple" ? product.image : variationData.images[0],
                            attributes: product.type === "simple" ? product.attributes : variationData.attributes,
                            sale_price: product.type === "simple" ? product.sale_price : variationData.sale_price,
                            regular_price: product.type === "simple" ? product.regular_price : variationData.regular_price,
                            quantity: 1,
                            sku:product.type === "simple" ? product.sku : variationData.sku,
                            is_protected: isProtected,
                        },
                    ],
                };
            }
        });
    };
    



















































































    // initialize cart from local storage
    const [subTotal, setSubTotal] = useState(0);
    const [savings, setSavings] = useState(0);
    
    const [deliveryCharges, setDeliveryCharges] = useState(50)
    const [taxValue, setTaxValue] = useState(0);
    const [grandValue, setGrandValue] = useState(0);
    // let subTotal = 0;
    // let deliveryCharges = 50;
    // let taxValue = 10;
    // let grandValue = 0;
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
        const storedCart2 = localStorage.getItem('cart2');
        if (storedCart2) {
            setCartProducts(JSON.parse(storedCart2));
        }
    }, []);

    // save cart to local storage when eer it changes
    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log("cart storage", cart)
    }, [cart])
    // save cart to local storage when eer it changes
    useEffect(() => {

        localStorage.setItem('cart2', JSON.stringify(cartProducts));
        // console.log("cart storage", cart)
    }, [cartProducts])

    const resetCart = () => {
        setCartProducts({products:[],is_all_protected:0,is_professional_assembly:0}); // Clear the cart state
        localStorage.removeItem("cart2"); // Remove cart from localStorage
    };

    const resetCart0 = () => {
        setCartProducts([]); // Clear the cart state
        localStorage.removeItem("cart2"); // Remove cart from localStorage
    };

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

    // Add Items To Cart
    const addToCart = (product, LocalQuantity, isProtected) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.product.uid === product.uid);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.product.uid === product.uid ? {
                        ...item.product,
                        product: {
                            ...item.product,
                            quantity: LocalQuantity,
                        }
                    } : item
                );

            } else {
                const newProduct = {
                    product: {
                        ...product,
                        // is_protected: isProtected ? 1 : 0,
                        // protected_value: isProtected ? 99 : 0,
                        quantity: LocalQuantity,
                        sub_total: parseFloat(product.regular_price) * (product.quantity || 1),
                        total_price: parseFloat(product.regular_price) * (product.quantity || 1)
                    }
                };
                // console.log("new quantity added from local", cart)
                return [...prevCart, newProduct]

            }
        })

    };


    const addSingleProtection = (uid, isVariable = false) => {
        console.log(uid, "uid is here", isVariable ? "Variation UID" : "Product UID");
    
        setCartProducts((prevCart) => ({
            ...prevCart,
            products: prevCart.products.map((item) => {
                if (isVariable) {
                    if (item.variation_uid === uid) {
                        return { ...item, is_protected: 1 }; // Set is_protected to 0 for variable product
                    }
                } else {
                    if (item.product_uid === uid) {
                        return { ...item, is_protected: 1 }; // Set is_protected to 0 for simple product
                    }
                }
                return item; // Return the item unchanged if no match
            }),
        }));
    };

    const removeProtection = (uid, isVariable = false) => {
        console.log(uid, "uid is here", isVariable ? "Variation UID" : "Product UID");
    
        setCartProducts((prevCart) => ({
            ...prevCart,
            products: prevCart.products.map((item) => {
                if (isVariable) {
                    if (item.variation_uid === uid) {
                        return { ...item, is_protected: 0 }; // Set is_protected to 0 for variable product
                    }
                } else {
                    if (item.product_uid === uid) {
                        return { ...item, is_protected: 0 }; // Set is_protected to 0 for simple product
                    }
                }
                return item; // Return the item unchanged if no match
            }),
        }));
    };
    

    const removeFromCart = (uid, isVariable = false) => {
        console.log(uid, "uid is here", isVariable ? "Variation UID" : "Product UID");
    
        setCartProducts((prevCart) => ({
            ...prevCart,
            products: prevCart.products.filter((item) =>
                isVariable
                    ? item.variation_uid !== uid // Remove by variation_uid for variable products
                    : item.product_uid !== uid   // Remove by product_uid for simple products
            ),
        }));
    };
    


    const increamentQuantity = (uid, isVariable = false) => {
        console.log("In increment section:", uid, isVariable);
        setCartProducts((prevCart) => ({
            ...prevCart,
            products: prevCart.products.map((item) => {
                console.log(item, "here is item to increase");
                
                // Check if it's a variable product and increment based on variation_uid
                if (isVariable && item.variation_uid === uid) {
                    console.log("Incrementing variable product");
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        sub_total: (item.quantity + 1) * parseFloat(item.sale_price || item.regular_price || 0),
                        total_price: (item.quantity + 1) * parseFloat(item.sale_price || item.regular_price || 0),
                    };
                }
    
                // For simple products, increment based on product_uid
                if (!isVariable && item.product_uid === uid) {
                    console.log("Incrementing simple product");
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        sub_total: (item.quantity + 1) * parseFloat(item.sale_price || item.regular_price || 0),
                        total_price: (item.quantity + 1) * parseFloat(item.sale_price || item.regular_price || 0),
                    };
                }
    
                // Return item unchanged if no match
                return item;
            }),
        }));
    };
    

    const decreamentQuantity = (uid, isVariable = false) => {
        console.log("In decrement section:", uid, isVariable);
        setCartProducts((prevCart) => ({
            ...prevCart,
            products: prevCart.products.map((item) => {
                console.log(item, "here is item to decrease");
    
                // Check if it's a variable product and decrement based on variation_uid
                if (isVariable && item.variation_uid === uid) {
                    console.log("Decrementing variable product");
                    return {
                        ...item,
                        quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
                    };
                }
    
                // For simple products, decrement based on product_uid
                if (!isVariable && item.product_uid === uid) {
                    console.log("Decrementing simple product");
                    return {
                        ...item,
                        quantity: item.quantity - 1 > 0 ? item.quantity - 1 : 0,
                    };
                }
    
                // Return item unchanged if no match
                return item;
            }),
        }));
    };
    

    // Calculate total orders price
    const calculateTotalPrice = () => {
        if (!Array.isArray(cartProducts.products)) {
            console.error("Invalid Array", cartProducts);
            return { total: 0, savings: 0 };
        }
    
        let total = 0;
        let savings = 0;
    
        cartProducts.products.forEach(item => {
            const regularPrice = parseFloat(item.regular_price) || 0;
            const salePrice = item.sale_price !== "0" ? parseFloat(item.sale_price) : regularPrice;
            const quantity = item.quantity || 1;
            const isProtectedValue = isCartProtected? 0: (item.is_protected===0?0:eachProtectionValue);

    
            // Calculate total price
            total += (salePrice * quantity)+isProtectedValue;
    
            // Calculate savings
            savings += (regularPrice - salePrice) * quantity;
        });
       console.log(total,savings,(isProfessionalAssembly?professionalAssemblyValue:0),(isCartProtected?totalProtectionValue:0),"here uis total")
        setSubTotal(total+ (isCartProtected?totalProtectionValue:0)+(isProfessionalAssembly?professionalAssemblyValue:0));
    
        // Assuming you have a state or method to update the savings
        setSavings(savings);
    };
    
    

    useEffect(() => {
        calculateTotalPrice();
    }, [cartProducts]);



    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                removeFromCart,
                increamentQuantity,
                decreamentQuantity,
                calculateTotalPrice,
                addSingleProduct,
                subTotal,
                taxValue,
                deliveryCharges,
                grandValue,
                resetCart,
                addSingleProtection,
                removeProtection,
                isCartProtected,
                isProfessionalAssembly,
                handleCartProtected,
                handleCartAssembly,
                addToCart0,
                cartProducts,
                eachProtectionValue,setEachProtectionValue,
                savings, setSavings,
                totalProtectionValue,setTotalProtectionValue,
                professionalAssemblyValue,setProfessionalAssemblyValue
            }
        }>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext);