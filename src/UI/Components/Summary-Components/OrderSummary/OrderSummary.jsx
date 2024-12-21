// import React, { useEffect, useState } from 'react'
// import './OrderSummary.css'
// import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';
// import { useCart } from '../../../../context/cartContext/cartContext';
// import { useOrder } from '../../../../context/orderContext/orderContext';
// import axios from 'axios';
// import { url } from '../../../../utils/api';
// import { useMyOrders } from '../../../../context/orderContext/ordersContext';
// import { tab } from '@testing-library/user-event/dist/tab';
// import { useGlobalContext } from '../../../../context/GlobalContext/globalContext';

// const OrderSummary = () => {
    
//     const orderSummeryDetails = [
//         { title: 'Subtotal', price: '$3564' },
//         { title: 'Protection Plane', price: '$3564' },
//         { title: 'White Glove Delivery', price: '$3564' },
//         { title: 'Tax', price: '$3564' },
//     ]

//     // Card title words limit
//     const maxLength = 50;
//     const truncateTitle = (title, maxLength) => {
//         if (title.length > maxLength) {
//             return title.slice(0, maxLength) + '...';
//         }
//         return title;
//     };
//     const formatePrices = (price) => {
//         return Intl.NumberFormat('en-us', {
//             style: 'currency',
//             currency: 'USD'
//         }).format(price)
//     }
//     const { cart, cartProducts, calculateTotalPrice, subTotal, deliveryCharges, taxValue, grandValue, getGrandTotal } = useCart()
//     const { orderPayload, setOrderPayload, addProducts, setShippingLines } = useMyOrders();
//     const { setAllShippingMethods, shippingMethods, setShippingMethods, shippingLoader, setShippingLoader, info, updateLocationData, zipCode, setZipCode, handleInputChange, handleButtonClick, totalTax, calculateTotalTax, getShippingInfo, selectedOption, setSelectedOption, handleChange, getShippingMethods, selectedShippingMethods, setSelectedShippingMethods, grandTotal, CalculateGrandTotal } = useGlobalContext()

//     console.log("cart on review page", cart)
//     const handleClickSave = () => {
//         addProducts(cart)
//         console.log("order payload after adding products", orderPayload)
//     }
//     const [isStarted, setIsStarted] = useState(false);


//     useEffect(() => {
//         // Always fetch lates
//         // Fetch shipping methods if they are available
//         if (shippingMethods) {
//             getShippingMethods(subTotal, shippingMethods['shippingMethods']);
//         } setShippingLines(selectedOption)
//     }, []); // Empty dependency array ensures this runs once when the component mounts

//     useEffect(() => {
//         // Call getShippingMethods whenever subTotal or shippingMethods changes
//         if (shippingMethods) {
//             getShippingMethods(subTotal, shippingMethods['shippingMethods']);
//             setIsStarted(!isStarted);
//         }
//     }, [subTotal, shippingMethods]); // Dependency array for changes in subTotal or shippingMethods

//     useEffect(() => {
//         if (shippingMethods) {
//             getShippingMethods(subTotal, shippingMethods['shippingMethods']);
//         }

//     }, [isStarted])

//     useEffect(() => { setSelectedShippingMethods(null) }, [info])

//     return (
//         <div className='order-summary-main-container'>
//             <h3 className='order-summery-main-heading'>Order Summary</h3>
//             <div className='mobile-view-main-heading'>
//                 <h3>Order Summery</h3>
//                 <p>Edit</p>
//             </div>
//             <div className='order-summary-details'>
//                 <div className='order-summary-selected-products-container'>
//                     {cartProducts?.products?.map((items, index) => (
//                         <div key={items.uid} className='selected-products'>
//                             <div className='selected-single-product'>
//                                 <img src={`${url}${items.image.image_url}`} alt='img' />
//                                 <div className='selected-product-containt'>
//                                     <span className='selected-product-name-and-price'>
//                                         <h3>{truncateTitle(items.name, maxLength)}</h3>
//                                         {items.sale_price === '' ? (
//                                             <p>{formatePrices(items.regular_price)}</p>
//                                         ) : (
//                                             <div style={{ display: 'flex', flexDirection: 'column' }}>
//                                                 <del>{formatePrices(items.regular_price)}</del>
//                                                 <p>{formatePrices(items.sale_price)}</p>
//                                             </div>
//                                         )}

//                                     </span>
//                                     {items?.attributes && items?.attributes.map((item, index) => {
//                                         return (
//                                             <span className='selected-product-color'><p>{item?.options[0].name}</p></span>

//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='products-tax-and-total'>
//                     <span>
//                         <p>Sub Total: </p>
//                         <p>{formatePrices(subTotal)}</p>
//                     </span>
//                     <span>
//                         <p>{`Shipping ${selectedOption ? getShippingInfo(selectedOption)?.taxIncluded : ""}`}</p>
//                         <p>{selectedOption ? getShippingInfo(selectedOption).result : ""}</p>
//                     </span>
//                     <span>
//                         <p>{`Tax (${totalTax?.tax_name})`}</p>
//                         <p>{totalTax ? formatePrices(calculateTotalTax(subTotal, parseFloat(totalTax?.tax_value))) : 0}</p>
//                     </span>
//                     <div className="delivery-option-container">
//                         <p className='delivery-opt-heading' >Delivery Options :</p>
//                         {selectedShippingMethods &&
//                             selectedShippingMethods.map((option) => (
//                                 <label
//                                     key={option.id}
//                                     style={{
//                                         display: "flex",
//                                         flexDirection: 'row',
//                                         alignItems: "flex-start",
//                                         justifyContent: "flex-start",
//                                         margin: "5px 0",
//                                         gap: "10px",
//                                     }}
//                                 >
//                                     <input
//                                         type="radio"
//                                         name="options"
//                                         value={option.id}
//                                         checked={selectedOption?.id === option.id}
//                                         onChange={(e) => handleChange(e, option)} // Pass the `option` object
//                                         style={{
//                                             marginTop: "5px",
//                                             width: 'max-content'
//                                         }}
//                                     />
//                                     <div
//                                         style={{
//                                             display: "flex",
//                                             flexDirection: "column",
//                                             alignItems: "flex-start",
//                                             justifyContent: "center",
//                                         }}
//                                     >
//                                         <p className="delivery-option-container-label">{option.name}</p>
//                                         <p className="delivery-option-container-description">{option.description}</p>
//                                     </div>
//                                 </label>
//                             ))}
//                     </div>
//                 </div>
//                 <div className='selected-product-total'>
//                     <span>
//                         <h3>Total</h3>
//                         <p>{formatePrices(CalculateGrandTotal())}</p>
//                     </span>
//                 </div>
//             </div>
//             <div className='mobile-view-order-summery-details'>
//                 <div className='mobile-view-pricing-details'>
                    
//                 </div>
//                 <div className='mobile-view-single-price'>
//                     <p>Total</p>
//                     <h3>$4900</h3>
//                 </div>
//                 <div className='mobile-view-order-summery-selected-orders'>

//                     <div className='mobile-view-ordered-summery-selected-products'>
                        
//                     </div>
//                 </div>
//                 <div className='mobile-view-order-summery-view-all-products-btn-div'>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OrderSummary


import React, { useEffect, useState } from 'react'
import './OrderSummary.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';
import { useCart } from '../../../../context/cartContext/cartContext';
import { useOrder } from '../../../../context/orderContext/orderContext';
import axios from 'axios';
import { url } from '../../../../utils/api';
import { useMyOrders } from '../../../../context/orderContext/ordersContext';
import { tab } from '@testing-library/user-event/dist/tab';
import { useGlobalContext } from '../../../../context/GlobalContext/globalContext';

const OrderSummary = () => {
    
    const orderSummeryDetails = [
        { title: 'Subtotal', price: '$3564' },
        { title: 'Protection Plane', price: '$3564' },
        { title: 'White Glove Delivery', price: '$3564' },
        { title: 'Tax', price: '$3564' },
    ]

    // Card title words limit
    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };
    const formatePrices = (price) => {
        return Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }
    const { cart, cartProducts, calculateTotalPrice, subTotal, deliveryCharges, taxValue, grandValue, getGrandTotal } = useCart()
    const { orderPayload, setOrderPayload, addProducts } = useMyOrders();
    const { setAllShippingMethods, shippingMethods, setShippingMethods, shippingLoader, setShippingLoader, info, updateLocationData, zipCode, setZipCode, handleInputChange, handleButtonClick, totalTax, calculateTotalTax, getShippingInfo, selectedOption, setSelectedOption, handleChange, getShippingMethods, selectedShippingMethods, setSelectedShippingMethods, grandTotal, CalculateGrandTotal } = useGlobalContext()

    console.log("cart on review page", cart)
    const handleClickSave = () => {
        // addProducts(cart)
        console.log("order payload after adding products", orderPayload)
    }
    const [isStarted, setIsStarted] = useState(false);


    useEffect(() => {
        // Always fetch lates
        // Fetch shipping methods if they are available
        if (shippingMethods) {
            getShippingMethods(subTotal, shippingMethods['shippingMethods']);
        }
    }, []); // Empty dependency array ensures this runs once when the component mounts

    useEffect(() => {
        // Call getShippingMethods whenever subTotal or shippingMethods changes
        if (shippingMethods) {
            getShippingMethods(subTotal, shippingMethods['shippingMethods']);
            setIsStarted(!isStarted);
        }
    }, [subTotal, shippingMethods]); // Dependency array for changes in subTotal or shippingMethods

    useEffect(() => {
        if (shippingMethods) {
            getShippingMethods(subTotal, shippingMethods['shippingMethods']);
        }

    }, [isStarted])

    useEffect(() => { setSelectedShippingMethods(null) }, [info])


    // const taxPrice = getGrandTotal(10, 50)

    // const tax = 10;
    // const grandTotal = calculateTotalPrice(cart) + tax

    return (
        <div className='order-summary-main-container'>
            <h3 className='order-summery-main-heading'>Order Summary</h3>
            <div className='mobile-view-main-heading'>
                <h3>Order Summery</h3>
                <p>Edit</p>
            </div>
            <div className='order-summary-details'>
                <div className='order-summary-selected-products-container'>
                    {cartProducts?.products?.map((items, index) => (
                        <div key={items.uid} className='selected-products'>
                            <div className='selected-single-product'>
                                <img src={`${url}${items.image.image_url}`} alt='img' />
                                <div className='selected-product-containt'>
                                <span className='selected-product-name-and-price'>
                                        <h3>{truncateTitle(items.name, maxLength)}</h3>
                                        {items.sale_price === '' ? (
                                            <p>{formatePrices(items.regular_price)}</p>
                                        ) : (
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <del>{formatePrices(items.regular_price)}</del>
                                                <p>{formatePrices(items.sale_price)}</p>
                                            </div>
                                        )}

                                    </span>

                                    {items?.attributes && items?.attributes.map((item,index)=>{
                        return(
                            <span className='selected-product-color'><p>{item?.options[0].name}</p></span>
                            
                        )
                    })}
                                 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='products-tax-and-total'>
                    <span>
                        <p>Sub Total: </p>
                        <p>{formatePrices(subTotal)}</p>
                    </span>
                    <span>
                        <p>{`Shipping ${selectedOption ? getShippingInfo(selectedOption)?.taxIncluded : ""}`}</p>
                        <p>{selectedOption ? getShippingInfo(selectedOption).result : ""}</p>
                    </span>
                    <span>
                        <p>{`Tax (${totalTax?.tax_name})`}</p>
                        <p>{totalTax ? formatePrices(calculateTotalTax(subTotal, parseFloat(totalTax?.tax_value))) : 0}</p>
                    </span>
                    <div className="delivery-option-container">
                        <p className='delivery-opt-heading' >Delivery Options :</p>
                        {selectedShippingMethods &&
                            selectedShippingMethods.map((option) => (
                                <label
                                    key={option.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        margin: "5px 0",
                                        gap: "10px",
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="options"
                                        value={option.id}
                                        checked={selectedOption?.id === option.id}
                                        onChange={(e) => handleChange(e, option)} // Pass the option object
                                        style={{
                                            marginTop: "5px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <p className="delivery-option-container-label">{option.name}</p>
                                        <p className="delivery-option-container-description">{option.description}</p>
                                    </div>
                                </label>
                            ))}
                    </div>
                </div>
                <div className='selected-product-total'>
                    <span>
                        <h3>Total</h3>
                        <p>{formatePrices(CalculateGrandTotal())}</p>
                    </span>
                </div>
            </div>
            <div className='mobile-view-order-summery-details'>
                <div className='mobile-view-pricing-details'>
                    {/* {orderSummeryDetails.map((items, index) => (
                    <div className='mobile-view-single-price'>
                        <p>{items.title}</p>
                        <h3>{items.price}</h3>
                    </div>
                ))} */}
                </div>
                <div className='mobile-view-single-price'>
                    <p>Total</p>
                    <h3>$4900</h3>
                </div>
                <div className='mobile-view-order-summery-selected-orders'>
                    {/* <h3>{selectedProducts.length} Items</h3> */}
                    <div className='mobile-view-ordered-summery-selected-products'>
                        {/* {selectedProducts.slice(0, showMoreProducts).map((items, index) => (
                        <div key={index} className='mobile-view-selected-single-product'>
                            <img src={items.img} alt='product-img' className='mobile-view-selectedProduct-image' />
                            <div className='mobile-view-order-summery-selected-product-content'>
                                <h3>{items.name}</h3>
                                <div className='mobile-view-selected-order-price-and-quantity'>
                                    <p>Qty: 2</p>
                                    <h3>{items.price}</h3>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    </div>
                </div>
                <div className='mobile-view-order-summery-view-all-products-btn-div'>
                    {/* <button onClick={handleShowMore}>{showMoreProducts > 1 ? 'Show Less' : 'Show More +'}</button> */}
                </div>
            </div>
        </div>
    )
}

export default OrderSummary