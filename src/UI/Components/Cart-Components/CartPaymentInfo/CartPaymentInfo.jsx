import React, { useState, useEffect } from 'react';
import './CartPaymentInfo.css';
import visaCArd from '../../../../Assets/Furniture Mecca/Cart Page/visa-card.png';
import masterCard from '../../../../Assets/Furniture Mecca/Cart Page/master-card.png';
import discoverCArd from '../../../../Assets/Furniture Mecca/Cart Page/discover-card.png';
import americanExpressCard from '../../../../Assets/Furniture Mecca/Cart Page/american-express-card.png'
import { useRef } from 'react';
import CartContinueBtn from '../CartContinueBtn/CartContinueBtn';
import { Link } from 'react-router-dom';

const CartPaymentInfo = ({ isPaymentTrue }) => {

    const [currentCardType, setCurrentCardType] = useState(0);
    // const [prevIndex, setPrevIndex] = useState(currentCardType - 1);
    const [animationDirection, setAnimationDirection] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const headingWidth = containerRef.current.children[currentCardType].offsetWidth;
            const containerWidth = containerRef.current.offsetWidth;
            setAnimationDirection((currentCardType * headingWidth) - (0 * headingWidth));
        }
    }, [currentCardType]);

    // const [isSummaryOpen, setIsSummeryOpen] = useState(false);

    const cardTypes = ['Credit Card', 'Paypal', 'Acima', 'Progressive'];
    const cardIcons = [visaCArd, masterCard, discoverCArd, americanExpressCard]
    
    return (
        <div className={`payment-info-div ${isPaymentTrue ? 'payment-inner-open' : ''}`} >
            <div className='cart-payment-info'>
                <h3>Payment Method</h3>
                <div className='card-types-div' useRef={containerRef}>
                    <div className="indicator" style={{ transform: `translateX(${animationDirection}px)` }}></div>
                    {cardTypes.map((items, index) => (
                        <div className={currentCardType === index ? 'card-name-div' : ''}>
                            <h3 key={index} className={`${currentCardType === index ? 'active-card-type' : ''}`} onClick={() => setCurrentCardType(index)}>{items}</h3>
                        </div>
                    ))}
                </div>
                <div className='cards-images-type-div'>
                    <p>Select Card Type</p>
                    <div className='cards-images'>
                        {cardIcons.map((img, index) => (
                            <img src={img} alt='img' />
                        ))}
                    </div>
                </div>
                <div className='cart-payment-inputs'>
                    <label className='input-type-name'>
                        Name
                        <input type='text' placeholder='jen jiang' />
                    </label>
                    <label className='input-type-name'>
                        Card Number
                        <input type='text' placeholder='1234 1234 1234 1234' />
                    </label>
                    <div className='expire-and-pin-div'>
                        <label className='input-type-name'>
                            Card Number
                            <input type='text' placeholder='1234 1234 1234 1234' />
                        </label>
                        <label className='input-type-name'>
                            Card Number
                            <input type='text' placeholder='1234 1234 1234 1234' />
                        </label>
                    </div>
                </div>
            </div>
            <Link to={'/summery-page'}>
                <CartContinueBtn text={'Continue'} />
            </Link>
        </div>
    )
}

export default CartPaymentInfo
