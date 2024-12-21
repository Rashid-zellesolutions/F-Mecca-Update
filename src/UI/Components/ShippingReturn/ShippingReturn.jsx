import React from 'react'
import './ShippingReturn.css';
import pinkTruck from '../../../Assets/icons/pink-trunck-icon.png';
import returnPolicyIcon from '../../../Assets/icons/return-policy-icon.png';
import { Link } from 'react-router-dom';

const ShippingReturn = () => {
  return (
    <div className='shipping-return-main-container'>
      <h3>Shipping & Returns</h3>
      <div className='stock-shipping-and-return-section'>
        <div className='stock-or-out-of-stock-section'>
            <h3>This Item is Out of Stock</h3>
            <p>back in stock Dec 23 2024</p>
        </div>
        <div className='shipping-section'>
            <img src={pinkTruck} alt='truck' />
            <div className='shipping-details'>
              <h3>Shipping</h3>
              <p>Your order means a lot to us. That’s why we offer fast,safe and reliable delivery options for every item.</p>
              <Link>Shipping Policy</Link>
            </div>
        </div>
        <div className='return-policy-section'>
          <img src={returnPolicyIcon} alt='return policy' />
          <div className='return-policy-details'>
            <h3>30-Day Return</h3>
            <p>Not loving it? We offer returns for most items within 30days of delivery for a refund or store credit.</p>
            <Link>30 Days Return Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingReturn
