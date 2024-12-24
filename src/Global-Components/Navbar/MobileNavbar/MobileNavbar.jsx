import React, { useState, useEffect } from 'react'
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
import { Link } from 'react-router-dom';
import { url } from '../../../utils/api';

const MobileNavbar = ({ showMobileNav, setMobileNavVisible }) => {

  // States and Vaeiables
  const [headerData, setHeaderData] = useState([]);
  const [headerSale, setHeaderSale] = useState([]);
  const [subNavData, setSubNavData] = useState([])
  const [openSubNav, setOpenSubNav] = useState(false)


  // Functions
  async function fetchHeaderPayloads() {
    try {
      const response = await fetch(`${url}/api/v1/header-payloads/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Adjust headers as needed
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }

  useEffect(() => {
    fetchHeaderPayloads().then(data => {
      setHeaderData(data.data[0].categories)
      setHeaderSale(data.data[0].sale)
    }).catch(error => {
      console.error(error);
    });
  }, [])

  const handleNavbarClose = () => {
    setMobileNavVisible(false)
  }

  const handleOpenSubNav = (item) => {
    setOpenSubNav(true);
    setSubNavData(item)

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
            {headerData.map((items, index) => (
              <div className='mobile-nav-single-item' key={index} >
                <Link to={`/${items.category_slug}`} className='mobile-nav-single-item-name' onClick={() => setMobileNavVisible(false)}>
                  <img src={ordersIcon} alt='nav-icon' />
                  <p>{items.category}</p>
                </Link>
                <img
                  src={navArrow}
                  alt='nav-icon'
                  className='mobile-nav-single-item-nav-arrow'
                  onClick={() => handleOpenSubNav(items)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <MobileSubNav
        openSubNav={openSubNav}
        setOpenSubNav={setOpenSubNav}
        subNavData={subNavData}
        setMobileNavVisible={setMobileNavVisible}
      />
    </div>
  )
}

export default MobileNavbar
