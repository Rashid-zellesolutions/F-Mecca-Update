import React, { useState } from 'react'
import './CartItems.css';
import { url } from '../../../../utils/api';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/cartContext/cartContext';

// Assets
import minusBtn from '../../../../Assets/icons/minus-white.png';
import plusBtn from '../../../../Assets/icons/plus-white.png';
import closeBtn from '../../../../Assets/icons/close-btn.png';
import plusCharcol from '../../../../Assets/icons/plus.png';
import minusCharcol from '../../../../Assets/icons/minus.png'
import crossBtn from '../../../../Assets/icons/Mask group (1).png'
import rotatedArrow from '../../../../Assets/icons/arrow-rotate-white.png';
import guardIcon from '../../../../Assets/icons/guard-icon.png';
import { IoInformationCircle } from "react-icons/io5";
import check from "../../../../Assets/check.png";

const CartItems = ({
    cartProductName,
    cartPRoductImage,
    cartProductColor,
    cartProductTitle,
    isCartOpen,
    quantity,
    handleRomoveProduct,
    cartIndex,
    handleIncreament,
    handleDecreament,
    attributes,
    sale_price,
    regular_price,
    isProtected,
    removeProtection,
    addProtection
}) => {

    // States and variables
    const {
        eachProtectionValue,
        isCartProtected,
        cartProducts
    } = useCart()

    const [saveForLeter, setSaveForLeter] = useState(false)

    const formatedSalePrice = Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(sale_price)

    const formatedRegularPrice = Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(regular_price)

    const productTotalPrice = sale_price !== "0" ? (sale_price * quantity) + (isCartProtected ? 0 : (isProtected === 1 ? eachProtectionValue : 0)) : (regular_price * quantity) + (isCartProtected ? 0 : (isProtected === 1 ? eachProtectionValue : 0));

    const formatedTotalPrice = Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
    }).format(productTotalPrice)


    const handleSaveForLeter = () => {
        setSaveForLeter(true)
        const timeOut = setTimeout(() => {
            setSaveForLeter(false);
        }, 2000);
    }

    const [isProtectionClicked, setIsProtectionClicked] = useState(isProtected === 0 ? "no-thanks" : "yes-protect");
    const handleProtectOrNotButtonClicked = (value) => {
        setIsProtectionClicked((prevValue) => prevValue === value ? null : value)
    }

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDetails = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>

            <div className='cart-product'>
                <button className='mobile-cart-remove-btn' onClick={() => handleRomoveProduct(cartIndex)}>
                    <img src={closeBtn} alt='close btn' />
                </button>
                <div className='cart-item-name'>
                    <h3>{cartProductName}</h3>
                </div>
                <div className='cart-product-containt'>
                    <div className='cart-item-image'>
                        <img src={`${url}${cartPRoductImage}`} alt='product image' />
                    </div>
                    <div className='cart-product-details'>
                        <p>{cartProductColor}</p>
                        <p>{cartProductTitle}</p>
                        <div className='price-and-count'>
                            <div className='product-count'>
                                <button onClick={handleDecreament}>
                                    <img src={minusBtn} alt='minus' />
                                </button>
                                <p>{quantity}</p>
                                <button onClick={handleIncreament}>
                                    <img src={plusBtn} alt='plus' />
                                </button>
                            </div>
                        </div>
                        <div className='cart-item-actual-price'>
                            <p>{productTotalPrice} </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop view Card */}
            <div className={`desktop-cart-product`}>

                <div className='desktop-cart-product-image'>
                    <img src={`${url}${cartPRoductImage}`} alt='product image' />
                </div>
                <div className='desktop-cart-containt-section'>
                    <button className={`cross-btn ${isCartOpen ? 'hide-cross-btn' : ''}`} onClick={handleRomoveProduct}>
                        <img src={crossBtn} alt='cross' />
                    </button>
                    <div className='desktop-name-and-single-price'>
                        <h3>{cartProductName}</h3>
                        {attributes && attributes.map((item, index) => {
                            return (
                                <p className='desktop-product-extra-info'>{item?.options[0].name}</p>
                            )
                        })}
                        <div className='cart-side-section-price-and-count'>
                            <p><del style={{
                                color: "#989898"
                            }} >{formatedRegularPrice}</del></p>
                            <p>{formatedSalePrice}</p>
                        </div>

                        <div className='desktop-card-protection-div'>
                            <div className='guard-and-heading'>
                                <img effect='blur' src={guardIcon} alt='guard' className='protection-guard-icon' />
                                <div className='guard-title-and-details'>
                                    <div className='guard-title-and-details-head'>
                                        <h3 className='protection-guard-title'>Platinum Elite Furniture</h3>
                                        <IoInformationCircle className='eye_icon' onClick={toggleDetails} />
                                    </div>
                                    <span className='protection-details-and-message'>
                                        <p className='protection-price-message'>
                                            {(cartProducts.is_all_protected === 1 || isProtected === 1) ? "Price shown in summary" : "$99"}
                                        </p>
                                        <div className={`detail-container ${isOpen ? 'open' : ''}`}>
                                            <p className='protection-price-message detail'>
                                                Our Elite Furniture Protection Plan covers accidental stains and damage to your new fabric, leather, and wood (and other hard surfaces) furniture.
                                            </p>
                                            <Link>Details</Link>
                                        </div>
                                    </span>
                                </div>
                            </div>

                            {cartProducts.is_all_protected === 1 ? <div className="protection-all-protected">
                                <img src={check} alt="" srcset="" />
                                <p>Protection Applied</p>
                            </div> : <div className='protection-btns-accept-and-cancel'>
                                <button
                                    className={`protection-buttons protect-no-thanks ${isProtectionClicked === 'no-thanks' ? 'select-not-protection' : ''}`}
                                    onClick={() => { handleProtectOrNotButtonClicked('no-thanks'); removeProtection() }}
                                >
                                    No Thanks
                                </button>
                                <button
                                    className={`protection-buttons protect-yes-protect ${isProtectionClicked === 'yes-protect' ? 'selected-yes-protect' : ''}`}
                                    onClick={() => { handleProtectOrNotButtonClicked('yes-protect'); addProtection() }}
                                >
                                    Yes Protect it
                                </button>
                            </div>}
                        </div>

                    </div>
                    <div className={`desktop-quantity-and-save-for-leter ${isCartOpen ? 'hide-quantity' : ''}`}>
                        <div className='desktop-quantity'>
                            <button onClick={handleDecreament}>
                                <img src={minusCharcol} alt='minus' />
                            </button>
                            <p>{quantity}</p>
                            <button onClick={handleIncreament}>
                                <img src={plusCharcol} alt='plus' />
                            </button>
                        </div>
                    </div>
                    <div className={`desktop-total-price-and-remove-item ${isCartOpen ? 'hide-total-and-remove-item' : ''}`}>
                        <p>{formatedTotalPrice}</p>
                        <button className='save-for-leter' onClick={handleSaveForLeter}>
                            <img src={rotatedArrow} className={`${saveForLeter ? 'arrow-rotate' : ''}`} /> Save For Later
                        </button>
                    </div>
                    <div className={isCartOpen ? 'cart-open-quantity-and-total-price' : 'cart-close-quantity-and-total-price'}>
                        <div className='desktop-quantity'>
                            <button onClick={handleDecreament}>
                                <img src={minusCharcol} alt='minus' />
                            </button>
                            <p>{quantity}</p>
                            <button onClick={handleIncreament}>
                                <img src={plusCharcol} alt='plus' />
                            </button>
                        </div>
                        <p className='cart-open-total-price'>{formatedTotalPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems
