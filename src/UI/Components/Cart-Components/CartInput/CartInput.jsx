import React from 'react'
import './CartInput.css';

const CartInput = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder}  />
  )
}

export default CartInput
