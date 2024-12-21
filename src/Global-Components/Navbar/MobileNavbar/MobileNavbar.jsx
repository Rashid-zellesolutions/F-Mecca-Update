import React, { useState } from 'react'
import './MobileNavbar.css'
import favoriteIcon from '../../../Assets/icons/favorite.png';
import ordersIcon from '../../../Assets/icons/order.png';
import livingRoomIcon from '../../../Assets/icons/living-room.png';
import bedroomIcon from '../../../Assets/icons/bedroom.png';
import diningRoomIcon from '../../../Assets/icons/dining-room.png';
import navArrow from '../../../Assets/icons/nav-arrow.png';
import crossBtn from '../../../Assets/icons/close-btn.png';
import mainLogo from '../../../Assets/Logo/m_logo_360 2.png';
import MobileSubNav from './MobileSubNav/MobileSubNav';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const MobileNavbar = ({showMobileNav, setMobileNavVisible}) => {
    const mobileNav = [
        {name: 'Living Room', link: 'living-room-category', icon: livingRoomIcon, navIcon: navArrow},
        {name: 'Bed Room', link: '/bedroom-category', icon: bedroomIcon, navIcon: navArrow},
        {name: 'Dining Room', link: '/dining-room-category', icon: diningRoomIcon, navIcon: navArrow},
        {name: 'Mattresses', link: '/mattresses-category', icon: ordersIcon, navIcon: navArrow},
        {name: 'Kids', link: '/kids-category', icon: ordersIcon, navIcon: navArrow},
        {name: 'Accent Furniture / Rugs', link: '/accent-furniture-category', icon: ordersIcon, navIcon: navArrow},
        {name: 'Small Spaces', link: '/small-spaces', icon: ordersIcon, navIcon: navArrow},
        {name: 'Outlet', link: '/sale-category', icon: ordersIcon, navIcon: navArrow},
        {name: 'Labor Day Sale', link: '/labor-day-sale', icon: ordersIcon, navIcon: navArrow},
    ]
    const handleNavbarClose = () => {
        setMobileNavVisible(false)
    }
    const [openSubNav, setOpenSubNav] = useState(false)
    const [navIndex, setNavIndex] = useState(0)
    const handleOpenSubNav = (index) => {
        setOpenSubNav(true);
        setNavIndex(index)
    }
    
  return (
    <div className={`mobile-nav-main-container ${showMobileNav ? 'show-mobile-nav' : ''}`}>
        <button className='mobile-nav-close' onClick={handleNavbarClose}>
            <img src={crossBtn} alt='close-nav' />
        </button>
        <div className='mobile-nav-logo-section'>
            <Link to={'/'}>
                <img src={mainLogo} alt='website-logo' />
            </Link>
        </div>
        <div className='mobile-nav-containt-section'>
            <div className='mobile-nav-containt-header'>
                <div className='mobile-nav-head-items'>
                    <img src={favoriteIcon} alt='hear' />
                    <p>Favorite</p>
                </div>
                <div className='mobile-nav-head-items'>
                    <img src={ordersIcon} alt='hear' />
                    <p>My Orders</p>
                </div>
            </div>
            <div className='mobile-nav-containt-body'>
                <h3 className='mobile-nav-body-sec-heading'>Categories</h3>
                <div className='mobile-nav-main-items'>
                    {mobileNav.map((items, index) => (
                        <div className='mobile-nav-single-item' key={index} >
                            <Link to={items.link} className='mobile-nav-single-item-name' onClick={() => setMobileNavVisible(false)}>
                                <img src={items.icon} alt='nav-icon' />
                                <p>{items.name}</p>
                            </Link>
                            <img 
                                src={items.navIcon} 
                                alt='nav-icon' 
                                className='mobile-nav-single-item-nav-arrow'
                                onClick={() => handleOpenSubNav(index)} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <MobileSubNav 
            openSubNav={openSubNav}
            setOpenSubNav={setOpenSubNav}
            subNavHeading={mobileNav[navIndex].name}
            navImg={mobileNav[navIndex].icon}
            selectedIndex={navIndex}
            setMobileNavVisible={setMobileNavVisible}
        />
    </div>
  )
}

export default MobileNavbar
