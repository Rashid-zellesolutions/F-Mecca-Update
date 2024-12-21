import React from 'react'
import './ShippingAndDelivery.css';
import storeIcon from '../../../Assets/icons/store-icon.png';

const ShippingAndDelivery = () => {
    const shippingWareHouses = [
        {img: storeIcon, warehouse: `101 E. Venango Street Philadelphia, PA 19134`},
        {img: storeIcon, warehouse: `Upper Darby, Philadelphia`},
        {img: storeIcon, warehouse: `Penn st, Reading`},
        {img: storeIcon, warehouse: `W Hunting Park Ave, Philadelphia`},
        {img: storeIcon, warehouse: `Baltimore Ave, Lansdowne`},
        {img: storeIcon, warehouse: `Olden Ave, Ewing Township`},
        {img: storeIcon, warehouse: `Lancaster Ave, Philadelphia`},
        {img: storeIcon, warehouse: `Delmar Dr, Folcroft`},
        {img: storeIcon, warehouse: `W. Brookdale St, Allentown`},
    ]
  return (
    <div className='shipping-and-delivery-main-container'>
      <div className='shipping-and-delivery-head'>
        <h3 className='shipping-and-delivery-main-heading'>Shipping & Delivery</h3>
        <p>Furniture Mecca offers a delivery service within a 50 mile radius of our Warehouse</p>
        <p>You also have the option to pick-up your purchase from our Philadelphia Warehouse. Please see the Warehouse’s address and hours of operations below.</p>
      </div>
      <div className='shipping-and-delivery-body'>
        <h3 className='shipping-and-detains-warehouses-heading'>Furniture Mecca Warehouses</h3>
        <div className='shipping-and-delivery-warehouses'>
            {shippingWareHouses.map((item, index) => (
                <div className='shipping-detail-warehouse-card'>
                    <img src={item.img} alt='store' />
                    <p>{item.warehouse}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShippingAndDelivery
