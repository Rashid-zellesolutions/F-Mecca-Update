import React from 'react'
import './Loader.css';
import loaderAnimation from '../../../Assets/Loader-animations/loader-check-two.gif';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img src={loaderAnimation} alt='animation' />
      <p>Please Wait</p>
    </div>
  )
}

export default Loader
