import React from 'react'
import './LandingPageFinancing.css'
import bannerOne from '../../../Assets/Furniture Mecca/Landing Page/financing/banner-1.png';
import bannerTwo from '../../../Assets/Furniture Mecca/Landing Page/financing/PAYPAL-BANNER.gif';
import bannerThree from '../../../Assets/Furniture Mecca/Landing Page/financing/banner-3.png'

import acima from '../../../Assets/Furniture Mecca/Landing Page/financing/acima.png';
import progressive from '../../../Assets/Furniture Mecca/Landing Page/financing/progressive.png';
import snap from '../../../Assets/Furniture Mecca/Landing Page/financing/snap.png';
import american from '../../../Assets/Furniture Mecca/Landing Page/financing/ammerican.png';


const LandingPageFinancing = () => {
  return (
    <div className='landing-page-financing-main-container'>
      <div className='landing-page-financing-left'>
        <img src={bannerOne} alt='banner one' />
        <img src={bannerTwo} alt='banner two' />
      </div>
      <div className='landing-page-financing-right'>
        <img src={bannerThree} alt='banner-three' />
        <div className='financing-page-buttons-div'>
            <div className='financing-page-buttons-div-column'>
                <button>
                    <img src={acima} alt='acima' />
                </button>
            </div>
            <div className='financing-page-buttons-div-column'>
                <button>
                    <img src={progressive} alt='progressive' />
                </button>
            </div>
            <div className='financing-page-buttons-div-column'>
                <button>
                    <img src={snap} alt='snap' />
                </button>
            </div>
            <div className='financing-page-buttons-div-column'>
                <button>
                    <img src={american} alt='american' />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageFinancing
