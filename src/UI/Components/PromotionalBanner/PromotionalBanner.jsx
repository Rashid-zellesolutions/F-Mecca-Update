import React, {useState, useEffect} from 'react'
import './PromotionalBanner.css';
import { Link } from 'react-router-dom';
import deliverTo from '../../../Assets/icons/delivery.png'
// import locationModalIcon from '../../Assets/icons/location.png'
import locationIcon from '../../../Assets/icons/location-red.png';

const PromotionalBanner = ({handleLanguageModal, handleDeliverModal, currentSelectedCountryFlag, usaFlag, currentSelectedCountry}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const dynamicHeading = [0, 1, 2]
    useEffect(() => {
        const intervelId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicHeading.length)
        }, 5000)
        return () => clearInterval(intervelId);
    }, [])

  return (
    <div className='furniture-mecca-promotional-banner'>
        <div className='rotating-message'>
          {currentIndex === 1 ? <span>Need help ordering? <Link className='toll-free-ancor' href='#'> Call 860-812-1111 </Link> </span> 
          : currentIndex === 2 ? <span>Learn about my <Link className='toll-free-ancor' href='#'>Financing Options</Link> </span> 
          : <span>Shop everyday low prices!</span>}
        </div>
        <div className='header-links-and-select-language'>
          <div className='banner-link-container'>
            <Link to={'our-locations'}>Stores</Link>
            <Link to={'#'}>Orders</Link>
            <Link to={'/financing-option'}>Financing</Link>
            <Link to={'#'}>Help</Link>
          </div>
          <div className='header-main-banner-language-div'>
            <button onClick={handleLanguageModal}>
              <img src={currentSelectedCountryFlag || usaFlag} alt='flag' />
              {currentSelectedCountry || 'English'}
            </button>
          </div>
        </div>
        <div className='on-tab-deliver-to' onClick={handleDeliverModal}>
            <img src={deliverTo} alt="delivery" />
            <div className='mobile-view-delever-to'> 
              <p>Deliver to : </p>
              <Link> PA 19134</Link> 
            </div>
        </div>
      </div>
  )
}

export default PromotionalBanner
