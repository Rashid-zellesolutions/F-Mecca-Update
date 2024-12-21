import React from 'react'
import './NotFound.css';
import maintananceIcon from '../../../Assets/icons/maintanance-icon.png';
import logo from '../../../Assets/Logo/m_logo_360 2.png'

const NotFound = () => {
  return (
    <div className='page-not-found-main-container'>
        <div className='maintanance-gif-div'>
            <img src={maintananceIcon} alt='maintanance icon' />
        </div>
        <div className='error-message-div'>
            <h3 className='something-wrong-text'>Looks like something's off</h3>
            <div className='error-response-div'>
                <p>Our site is temporarily unavailable</p>
                <p>We’re working hard to fix the problem</p>
                <p>and we’ll have the lights back on soon</p>
            </div>
            <h3 className='appreciation-text'>Thank you for your patience and for shopping with us</h3>
        </div>
        <div className='main-logo-div'>
            <img src={logo} alt='logo' />
        </div>
    </div>
  )
}

export default NotFound
