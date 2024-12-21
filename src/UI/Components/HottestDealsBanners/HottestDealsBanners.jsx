import React from 'react'
import './HottestDealsBanners.css';
import leftBannerOne from '../../../Assets/Home-Page/hot-deals-banners/5 in 1 Slider 2.png';
import leftBannerTwo from '../../../Assets/Home-Page/hot-deals-banners/5 in 1 Slider 5.png';
import centerBanner from '../../../Assets/Home-Page/hot-deals-banners/5 in 1 Slider 3.png'
import rightBannerOne from '../../../Assets/Home-Page/hot-deals-banners/5 in 1 Slider 4.png';
import rightBannerTwo from '../../../Assets/Home-Page/hot-deals-banners/5 in 1 Slider 6.png';

const HottestDealsBanners = () => {
  return (
    <>
    <div className='mobile-view-hottest-deal-banner'>
      <img src={centerBanner} alt='img' />
    </div>
    <div className='hottest-deal-main-container'>
      <h3 className='hot-deal-main-heading'>Hottest Deal</h3>
      <div className='hot-deals-main-banner'>
          <div className='left-banners'>
              <img src={leftBannerOne} alt='left banner one' />
              <img src={leftBannerTwo} alt='left banner two' />
          </div>
          <div className='center-banner'>
              <img src={centerBanner} alt='center banner' />
          </div>
          <div className='right-banner'>
              <img src={rightBannerOne} alt='right banner one' />
              <img src={rightBannerTwo} alt='right two banner' />
          </div>
      </div>
    </div>
    </>
  )
}

export default HottestDealsBanners
