import React from 'react'
import './LoginMobileView.css';

const LoginMobileView = ({mobileSignupClicked, handleRegisteView}) => {
  return (
    <div className={`mobile-login-main ${mobileSignupClicked ? 'slide-login-sec-right' : ''}`}>
        <div className='login-sec-signup-btn-div'>
            <p>Don't you have a account?</p>
            <button onClick={handleRegisteView}>Sign up</button>
        </div>
        <div className='mobile-login-sec-inputs'>
            <h3>Login</h3>
            <label className='mobile-login-input-label'>
                Email 
                <input className='login-and-register-input' type='text' placeholder='name@gmail.com' />
            </label>
            <label className='mobile-login-input-label'>
                Password 
                <input className='login-and-register-input' type='text' placeholder='***' />
            </label>
            <div className='mobile-logn-sec-login-btn-div'>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginMobileView
