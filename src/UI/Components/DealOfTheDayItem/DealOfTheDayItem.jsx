import React, { useState } from 'react'
import './DealOfTheDayItem.css';
import fireIcon from '../../../Assets/icons/fire-icon.png';
import dealProductImage from '../../../Assets/images/deal-item-img.png';
import starIcon from '../../../Assets/icons/Star 19.png';
import tagLogo from '../../../Assets/Logo/small-logo.png';
import whiteCart from '../../../Assets/icons/white-cart.png';
import redCart from '../../../Assets/icons/cart2.png';
import twoArrow from '../../../Assets/icons/combined-arrow-icon.png';
import heartIcon from '../../../Assets/icons/red-heart-without-circle.png'

const DealOfTheDayItem = () => {
    const [imageChange, setImageChange] = useState(false);
    const handleImageChage = () => {
        setImageChange(true);
    }

    const handleImagereset = () => {
        setImageChange(false)
    }
    const starData = [
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
        {icon: starIcon},
    ]
    
  return (
    <div className='deal-item-main-div'>
        <div className='deal-item-details'>
            <div className='deal-item-image-div'>
                <div className='deal-item-sale-banner'>
                    <button>-12%</button>
                </div>
                <div className='deal-item-image'>
                    <img src={dealProductImage} alt='deal image' />
                </div>
                <div className='deal-item-stock-or-sold'>
                    <span className='deal-item-available'>
                        <p>Available: </p>
                        <p>50</p>
                    </span>
                    <span className='deal-item-sold'>
                        <p>sold: </p>
                        <p>0</p>
                    </span>
                </div>
            </div>
            <div className='deal-item-details-div'>
                <div className='deal-item-rating'>
                    {starData.map((item, index) => {
                        return <img src={item.icon} alt='icon' />
                    })}
                    <p>(200)</p>
                </div>
                <div className='deal-item-name-and-price'>
                    <p>Stevie Charcoal 87'' Sofa & Chair</p>
                    <span>
                        <p>$199.00</p>
                        <p>$ 1,599.00</p>
                    </span>
                </div>
                <div className='deal-item-brand-tag-div'>
                    <h3>Brand:</h3>
                    <div className='deal-item-brand-tag'>
                        <img src={tagLogo} alt='logo' />
                    </div>
                </div>
                <div className='deal-item-desc-div'>
                    <p>The New Jersey Sectional with Pullout Bed and Left-Arm-Facing .........</p>
                </div>
                <div className='deal-item-cart-option'>
                    <button onMouseEnter={handleImageChage} onMouseLeave={handleImagereset}>
                        <img src={imageChange ? whiteCart : redCart} alt='red cart' />
                        Add To Cart
                    </button>
                    <span>
                        <img src={heartIcon} alt='heart' />
                    </span>
                    <span>
                        <img src={twoArrow} alt='two arrow' />
                    </span>
                </div>
            </div>
        </div>
        {/* deal item card footer */}
        <div className='deal-item-footer'>
            <div className='make-it-hurry-div'>
                <img src={fireIcon} alt='fire'/>
                <h3>Hurry Up!</h3>
            </div>
            <div className='deal-end-timer-div'>
                <p>Ends in:</p>
                <button>
                    201d : 23h : 33m : 20s
                </button>
            </div>
        </div>

    </div>
  )
}

export default DealOfTheDayItem
