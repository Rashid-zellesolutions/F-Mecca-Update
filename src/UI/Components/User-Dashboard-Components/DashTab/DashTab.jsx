import React from 'react'
import './DashTab.css';

const DashTab = () => {
  return (
    <div className='dash-tab-main-container'>
        <span className='dash-user-greetings'>
            Hello
            <strong>Rashid Ali</strong>
        </span>
        <span className='dash-user-can-do-details'>
            From your account t  you can view your <strong> Recent Orders, </strong> 
            manage your <strong> Shipping & Billing Addresses, </strong> edit your <strong> Password & Account Details </strong>
        </span>
    </div>
  )
}

export default DashTab
