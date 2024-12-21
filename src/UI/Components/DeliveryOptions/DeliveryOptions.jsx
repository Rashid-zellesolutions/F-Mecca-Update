import React from 'react'
import './DeliveryOptions.css';
import deliveryTruck from '../../../Assets/icons/delivery.png';
import location from '../../../Assets/icons/location-red.png'

const DeliveryOptions = () => {
  return (
    <div className='delivery-options-main'>
        <div className='zip-code-section'>
            <p>Delvery options for:</p>
            <h3>06042</h3>
            <h3>Change</h3>
        </div>
        <div className='delivery-details'>
            <img src={deliveryTruck} alt='truck' />
            <div className='delivery-delails-inner'>
                <h3>Home Delivery (+$299)</h3>
                <p>Get it in 3 to 7 day. Schedule delivery in checkout </p>
            </div>
        </div>
        <div className='pick-up-avail-or-not'>
            <img src={location} alt='location' />
            <div className='pick-up-inner'>
                {/* <p>Pickup not available at </p> */}
                {/* <h3>Manchester</h3> */}
                <h3>Local PickUp</h3>
            </div>
        </div>
    </div>
  )
}

export default DeliveryOptions
