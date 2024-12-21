import React from 'react'
import './EmptCart.css';
import emptyCart from '../../../../Assets/icons/empty-cart.png';

const EmptyCart = () => {
  return (
    <div className='empty-cart-main-div'>
        <img src={emptyCart} alt='empty cart' />
        <h3>Your Cart Is <span>Empty!</span></h3>
    </div>
  )
}

export default EmptyCart
