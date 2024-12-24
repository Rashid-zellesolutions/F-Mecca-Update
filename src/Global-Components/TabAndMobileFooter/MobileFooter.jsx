import React, { useState } from 'react'
import './MobileFooter.css';
import { Link } from 'react-router-dom';
import redFurnitureMecca from '../../Assets/global-images/furniture-mecca-red.jpeg'
import filledStar from '../../Assets/icons/Star 3.png';
import unFilledStart from '../../Assets/icons/Star 5.png';
import locationIcon from '../../Assets/icons/location.png'
import callIcon from '../../Assets/icons/call.png'
import mailIcon from '../../Assets/icons/mail.png'

import facebookIcon from '../../Assets/icons/facebook.png';
import tiktokIcon from '../../Assets/icons/tiktok.png';
import youtubeIcon from '../../Assets/icons/youtube.png';
import instaIcon from '../../Assets/icons/instagram.png';
import addBtn from '../../Assets/icons/add-icon.png';

const MobileFooter = () => {

    const stars = [
        { icon: filledStar },
        { icon: filledStar },
        { icon: filledStar },
        { icon: filledStar },
        { icon: unFilledStart }

    ]

    const socialIcons = [
        { socialIcon: facebookIcon, socialLink: '#' },
        { socialIcon: tiktokIcon, socialLink: '#' },
        { socialIcon: youtubeIcon, socialLink: '#' },
        { socialIcon: instaIcon, socialLink: '#' },
    ]

    const contactData = [
        { icon: locationIcon, title: 'Philadelphia', link: '#' },
        { icon: callIcon, title: '215 352 1600', link: '#' },
        { icon: mailIcon, title: 'meccacustomercare@gmail.com', link: '#' }
    ]

    return (
        <div className='mobile-view-footer-main-container'>
            <div className='footer-banner'>
                <div className='mobile-view-footer-banner-logo'>
                    <img src={redFurnitureMecca} alt='img' className='company-name-image' />
                </div>
                <div className='banner-content'>
                    <h3>Furniture Mecca</h3>
                    <div className='rating-starts-container'>
                        {stars.map((item, index) => {
                            return <img key={index} src={item.icon} alt='start' />
                        })}
                    </div>
                    <p>847 Google Reviews</p>
                </div>
            </div>
            <div className='contact-container'>
                {contactData.map((item, index) => {
                    return <span key={index}>
                        <img src={item.icon} alt='img' />
                        <Link href={item.link}>{item.title}</Link>
                    </span>
                })}
            </div>
            <div className='footer-social-icons'>
                {socialIcons.map((item, index) => {
                    return <Link key={index} to={item.socialLink}>
                        <img src={item.socialIcon} alt="icon" />
                    </Link>
                })}
            </div>
            <div className='mobile-view-terms-and-rights'>
                <div className='mobile-view-terms'>
                    <p>Shipping & Delivery</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className='mobile-footer-line'></div>
                <div className='mobile-view-right'>
                    <p>2020 - 2024 Furniture Mecca. All Rights Reserved</p>
                    <span>
                        <p>Designed & maintained by </p>
                        <a href='#'>Zelle Solutions</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter
