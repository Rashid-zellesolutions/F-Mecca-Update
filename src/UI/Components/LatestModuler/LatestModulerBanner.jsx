import React, { useEffect, useState } from 'react'
import './LatestModulerBanner.css';
// import SodaBannerOne from '../../../Assets/to-be-change/soda-1.png';
// import SodaBannerTwo from '../../../Assets/to-be-change/soda-2.png';
// import SodaMobileViewBanner from '../../../Assets/images/Rectangle 679.png'
import PaypalBannerOne from '../../../Assets/Furniture Mecca/Landing Page/Pay option banner/download 51.png';
import PaypalBannerTwo from '../../../Assets/Furniture Mecca/Landing Page/Pay option banner/Well-Fargo-Financing-1 1.png';
import MobileViewPaypalBanner from '../../../Assets/images/Group 382.png';
import installmentBanner from '../../../Assets/Furniture Mecca/Landing Page/Pay option banner/New Main Financing.jpg';
// import fullBed from '../../../Assets/to-be-change/hp-fourth_hero_mat_desktop_1b_3200x1388.png';
import mobileViewFullBed from '../../../Assets/images/Rectangle 703.png'
import loader from "../../../Assets/Loader-animations/loader-check-two.gif"

const LatestModulerBanner = ({ images, mobileMainImage, customWidth, mainImage, mainImgShow, showBanners, paddingTop }) => {
  const [imagePreloader, setImagePreloader] = useState(false);



  return (
    <>
      <div className={`moduler-container ${customWidth ? 'show' : ''}`}>

        <div className={`financing-banner`}>
          <img src={PaypalBannerOne} alt="paypal banner" />
          <img src={PaypalBannerTwo} alt="paypal banner two" />
        </div>

        <div className='mobile-view-financing-banner'>
          <img src={MobileViewPaypalBanner} alt="paypal" />
        </div>

        <div className='installment-banner'>
          <img src={installmentBanner} alt="instalment-plan banner" />
        </div>

        <div className='mobile-view-bed-banner'>
          <img src={mobileViewFullBed} alt="full bed" />
        </div>

      </div>

      <div className={`full-width-container ${customWidth ? 'hide' : ''}`}>
        
        <div className={`dining-image-div ${mainImgShow ? 'show-main-img' : ''}`}>
          <img onLoad={() => setImagePreloader(true)} src={mainImage} alt='dining image' className='desktop-main-banner' />
          <img src={mobileMainImage} alt='mobile-main-image' className='mobile-main-banner' />
          {!imagePreloader && <div className='image_preloader'>
            <img src={loader} alt="" srcset="" />
          </div>}
        </div>

        <div className={`dining-paypal-div ${showBanners ? 'show-banners' : ''} ${paddingTop ? 'padding-top' : ''}`}>
          <img src={PaypalBannerOne} alt='paypal one' />
          <img src={PaypalBannerTwo} alt='paypal two' />
        </div>

        <div className={`dining-installment-div ${showBanners ? 'show-banners' : ''}`}>
          <img src={installmentBanner} alt='installment' />
        </div>

      </div>
    </>
  )
}

export default LatestModulerBanner
