import React, { useState } from 'react'
import './Register.css'
import registerIcon from '../../../../Assets/Furniture Mecca/login-register/5564823 1.png'

const Register = ({signinClicked, handleBtnClicked}) => {
    // const [signinClicked, setSigninClicked] = useState(false);
    // const handleSigninSlide = () => {
    //     setSigninClicked(!signinClicked);
    // }
  return (
    <div className={`register-main-container ${signinClicked ? 'register-section-slide-to-left' : ''}`}>
        <img src={registerIcon} alt='registration icon' />
        <h3 className='register-have-an-account'>{signinClicked ? "Dont't have an account" : 'Already have an account?'}</h3>
        <span>
            <p className='register-para'>
                {signinClicked ? `Sign up for personalized experience.  ` : `Sign in for personalized experience.`}
            </p>
            <p className='register-para'>{signinClicked ? 'Manage orders, see in-store carts,' : 'Manage orders, see in-store carts,'}</p>
            <p className='register-para'>{signinClicked ? 'create wishlists and more!' : 'create wishlists and more!'}</p>
        </span>

        <button className='register-signin-btn' onClick={handleBtnClicked}>
            {signinClicked ? 'Sign up' : 'Sign in'}
        </button>
    </div>
  )
}

export default Register
