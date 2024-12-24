import React from 'react'
import './AnnouncmentBanner.css';

const AnnouncmentBanners = ({bannerImage, padding}) => {
  return (
    <div className='help-center-banner' style={{padding: padding}}>
      <img src={bannerImage} alt='help' />
    </div>
  )
}

export default AnnouncmentBanners
