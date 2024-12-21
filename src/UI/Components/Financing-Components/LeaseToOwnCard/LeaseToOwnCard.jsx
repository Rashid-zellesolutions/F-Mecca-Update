import React from 'react'
import './LeaseToOwnCard.css'
import progressiveCardIcon from '../../../../Assets/Furniture Mecca/Financing/progressive-leasing.png';

const LeaseToOwnCard = ({height, imgWidth, imgHeight, cardImg, cardHeading, creditNeeded, creditDetailsOne, creditDetailsTwo, applyNowLink, learnMoreLink}) => {
  return (
    <div className='lease-to-own-card' style={{height: height}}>
        <img 
            src={cardImg} 
            alt={cardHeading} 
            className='lease-to-own-card-img'
            style={{width: imgWidth, height: imgHeight}}
        />
        <h3 className='lease-to-own-heading'>{cardHeading}</h3>
        <p className='lease-to-own-credit-needed'>{creditNeeded}</p>
        <div className='lease-to-own-credit-details'>
            <p>{creditDetailsOne}</p>
            <p>{creditDetailsTwo}</p>
        </div>
        <div className='lease-to-own-buttons'>
            <a href={applyNowLink} className='lease-to-own-apply-now-btn'>Apply Now</a>
            <a href={learnMoreLink} className='lease-to-own-learn-more-btn'>Learn More</a>
        </div>
    </div>
  )
}

export default LeaseToOwnCard
