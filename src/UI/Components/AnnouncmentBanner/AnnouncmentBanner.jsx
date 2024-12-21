import React from 'react'
import './AnnouncmentBanner.css';
import installmentBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/download 121.png'

const AnnouncmentBanners = ({bannerImage, padding}) => {
  return (
    <div className='help-center-banner' style={{padding: padding}}>
      <img src={bannerImage} alt='help' />
    </div>
  )
}

export default AnnouncmentBanners
