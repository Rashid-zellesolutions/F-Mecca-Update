import React, { useState } from 'react'
import './OrderSummery.css'
import userIcon from '../../../Assets/icons/user-icon.png';
import orderIcon from '../../../Assets/icons/order-detail-icon.png'
import rightArrow from '../../../Assets/icons/right-arrow-white.png'
import mapImage from '../../../Assets/Furniture Mecca/Cart Page/map-image.png'
import tickMarkBig from '../../../Assets/icons/tick-mark-big.png';
import tickMarkSmall from '../../../Assets/icons/tick-mark-small.png';
import arrowUp from '../../../Assets/icons/arrow-up-white.png';
import arrowDown from '../../../Assets/icons/arrow-down-white.png'
import whiteCircle from '../../../Assets/icons/empty-circle-white.png';
import { useCart } from '../../../context/cartContext/cartContext';
import SummaryOderDetails from './SummeryOrderDetails/SummaryOderDetails';

const OrderSummeryTwo = ({productName, productPrice}) => {
    const {cart} = useCart()
    const [trackShow, setTrackShow] = useState(true)

    // const [orderPayload, setOrderPayload] = useState({
    //     status: 'pending',
    //     currency: "USD",
    //     billing: {
    //         first_name: "John",
    //         last_name: "Doe",
    //         address_1: "123 Main St",
    //         city: "Anytown",
    //         state: "CA",
    //         postal_code: "90210",
    //         country: "USA",
    //         email: "john.doe@example.com",
    //         phone: "123-456-7890"
    //     },

    //     payment_method: "cash_on_delivery",
    //     items: [],
    //     discount: 10,
    //     tax: 5,
    //     cart_protected: 0,
    //     is_shipping:1,
    //     shipping_cost: 10
    // })

    const handleShowTrack = () => {
        setTrackShow(!trackShow)
    }
    

    const summeryTotal = [
        {name: 'Sub Total', price: '$ 1955'},
        {name: 'Shipping', price: '$ 258' },
        {name: 'Total', price: '$ 1858'}
    ]
  return (
    <>
        <div className='summery-main-container'>
            <div className='summery-heading-div'>
                <h3>Summary</h3>
                <button>&times;</button>
            </div>
            <p className='summery-order-number'>Order # 123456</p>
            <div className='summery-user-name-and-icon'>
                <img src={userIcon} alt='user' />
                <p>Customer</p>
            </div>
            <div className='summery-user-name-and-number'>
                <div className='summery-user-name'>
                    <h3>Mehmat Aksu</h3>
                    <p>025463827635</p>
                </div>
                <div className='summery-user-address'>
                    <p>
                        Rasimpasa Mah. Hilataga Cad. no 55: D4 Kidiaym, Istanbul Turkey
                    </p>
                </div>
            </div>
            <div className='summery-order-details-icon'>
                <img src={orderIcon} alt='order icon' />
                <p>Order Details</p>
            </div>
            <div className='summery-orders-div'>
                {cart.map((item, index) => (
                    <SummaryOderDetails 
                        productId={item.product.id}
                        productName={item.product.productTitle}
                        productTotalPrice={item.product.priceTag}
                        quantity={item.quantity}
                    />
                    // <div className='summery-orders-and-price'>
                    // <div className='summery-orders'>
                    //         <p>{item.product.productTitle}</p>
                    //         <div className='order-under-line-div'>
                    //             <div className='order-under-line'></div>
                    //         </div>
                    //     </div>
                    //     <PriceTag price={item.product.priceTag} />
                    // </div>
                ))}
            </div>
            <div className='summery-total-price'>
                {summeryTotal.map((item, index) => (
                    <div className='summer-total'>
                        <p>{item.name}</p>
                        <h3>{item.price}</h3>
                    </div>    
                ))}
            </div>
            <div className='summery-contact-use'>
                <div className='summery-problame-and-contact'>
                    <p>Do you have a problem with your order?</p>
                    <h3>Contact us</h3>
                </div>
            </div>
            <div className='return-home-btn'>
                <button>Return Home 
                    <img src={rightArrow} alt='right' />
                </button>
            </div>
        </div>
        <div className='desktop-summery-main-container'>
                <div className='desktop-summery-main-div'>
                    <h3>Summary</h3>
                    <p>Order # 123456</p>
                    <div className='desktop-customer-details'>
                        <img src={userIcon} alt='user' />
                        <p>Customer</p>
                    </div>
                    <div className='desktop-user-and-address'>
                        <div className='desktop-user-and-number'>
                            <h3>Mehmat Aksu</h3>
                            <p>025463827635</p>
                        </div>
                        <p>
                            Rasimpasa Mah. Hilataga Cad. no 55: D4 Kidiaym, Istanbul Turkey
                        </p>
                    </div>
                    <div className='desktop-order-heading'>
                        <img src={orderIcon} alt='icon' />
                        <p>Order Details</p>
                    </div>
                    <div className='desktop-order-details-main'>
                        {cart.map((items, index) => (
                            <SummaryOderDetails 
                                productId={items.product.id}
                                productName={items.product.productTitle}
                                productTotalPrice={items.product.priceTag}
                                quantity={items.quantity}
                            />
                            // <div className='dektop-order-and-price'>
                            //     <div className='desktop-orders'>
                            //         <p>{items.product.productTitle}</p>
                            //         <div className='desktop-order-under-line-div'>
                            //             <div className='desktop-order-under-line'></div>
                            //         </div>
                            //     </div>
                            //     <PriceTag price={items.product.priceTag} />
                            // </div>
                        ))} 
                    </div>
                    <div className='desktop-price-total-div'>
                        {summeryTotal.map((item, index) => (
                            <div className='desktop-total'>
                                <p>{item.name}</p>
                                <h3>{item.price}</h3>
                            </div>
                        ))}
                    </div>
                    <div className='desktop-contact-us'>
                        <p>Do you have a problem with your order?</p>
                        <h3>Contact us</h3>
                    </div>
                </div>
                <div className='desktop-order-track'>
                    <div className='order-placed-main-container'>
                        <div className='order-track-heading-secton'>
                            <div className='tick-and-heading'>
                                <img src={tickMarkBig} alt='tick big' />
                                <h3>Your Order has Been Placed</h3>
                            </div>
                            <button className='togle-order-track-btn' onClick={handleShowTrack}>
                                <img src={arrowDown} alt='arrow down' className={`${trackShow ? 'rotate-up' : 'rotate-down'}`} />
                            </button>
                        </div>
                        <div className={`order-track-steps-main ${trackShow ? 'show-track' : ''}`}>
                            <div className={`order-track-steps ${trackShow ? 'show-order-track' : ''}`}>
                                <img src={tickMarkSmall} alt='circle' />
                                <div className='step-line'></div>
                                <img src={whiteCircle} alt='circle' />
                                <div className='step-line'></div>
                                <img src={whiteCircle} alt='circle' />
                            </div>
                            
                        </div>
                    </div>
                    <div className='return-home-btn-div'>
                        <button>
                            Return Home
                            <img src={rightArrow} alt='right' />
                        </button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default OrderSummeryTwo
