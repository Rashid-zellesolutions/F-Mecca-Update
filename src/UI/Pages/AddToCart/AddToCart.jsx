import React from 'react'
import './AddToCart.css'
import CartMainImage from '../../Components/Cart-Components/CartMainImage/CartMainImage'
import CartProducts from '../../Components/Cart-Components/Cart-Products/CartProducts'

const AddToCart = () => {
  return (
    <div>
        <CartMainImage />
        <CartProducts />
    </div>
  )
}

export default AddToCart
