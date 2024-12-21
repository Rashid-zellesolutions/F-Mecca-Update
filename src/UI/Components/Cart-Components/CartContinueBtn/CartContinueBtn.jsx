import React from 'react';
import './CartContinueBtn.css';

const CartContinueBtn = ({text, onclick}) => {
  return (
    <button className='continue-cart-button' onClick={onclick}>
        {text}
    </button>
  )
}

export default CartContinueBtn
