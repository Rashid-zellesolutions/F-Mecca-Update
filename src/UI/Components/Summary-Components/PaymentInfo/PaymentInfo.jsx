import React from 'react'
import './PaymentInfo.css';
import { useOrder } from '../../../../context/orderContext/orderContext';

const PaymentInfo = () => {
  const {billingData, setBillingData, handleValueChange} = useOrder();
  return (
    <div className='payment-info-main-container'>
        <div className='payment-info-heading'>
            <h3>Payment Info</h3>
        </div>
        <div className='payment-info-details'>
            <h3>Billing Address</h3>
            <div className='payment-info-single-details'>
                <p>Rashid Ali</p>
                <p>Bhittai Colony S.I.T.E Area Kotri</p>
            </div>
            <h3>Payment</h3>
            <p className='affirim-type-payment'>Affirim Pay in 4</p>
            <h3>$3163.93</h3>
        </div>
    </div>
  )
}

export default PaymentInfo
