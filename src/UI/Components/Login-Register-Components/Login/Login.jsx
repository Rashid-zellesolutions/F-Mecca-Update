import React from 'react'
import './Login.css'

const Login = ({signupclicked}) => {
  return (
    <div className={`login-main-section ${signupclicked ? 'slide-log-in-into-left' : ''}`}>
      <div className={`signup-containt-container ${signupclicked ? 'hide-signup-content' : ''}`}>
        <h3 className='signup-sec-main-register-heading'>Register</h3>
        <div className='signup-sec-content'>
            <label className='signup-sec-label'>
                Email
                <input className='login-and-register-input' type='text' placeholder='name@gmail.com' />
            </label>
            <p>A link to set a new password will be sent to your email address.</p>
            <p>
                Your personal data will be used to support your experience throughout 
                this website, to manage access to your account, and for other purposes 
                described in our privacy policy.
            </p>
        </div>
        <button className='signup-sec-register-btn'>Register</button>
      </div>
      <div className={`login-main-container ${signupclicked ? 'show-login-main-section' : ''}`}>
        <h3 className='login-sec-main-heading'>Login</h3>
        <div className='login-sec-id-pass-content'>
            <label>
                Email
                <input className='login-and-register-input' type="text" placeholder='name@gmail.com' />
            </label>
            <label>
                Password
                <input className='login-and-register-input' type="password" placeholder='***' />
            </label>
            <div className='login-sec-forgot-pass'>
                    <input type='checkbox' />
                    <p>Forgotten Password</p>
            </div>
        </div>
        <button className='login-sec-login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Login
