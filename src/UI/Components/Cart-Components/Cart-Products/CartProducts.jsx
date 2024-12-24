import React, { useState, useEffect } from 'react'
import './CartProducts.css';
import CartItems from '../Cart-items/CartItems';
import CartPaymnetMethoud from '../CArtAddPaymentMethoud/CartPaymnetMethoud';
import { useCart } from '../../../../context/cartContext/cartContext';
import EmptyCart from '../Empty-Cart/EmptyCart';
import deliveryTruck from '../../../../Assets/icons/delivery.png';
import  locationIcon from '../../../../Assets/icons/location-red.png';
import MobileCart from '../Mobile-Cart/MobileCart';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../../Global-Components/BreadCrumb/BreadCrumb';


const CartProducts = () => {
    const { 
        cart, 
        cartProducts,
        removeFromCart, 
        increamentQuantity, 
        decreamentQuantity, 
        calculateTotalPrice, 
        removeProtection,
        addSingleProtection 
    } = useCart()
    
    calculateTotalPrice(cart)

    const [isOpen, setIsOpen] = useState(false);
    const [checkoutFixed, setCheckoutFixed] = useState(true);

    // const detailsDeta = [
    //     {
    //         title: 'Sub Total', price: formatedPrice(subTotal),
    //     },
    //     {
    //         title: 'Delivery', price: formatedPrice(deliveryCharges)
    //     },
    //     {
    //         title: 'Tax', price: formatedPrice(taxValue)
    //     },
    //     {
    //         title: 'Total', price: formatedPrice(subTotal + deliveryCharges + taxValue)
    //     },
    // ]

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    
    const handleScroll = () => {
        if(window.scrollY > 250){
            setCheckoutFixed(false);
        }
        else{
            setCheckoutFixed(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // const [protectAll, setProtectAll] = useState(false);
    
    const [issingleProtected, setIsSingleProtected] = useState(false);


    const navigate = useNavigate();
    const handleNavigateToCheckoutPage = () => {
        console.log("Cart before adding to order:", cart);
        navigate(`/cart-page/check-out`);
    }

    return (
        <>
            <div className='cart-products-main-container'>
                <div className='cart-products-heading'>
                    <Breadcrumb/>
                    <h3>Products ({cartProducts.products.length})</h3>
                </div>
                <div className={`cart-items ${isOpen ? 'low-width' : ''}`}>
                    {cartProducts.products.length <= 0 && <EmptyCart />}
                    {cartProducts.products.map((items, index) => {
                        return <CartItems
                            key={items.product_uid}
                            attributes={items.attributes}
                            onlyMobile={false}
                            productData={items}
                            issingleProtected={issingleProtected}
                            handleSingleProtected={() => {}}
                            cartIndex={items.product_uid}
                            productsLength={cartProducts.products.length}
                            handleRomoveProduct={() => removeFromCart(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                            cartProductName={items.name}
                            cartPRoductImage={items.image?.image_url}
                            cartProductTitle={items.name}
                            isCartOpen={isOpen}
                            quantity={items.quantity}
                            productTotalPrice={items.total_price}
                            sale_price={items.sale_price}
                            regular_price={items.regular_price}
                            isProtected={items.is_protected}
                            productSubTotal={items.sub_total}
                            handleIncreament={() => increamentQuantity(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1) }
                            handleDecreament={() => decreamentQuantity(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                            removeProtection={() => removeProtection(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                            addProtection={() => addSingleProtection(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                        />
                    })}
                </div>
                <div className='mobile-cart-items'>
                    {cartProducts.products.length <= 0 && <EmptyCart />}
                    {cartProducts.products.map((items, index) => (
                        <MobileCart 
                        key={items.product_uid}
                        attributes={items.attributes}
                        onlyMobile={false}
                        productData={items}
                        issingleProtected={issingleProtected}
                        handleSingleProtected={() => {}}
                        cartIndex={items.product_uid}
                        productsLength={cartProducts.products.length}
                        handleRomoveProduct={() => removeFromCart(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                        cartProductName={items.name}
                        cartPRoductImage={items.image?.image_url}
                        cartProductTitle={items.name}
                        isCartOpen={isOpen}
                        quantity={items.quantity}
                        productTotalPrice={items.total_price}
                        sale_price={items.sale_price}
                        regular_price={items.regular_price}
                        isProtected={items.is_protected}
                        productSubTotal={items.sub_total}
                        handleIncreament={() => increamentQuantity(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1) }
                        handleDecreament={() => decreamentQuantity(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                        removeProtection={() => removeProtection(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                        addProtection={() => addSingleProtection(items.isVariable===1?items.variation_uid:items.product_uid,items.isVariable===1)}
                        />
                    ))}
                </div>
                <div className='mobile-view-cart-order-summery'>
                    <div className='mobile-view-head'>
                        <h3>Order Summery</h3>
                        <span>
                            <p>Deliver to: </p>
                            <p>06402</p>
                        </span>
                    </div>
                    <div className='mobile-view-sub-total-and-protection'>
                        <div className='mobile-sub-total-protection'>
                            <p>Subtotal</p>
                            <p>$31564</p>
                        </div>
                        <div className='mobile-sub-total-protection'>
                            <p>Protection</p>
                            <p>$100</p>
                        </div>
                    </div>
                    <div className='mobile-tax-section'>
                        <p>Tax</p>
                        <p>$15</p>
                    </div>

                    <div className='mobile-delivery-options'>
                        <h3 className='mobile-delivery-option-heading'>Delivery Options:</h3>
                        <div className='mobile-single-delivery-option'>
                            <input type='radio' />
                            <img src={deliveryTruck} alt='delivery-icon' />
                            <div className='mobile-single-delivery-details'>
                                <h3>Bobtastic Delivery: White Glove or threshold</h3>
                                <p>Get it in 3 to 7 day. Schedule delivery in checkout </p>
                            </div>
                        </div>
                        <div className='mobile-single-delivery-option'>
                            <input type='radio' />
                            <img src={locationIcon} alt='delivery-icon' />
                            <div className='mobile-single-delivery-details'>
                                <h3>Pickup not available at Manchester</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${checkoutFixed ? 'mobile-view-total-and-checkout-fixed' : 'mobile-view-total-and-checkout'}`}>
                    <div className='mobile-view-total'>
                        <p>Total</p>
                        <p>$1998.00</p>
                    </div>
                    <button className='mobile-view-checkout-btn' onClick={handleNavigateToCheckoutPage}>
                        Check out
                    </button>
                </div>

                <CartPaymnetMethoud
                    isOpen={isOpen}
                    handleToggle={handleToggle}
                />
            </div>
        </>
    )
}

export default CartProducts
