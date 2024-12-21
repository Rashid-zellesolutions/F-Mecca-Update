import React, { useState } from 'react'
import './Shopvia.css'
import closeIcon from '../../../Assets/icons/cancel.png'

const Shopvia = () => {
  const [closeBanner, setCloseBanner] = useState(false);
  const handleCloseBanner = () => {
    setCloseBanner(!closeBanner);
  }
  return (
    <div className={`shop-via-banner ${closeBanner ? 'close' : ''}`}>
        <div className='text-div'>
            <span> Shop via <a href='#'>860-812-111</a> or <a href='#'>Chat</a></span>
        </div>
        <img src={closeIcon} alt="close" onClick={handleCloseBanner} />
    </div>
  )
}

export default Shopvia
