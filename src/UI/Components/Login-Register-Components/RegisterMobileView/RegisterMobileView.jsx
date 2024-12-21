import React from 'react'
import './RegisterMobileView.css'

const RegisterMobileView = ({ mobileSignupClicked, handleRegisterView }) => {
    return (
        <div className={`mobile-register-main ${mobileSignupClicked ? 'slide-register-left' : ''}`}>
            <div className='mobile-register-top-heading'>
                <p>Already have an account?</p>
                <button onClick={handleRegisterView}>Sign in</button>
            </div>
            <div className='mobile-register-content'>
                <h3 className='mobile-register-heading'>Register</h3>
                <label className='mobile-login-input-label'>
                    Email 
                    <input className='login-and-register-input' type='text' placeholder='name@gmail.com' />
                </label>
                <p>A link to set a new password will be sent to your email address.</p>
                <p>
                    Your personal data will be used to support your experience throughout this website, 
                    to manage access to your account, and for other purposes described in our privacy. 
                </p>
                <button className='mobile-view-register-btn'>Register</button>
            </div>
        </div>
    )
}

export default RegisterMobileView
