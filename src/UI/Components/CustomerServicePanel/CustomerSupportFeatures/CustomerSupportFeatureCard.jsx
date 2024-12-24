import React, { useState } from 'react'
import './CustomerSupportFeatureCard.css';
import addBtnIcon from '../../../../Assets/icons/Group 437 (2).png';

const CustomerSupportFeatureCard = (
    {
        img, 
        heading, 
        desc, 
        isExtended, 
        link, 
        onToggle, 
        className 
    }) => {

  return (
    <>
        <div className={`customer-support-card ${isExtended ? 'expended' : ''} ${className}`}>
            <div className='customer-support-card-heading'>
                <img src={img} alt="cart" />
                <h3>{heading}</h3>
            </div>
            <div className='customer-support-card-description'>
                <h3>{heading}</h3>
                <a href={link}>{desc}</a>
            </div>
            <button onClick={onToggle}> <img src={addBtnIcon} alt="add" className={`${isExtended ? 'togle-button' : ''}`} />  </button>
        </div>
        <div className={`mobile-view-customer-support-card ${isExtended ? 'expended' : ''}`}>
            <div className='mobile-view-customer-support-heading'>
                <div className='mobile-view-icon-div'>
                    <span> <img src={img} alt="img" /> <h3>{heading}</h3> </span>
                    <img src={addBtnIcon} alt="add" onClick={onToggle} className={`${isExtended ? 'togle-button' : ''}`} />
                </div>
                <div className='mobile-view-customer-support-card-description'>
                    <a href={link}>{desc}</a>
                </div>    
            </div>
        </div>
    </>
  )
}

export default CustomerSupportFeatureCard
