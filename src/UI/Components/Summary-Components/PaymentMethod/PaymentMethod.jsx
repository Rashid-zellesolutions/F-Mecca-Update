import React, { useEffect, useState } from 'react'
import './PaymentMethod.css';
import paypalLogo from '../../../../Assets/Logo/paypal-logo.png';
import paypalFullLogo from '../../../../Assets/Logo/paypal-full-logo.png';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import venmaLogo from '../../../../Assets/icons/venma.png';
import cardIcon from '../../../../Assets/icons/card-icon.png'
import { useOrder } from '../../../../context/orderContext/orderContext';
import { useMyOrders } from '../../../../context/orderContext/ordersContext';
import { Link } from 'react-router-dom';

const PaymentMethod = ({handleSubmitOrder}) => {
  
  // const {handleTabOpen, handleClickTop} = useMyOrders()
  const [selectedLabel, setSelectedLabel] = useState('')
  const {setOrderPayload} = useMyOrders()
  const handleSelectedLabel = (method) => {
    console.log(method, "selected method");
    setSelectedLabel(method);
    setOrderPayload((prev) => ({
        ...prev,
        payment_method: method
    }));
};


  const {addOrder} = useOrder()
  const handleOnClick = () => {
    addOrder('payment_method', 'cash delivery')
  }

  const paypalBtnOptions = [
    {name: 'Pay with', icon: paypalFullLogo, bgColor: '#F2BA36', textColor: '#000'},
    {name: 'Pay with', icon: venmaLogo, bgColor: '#008CFF', textColor: '#fff'},
    {logoBefore: paypalLogo, name: 'Pay Later', bgColor: '#F2BA36', textColor: '#000'},
    {logoBefore: cardIcon, name: 'Debit or Credit Card', bgColor: '#595959', textColor: '#fff'}
  ]

  return (
    <div className='payment-method-main-container'>
        <div className='payment-method-head-container' onClick={handleOnClick}>
            <img src={paypalLogo} alt='logo' />
            <img src={paypalFullLogo} alt='full logo' />
            <p>As low as $377.89/month. <Link>Learn more</Link></p>    
        </div>
        <div className='payment-types-outer-container'>
          <PaymentOptions onSelectedLabel={handleSelectedLabel} />
          <div className='payment-terms-and-procced-btn'>
              <div className='payment-term-agree'>
                <p>
                  Your personal data will be used to process your order, support your experience throughout this website, 
                  and for other purposes described in our privacy policy.
                </p>
                <div className='terms-agree'>
                    <input type='checkbox' id='agree-terms' />
                    <label for='agree-terms'>I have read & agreed to the website <Link>terms and conditions</Link></label>
                </div>
              </div>
              <div className={`procced-btn-div ${selectedLabel === 'Paypal' ? 'hide-proced' : ''}`}  onClick={handleSubmitOrder} >
                <button>
                  Procced with {selectedLabel}
                </button>
              </div>
              <div className={`paypal-btns-option ${selectedLabel === 'Paypal' ? 'show-paypal-btns' : ''}`}>
                  {paypalBtnOptions.map((items, index) => (
                    <button style={{backgroundColor: items.bgColor, border: items.bgColor, color: items.textColor}}>
                      {items.logoBefore ? <img src={items.logoBefore} alt='icon before' /> : <></>}
                      {items.name}
                      {items.icon ? <img src={items.icon} alt='icon after' /> : <></>}
                    </button>
                  ))}
              </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentMethod
