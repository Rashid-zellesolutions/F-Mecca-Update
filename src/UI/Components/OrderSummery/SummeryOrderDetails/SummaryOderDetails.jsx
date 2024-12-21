import React from 'react'
import './SummaryOrderDetails.css';

const SummaryOderDetails = ({productName, productTotalPrice, productId, quantity}) => {

    const totalPrice = productTotalPrice * quantity
    const formedTotalPrice = totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }); 
  return (
    <>
        <div key={productId} className='summery-orders-and-price'>
            <div className='summery-orders'>
                <p>{productName}</p>
                <div className='order-under-line-div'>
                    <div className='order-under-line'></div>
                </div>
            </div>
            <p>{formedTotalPrice}</p>
        </div>
        <div className='dektop-order-and-price'>
            <div className='desktop-orders'>
                <p>{productName}</p>
                <div className='desktop-order-under-line-div'>
                    <div className='desktop-order-under-line'></div>
                </div>
            </div>
            <p>{formedTotalPrice}</p>
        </div>
    </>
  )
}

export default SummaryOderDetails
