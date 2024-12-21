import React from 'react'
import './FirstToKnow.css'
import { Link } from 'react-router-dom'

const FirstToKnow = () => {
  return (
    <div className='first-to-know-main-container'>
      <h3 className='first-to-know-main-heading'>First To Know</h3>
      <div className='first-to-know-email-button-and-details'>
        <p className='first-to-know-second-heading'>Join our mailing list</p>
        <div className='first-to-know-emal-btn'>
            <input 
                type='text' 
                placeholder='Email Address...' 
                className='first-to-know-email-input'
            />
            <button className='first-to-know-btn'>Sign up</button>
            <span className='first-to-know-privacy-policy'>By signing up you to our <Link className='first-to-know-link'>Privacy Policy</Link> and <Link className='first-to-know-link'>Terms of use</Link></span>
        </div>
      </div>
    </div>
  )
}

export default FirstToKnow
