import React, { useState } from 'react'
import './LoginRegister.css'
import Register from '../../Components/Login-Register-Components/Register/Register'
import Login from '../../Components/Login-Register-Components/Login/Login'
import RegisterMobileView from '../../Components/Login-Register-Components/RegisterMobileView/RegisterMobileView'
import LoginMobileView from '../../Components/Login-Register-Components/loginMobileView/LoginMobileView'

const LoginRegister = () => {
    const [signinClicked, setSigninClicked] = useState(false)
    const handleSigninSlide = () => {
        setSigninClicked(!signinClicked);
    }
    const [mobileSignupClicked, setMobileSignupclick] = useState(true);
    const handleMobileSignup = () => {
        setMobileSignupclick(!mobileSignupClicked)
    }
  return (
    <>
    <div className='login-register-main-page'>
        <Register 
            handleBtnClicked={handleSigninSlide}
            signinClicked={signinClicked}
        />
        <Login 
            signupclicked={signinClicked}
        />
    </div>
    <div className='mobile-login-and-register-page'>
        <LoginMobileView 
            mobileSignupClicked={mobileSignupClicked}
            handleRegisteView={handleMobileSignup}
        />
        <RegisterMobileView 
            mobileSignupClicked={mobileSignupClicked}
            handleRegisterView={handleMobileSignup}
        />
    </div>
    </>
  )
}

export default LoginRegister
