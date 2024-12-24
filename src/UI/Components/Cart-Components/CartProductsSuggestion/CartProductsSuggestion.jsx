import React from 'react'
import './CartProductsSuggestion.css'
import productImage from '../../../../Assets/Furniture Mecca/Cart Page/products/mix-chery-dining-set.jpg';


const CartProductsSuggestion = () => {

    const suggestionCartData = [
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
        {img: productImage, name: "Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat", price: '$120'},
    ]

    const maxLength = 30;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title; 
    };

  return (
    <div className='cart-suggestion-produts'>
        {suggestionCartData.map((item, index) => (
            <div className='cart-suggestion-product-card'>
                <div className='cart-suggestion-product-img'>
                    <img src={item.img} alt='img' />
                </div>
                <div className='cart-suggestion-product-containt'>
                    <h3>{truncateTitle(item.name, maxLength)}</h3>
                    <p>{item.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CartProductsSuggestion
