import React, {useState} from 'react'
import './Coupon.css';

const Coupon = () => {
    const [isCouponClicked, setIsCouponClicked] = useState(false);
    const handleCouponClick = () => {setIsCouponClicked(!isCouponClicked)}
    return (
        <div className='coupon-container'>
            <p>Have a coupon? <button onClick={handleCouponClick}>Click Here to enter your coupon</button></p>
            <div className={`coupon-input-main-container ${isCouponClicked ? 'show-coupon-input' : ''}`}>
                <label>if you have a coupon code, please apply it below.</label>
                <div className={`coupon-input-container`}>
                <input type='text' />
                <button>Apply Coupon</button>
                </div>
            </div>
        </div>
    )
}

export default Coupon
