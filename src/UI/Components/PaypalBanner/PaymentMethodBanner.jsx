import React from 'react'
import './PaymentMethodBanner.css';
import PaypalBannerOne from '../../../Assets/to-be-change/download 51.png';
import PaypalBannerTwo from '../../../Assets/to-be-change/download 52.png';

const PaymentMethodBanner = () => {
  return (
    <div className='paypal-banner-container'>
      <img src={PaypalBannerOne} alt="paypal banner" />
      <img src={PaypalBannerTwo} alt="paypal banner two" />
    </div>
  )
}

export default PaymentMethodBanner
