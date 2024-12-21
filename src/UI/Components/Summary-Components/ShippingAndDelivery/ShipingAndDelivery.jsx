import React from 'react'
import './ShippingAndDelivery.css'

const ShipingAndDelivery = () => {
  return (
    <div className='shipping-and-delivery-main'>
        <div className='shipping-and-delivery-heading'>
            <h3>Shipping / Delivery</h3>
        </div>
        <div className='shipping-and-delivery-details'>
            <h3>Delivery Address</h3>
            <div className='shipping-and-delivery-details-sec'>
                <p>Rashid Ali</p>
                <p>Bhittai Colony S.I.T.E Area Kotri</p>
            </div>
            <h3>Contact Info</h3>
            <div className='shipping-and-delivery-details-sec'>
                <p>rashidpanhwer8@gmail.com</p>
                <p>(012)-234-5678</p>
            </div>
            <h3>Bobtastic Delivery</h3>
            <div className='shipping-and-delivery-details-sec'>
                <p>White glove delivery</p>
                <p>1 of 1: to be scheduled</p>
            </div>
        </div>
    </div>
  )
}

export default ShipingAndDelivery
