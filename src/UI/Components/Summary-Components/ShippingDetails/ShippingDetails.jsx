import React, { useState } from 'react'
import './ShippingDetails.css';
import ShippingForm from '../ShippingForm/ShippingForm';

const ShippingDetails = ({userInfoPayload}) => {

  return (
    <div className='shipping-main-container'>
        <h3>Shipping Details</h3>
        <ShippingForm billingDetails={userInfoPayload} />
    </div>
  )
}

export default ShippingDetails
