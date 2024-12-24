import React, { useState, useEffect } from 'react'
import './DealCard.css';
import fireIcon from '../../../Assets/icons/fire-icon.png';
import dealProductImage from '../../../Assets/images/deal-item-img.png';
import starIcon from '../../../Assets/icons/Star 19.png';
import tagLogo from '../../../Assets/Logo/small-logo.png';
import whiteCart from '../../../Assets/icons/white-cart.png';
import blactCart from '../../../Assets/icons/cart-black.png';
import twoArrow from '../../../Assets/icons/combined-arrow-icon.png';
import heartIcon from '../../../Assets/icons/red-heart-without-circle.png'

const DealCard = () => {
    const [isCartHovered, setIsCartHovered] = useState(false);
    const starData = [
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
    ]

    const handleMouseHoverIn = () => {
        setIsCartHovered(true);
    }
    const handleMouseHoverLeave = () => {
        setIsCartHovered(false);
    }

    // State to hold the remaining time
    const targetDate = '2024-09-07T21:00:59';
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Function to calculate time left
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference <= 0) {
                // Time is up
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        // Initial calculation
        calculateTimeLeft();

        // Update the timer every second
        const interval = setInterval(calculateTimeLeft, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [targetDate]);

  return (
    <div className='deal-card-main-div'>
        <div className='deal-card-containt-section'>
        <div className='deal-card-left-section'>
            <div className='deal-card-sale-banner'>
                <button>-12%</button>
            </div>
            <div className='deal-card-product-image'>
                <img src={dealProductImage} alt='img' />
            </div>
            <div className='deal-card-stock-or-not'>
                <span className='available'>
                    <p>Available:</p>
                    <p>50</p>
                </span>
                <span className='sold-out'>
                    <p>Sold:</p>
                    <p>0</p>
                </span>
            </div>
        </div>
        <div className='deal-card-section-right'>
            <div className='deal-card-rating-section'>
                {starData.map((item, index) => {
                    return <img key={index} src={item.icon} alt='star' />
                })}
                <p>(200)</p>
            </div>
            <div className='deal-card-product-name'>
                <h3>Stevie Charcoal 87'' Sofa & Chair</h3>
            </div>
            <div className='deal-card-price'>
                <del>$ 199.00</del>
                <p>$ 1,599.00</p>
            </div>
            <div className='deal-card-brand-div'>
                <h3>Brand:</h3>
                <div className='deal-card-brand-tag'>
                    <img src={tagLogo} alt='tag' />
                </div>
            </div>
            <div className='deal-card-desc'>
                <p>The New Jersey Sectional with Pullout Bed and Left-Arm-Facing The New Jersey Sectional with Pullout Bed and Left-Arm-Facing The New 
                    Jersey Sectional with Pullout Bed and Left-Arm-Facing The New Jersey Sectional with Pullout Bed and Left-Arm-Facing .........</p>
            </div>
            <div className='deal-card-add-to-cart-section'>
                <button className='deal-card-add-to-cart-btn' onMouseEnter={handleMouseHoverIn} onMouseLeave={handleMouseHoverLeave}>
                    <img src={isCartHovered ? whiteCart : blactCart} alt='cart' />
                    Add to cart
                </button>
                <span>
                    <img src={heartIcon} alt='heart' />
                </span>
                <span>
                    <img src={twoArrow} alt='two-arrow' />
                </span>
            </div>
        </div>
        </div>
        <div className='deal-card-footer'>
            <div className='deal-card-make-it-hurry'>
                <img src={fireIcon} alt='fire' />
                <h3>Hurry Up!</h3>
            </div>
            <div className='deal-card-end-timer'>
                <p>Ends in:</p>
                <button>
                    {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
                </button>
            </div>
        </div>
    </div>
  )
}

export default DealCard
