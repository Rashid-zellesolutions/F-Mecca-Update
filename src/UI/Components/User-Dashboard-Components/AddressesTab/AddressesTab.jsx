import React, { useState } from 'react'
import './AddressesTab.css';
import editIcon from '../../../../Assets/icons/edit.png';

const AddressesTab = () => {
  const [billingNameAndAddress, setBillingNameAndAddress] = useState({
    name: 'Rashid Ali Panhwar',
    billingAddress: 'Tedsek sk no 344, 12737, New York, 19134'
  })
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBillingData, setUpdatedBillingData] = useState({ ...billingNameAndAddress })
  const handleEditBillingAddress = () => {
    setIsEditing(!isEditing)
  }
  const handleBillingDataChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBillingData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSave = () => {
    setBillingNameAndAddress(updatedBillingData);
    setIsEditing(false)
  }

  // Shipping Address 
  const [shippingAddress, setShippingAddress] = useState({
    name: 'Rashid Ali Panhwar',
    shippingAddress: 'Bhittai colony S.I.T.E area kotri'
  })
  const [isShipppingEdit, setIsShippingEdit] = useState(false);
  const [updatedShippingAddress, setUpdatedShippingAddress] = useState({ ...shippingAddress });
  const handleShippingEdit = () => {
    setIsShippingEdit(!isShipppingEdit);
  }
  const handleShippingDataChange = (e) => {
    const { name, value } = e.target;
    setUpdatedShippingAddress((prev) => ({ ...prev, [name]: value }));
  }
  const handleSaveShipping = () => {
    setShippingAddress(updatedShippingAddress);
    setIsShippingEdit(false);
  }
  return (
    <div className='addresses-main-container'>
      <p>The following addresses will be used on checkout page by default</p>
      <div className='billing-and-shipping-addresses'>
        <div className='user-billing-address'>
          <div className='billing-address-details'>
            <div className='title-and-edit-icon'>
              <h3>Billing Address</h3>
              <img src={editIcon} alt='edit icon' onClick={handleEditBillingAddress} />
            </div>
            <p>{billingNameAndAddress.name}</p>
            <p>{billingNameAndAddress.billingAddress}</p>
          </div>
          {
            isEditing && <div className='edit-billing-address'>
              <h3>Edit Billing Address</h3>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={updatedBillingData.name}
                onChange={handleBillingDataChange}
              />
              <input
                type='text'
                name='billingAddress'
                placeholder='address'
                value={updatedBillingData.billingAddress}
                onChange={handleBillingDataChange}
              />
              <div className='save-new-billing-address-btn'>
                <button onClick={handleSave}>Save</button>
              </div>
            </div>
          }
        </div>

        <div className='user-billing-address'>
          <div className='billing-address-details'>
            <div className='title-and-edit-icon'>
              <h3>Shipping Address</h3>
              <img src={editIcon} alt='edit icon' onClick={handleShippingEdit}/>
            </div>
            <p>{shippingAddress.name}</p>
            <p>{shippingAddress.shippingAddress}</p>
            {/* <p>12737</p>
            <p>New York, 19134</p> */}
          </div>
          {
            isShipppingEdit && <div className='edit-billing-address'>
              <h3>Billing Address</h3>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={updatedShippingAddress.name}
                onChange={handleShippingDataChange}
              />
              <input
                type='text'
                name='shippingAddress'
                placeholder='address'
                value={updatedShippingAddress.shippingAddress}
                onChange={handleShippingDataChange}
              />
              <div className='save-new-billing-address-btn'>
                <button onClick={handleSaveShipping}>Save</button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AddressesTab
