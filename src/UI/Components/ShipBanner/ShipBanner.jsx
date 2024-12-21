import React from 'react'
import './ShipBanner.css'

const ShipBanner = ({bannerImg, paddindTrue, showBanner}) => {
  return (
    <div className={`${showBanner ? 'banner-div' : 'hide-banner'} ${paddindTrue ? 'padding-bottom' : ''}`}>
      <img src={bannerImg} alt="ship banner" />
    </div>
  )
}

export default ShipBanner

