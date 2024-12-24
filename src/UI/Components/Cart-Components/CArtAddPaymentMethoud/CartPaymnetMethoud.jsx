import React, { useState, useEffect } from 'react'
import './CartPaymnetMethoud.css';
import CartContinueBtn from '../CartContinueBtn/CartContinueBtn';
import CartPaymentInfo from '../CartPaymentInfo/CartPaymentInfo';
import CartInput from '../CartInput/CartInput';

const CartPaymnetMethoud = ({ isOpen, handleToggle }) => {

    const [activeBullet, setActiveBullet] = useState(0);
    const [isPaymentTrue, setIsPaymentTrue] = useState(false);

    const handleBulletClick = (index) => {
        setActiveBullet(index);
        setIsPaymentTrue(index === 1);
    };

    useEffect(() => {
        if (!isOpen) {
            setActiveBullet(0);
            setIsPaymentTrue(false);
        }
    }, [isOpen]);

    const [otherBillingChecked, setOtherBillingChecked] = useState(false);
    const handleOtherBilling = (event) => {
        setOtherBillingChecked(event.target.checked);
    }

    const handleCheckedIndex = () => {
        setActiveBullet(1);
        setIsPaymentTrue(true);
    }
    
    return (
        <div className={`slide-div ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={handleToggle}>&times;</button>
            <div className='left-bullets-div'>
                {[0, 1, 3].map((index) => (
                    <div
                        key={index}
                        className={`bullet ${activeBullet === index ? 'active' : ''}`}
                        onClick={() => handleBulletClick(index)}
                    />
                ))}
            </div>
            <div className="content">
                <div className='customer-info'>
                    <h3>Customer information</h3>
                    <CartInput type={'text'} placeholder={'Email'} />
                    <div className='checkbox-div'>
                        <input type='checkbox' id='checkbox' />
                        <label htmlFor='checkbox'>Create Account</label>
                    </div>
                    <div className='first-and-last-name-input-div'>
                        <CartInput type={'text'} placeholder={'First Name'} />
                        <CartInput type={'text'} placeholder={'Last Name'} />
                    </div>
                    <CartInput type={'text'} placeholder={'Address'} />
                    <div className='town-zip-and-state-input-div'>
                        <CartInput type={'text'} placeholder={'Town/City'} />
                        <CartInput type={'text'} placeholder={'Zip Code'} />
                        <CartInput type={'text'} placeholder={'State'} />
                    </div>
                    <div className='checkbox-div'>
                        <input type='checkbox' checked={otherBillingChecked} onChange={handleOtherBilling} />
                        <label>Use a different billing address</label>
                    </div>
                    <div className={`other-billing-address-div ${otherBillingChecked ? 'display-other-billing' : ''}`}>
                        <input type='text' placeholder='Address' />
                        <div className='other-billing-state-and-town'>
                            <CartInput type={'text'} placeholder={'Town/City'} />
                            <CartInput type={'text'} placeholder={'Zip Code'} />
                            <CartInput type={'text'} placeholder={'State'} />
                        </div>
                    </div>
                    <CartInput type={'text'} placeholder={'Contact Number'} />
                </div>
                <CartContinueBtn onclick={handleCheckedIndex} text={'Continue'} />
                {/* Cart Payment Section  */}
                <CartPaymentInfo isPaymentTrue={isPaymentTrue} />
            </div>
        </div>
    )
}

export default CartPaymnetMethoud
