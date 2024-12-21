import React from 'react'
import './PaymentMethodTab.css';
import addBtn from '../../../../Assets/icons/add-charcol.png';
import reminderIcon from '../../../../Assets/icons/reminder.png';

const PaymentMethodTab = () => {
  return (
    <div className='payment-method-main-section'>
      <div className='reminder-container'>
        <img src={reminderIcon} alt='reminder' />
        <p>No Saved Methods Found</p>
      </div>
      <div className='add-payment-method'>
        <img src={addBtn} alt='add-btn' />
        <p>Add Payment Method</p>
      </div>
    </div>
  )
}

export default PaymentMethodTab
