import React, { useState } from 'react'
import './AccountDetailsTab.css';

const AccountDetailsTab = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: ''
  })
  const [updatedUserDetails, setUpdatedUserDetails] = useState({...userDetails})
  const handleChangeUserDetails = (e) => {
    const {name, value} = e.target;
    setUpdatedUserDetails((prev) => ({...prev, [name]: value}))
  }
  const handleUpdateUserDetails = () => {
    setUserDetails(updatedUserDetails)
    console.log("updated user details", updatedUserDetails)
  }
  return (
    <div className='account-details-main-section'>
        <div className='user-details-edit-section'>
            <div className='user-first-and-last-name'>
              <label className='first-and-last-name-label'>
                First Name 
                <input 
                  type='text' 
                  name='firstName' 
                  placeholder='First Name' 
                  value={updatedUserDetails.firstName} 
                  onChange={handleChangeUserDetails}
                />
              </label>
              <label className='first-and-last-name-label'>
                Last Name 
                <input 
                  type='text' 
                  name='lastName' 
                  placeholder='Last Name' 
                  value={updatedUserDetails.lastName} 
                  onChange={handleChangeUserDetails}
                />
              </label>
            </div>
            <label className='displayed-name-label'>
                Display Name 
                <input 
                  type='text' 
                  name='displayName' 
                  placeholder='Display Name' 
                  value={updatedUserDetails.displayName} 
                  onChange={handleChangeUserDetails}
                />
                <p>this will be how your name will be displayed in the account sections & in reviews</p>
              </label>
              <label className='displayed-name-label'>
                Email 
                <input 
                  type='text' 
                  name='email' 
                  placeholder='Email' 
                  value={updatedUserDetails.email} 
                  onChange={handleChangeUserDetails}
                />
              </label>
              <div className='save-user-details-btn-div'>
                <button onClick={handleUpdateUserDetails}>Edit</button>
              </div>
        </div>
        <div className='change-password-section'>
          <h3>Change Password</h3>
          <label className='password-change-input'>
            Current Password(Leave blank to leave unchanged)
            <input type='password' placeholder='***' />
          </label>
          <label className='password-change-input'>
            New Password(Leave blank to leave unchanged)
            <input type='password' placeholder='***' />
          </label>
          <div className='password-save-btn'>
            <button>Save</button>
          </div>
        </div>
    </div>
  )
}

export default AccountDetailsTab
