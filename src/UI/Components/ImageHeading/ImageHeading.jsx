import React from 'react'
import './ImageHeading.css';

const ImageHeading = ({img, mobileViewImage, alt}) => {
  return (
      <div className='image-heading-container'>
        <img src={img} alt={alt} className='desktop-view-banner' />
        <img src={mobileViewImage} alt={alt} className='mobile-view-banner' />
      </div>
  )
}

export default ImageHeading
