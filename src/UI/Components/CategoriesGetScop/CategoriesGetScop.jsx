import React from 'react';
import './CategoriesGetScop.css';
import imgOne from '../../../Assets/Furniture Mecca/Landing Page/get the scope/Rectangle 917.png'
import imgTwo from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 921.png'
import imgThree from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 925.png'
import { Link } from 'react-router-dom';

const CategoriesGetScop = ({ isTrue, text }) => {

    const mobileProductText = [
        {
            heading: 'Furniture Mecca’s Affordable Living Room Furniture',
            para: `It’s the room where you and your loved ones spend so much time,
            so I've made sure that comfort and value are key with my living room furniture! 
            Sink into my seating and enjoy little luxuries, like USB ports and cup holders on select collections. 
            And I want you to get more bang for your buck, so I always like to throw in decorative pillows into the 
            price wherever I can!`
        },
        {
            heading: 'How to Choose Living Room Furniture',
            para: `It’s the room where you and your loved ones spend so much time, so I've made sure that 
            comfort and value are key with my living room furniture! Sink into my seating and enjoy little luxuries, 
            like USB ports and cup holders on select collections. And I want you to get more bang for your buck, so 
            I always like to throw in decorative pillows into the price wherever I can!`
        },
        {
            heading: 'What Living Room Furniture Matches my Style?',
            para: `It’s the room where you and your loved ones spend so much time, so I've made sure that 
            comfort and value are key with my living room furniture! Sink into my seating and enjoy little luxuries, 
            like USB ports and cup holders on select collections. And I want you to get more bang for your buck, so I 
            always like to throw in decorative pillows into the price wherever I can!`
        }
    ]
    const sliderImages = [imgOne, imgTwo, imgThree]
    
    return (
        <div className='scop-main-container'>

            <div className='scop-contact-container'>

                <div className='heading-and-links'>
                    <h3>Get The Scop</h3>
                    <span> <Link to={'#'}>Offer</Link> | <Link to={'#'}>Discounts</Link> | <Link to={'#'}>Best Prices</Link> </span>
                </div>

                <div className='scop-input'>
                    <div className='scop-input-email'>
                        <input type='text' placeholder='Email' />
                        <button>
                            <Link to={'#'}>Sign me up</Link>
                        </button>
                    </div>
                    <p>By Signing up, you agree to our Privacy Policy and Terms of use</p>
                </div>

            </div>

            <div className={`product-text-details ${isTrue ? 'show' : ''}`}>

                <div className='product-text'>
                    
                    <div dangerouslySetInnerHTML={{ __html: text }} ></div>

                </div>

                <div className='image-gallery-slider'>

                    <div className='vertical-slider'>
                        <img className='img-one' src={imgOne} alt='img' />
                        <img className='img-one' src={imgOne} alt='img' />
                        <img className='img-one' src={imgOne} alt='img' />
                        <img className='img-one' src={imgOne} alt='img' />
                    </div>

                    <div className='vertical-slider'>
                        <img className='img-two' src={imgOne} alt='img' />
                        <img className='img-two' src={imgOne} alt='img' />
                        <img className='img-two' src={imgOne} alt='img' />
                        <img className='img-two' src={imgOne} alt='img' />
                    </div>

                </div>

            </div>
            
            <div className='mobile-view-get-scoop-text-and-slider'>
                <div className='mobile-view-product-text-section-1'>
                    {mobileProductText.slice(0, 2).map((items, index) => (
                        <div className='mobile-view-contant'>
                            <h3>{items.heading}</h3>
                            <p>{items.para}</p>
                        </div>
                    ))}
                </div>
                <div className='mobile-view-image-gallery-slider'>
                    <div className='mobile-view-slider-one'>
                        {sliderImages.map((item, index) => (
                            <img src={item} alt='img' className={index % 2 === 0 ? 'large' : 'small'} />
                        ))}
                        {sliderImages.map((item, index) => (
                            <img src={item} alt='img' className={index % 2 === 0 ? 'large' : 'small'} />
                        ))}
                    </div>
                    <div className='mobile-view-slider-two'>
                        {sliderImages.map((item, index) => (
                            <img src={item} alt='img' className={index % 2 === 0 ? 'small' : 'large'} />
                        ))}
                        {sliderImages.map((item, index) => (
                            <img src={item} alt='img' className={index % 2 === 0 ? 'large' : 'small'} />
                        ))}
                    </div>
                </div>
                <div className='mobile-view-product-text-section-2'>
                    {mobileProductText.slice(mobileProductText.length - 1, mobileProductText.length).map((items, index) => (
                        <div className='mobile-view-contant'>
                            <h3>{items.heading}</h3>
                            <p>{items.para}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CategoriesGetScop
