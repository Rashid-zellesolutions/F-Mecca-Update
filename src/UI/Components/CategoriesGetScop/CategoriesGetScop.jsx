import React, { useEffect, useRef, useState } from 'react';
import './CategoriesGetScop.css';
import imgOne from '../../../Assets/Furniture Mecca/Landing Page/get the scope/Rectangle 917.png'
import imgTwo from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 921.png'
import imgThree from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 925.png'
import img from '../../../Assets/Furniture Mecca/category page/get the scope/Rectangle 926.png'
import styled, { keyframes } from 'styled-components';

// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// `;

// const Slider = styled.div`
//   display: flex;
//   flex-direction: column;
//   transition: transform 1s ease;
//   will-change: transform;
// `;

// const Slide = styled.div`
//   display: flex;
//   height: ${(props) => (props.height ? `${props.height}px` : '250px')};
// `;

// const Image = styled.img`
//   width: auto;
//   height: 100%;
// `;

const CategoriesGetScop = ({ isTrue, text }) => {

    const productText = [
        {
            heading: 'Exclusive Dining Room',
            para: 'A smart, useful dining area is the heart of the home, where friends and family love to gather and where you create meals to share with loved ones'
        },
        {
            heading: 'Take A Seat On The Table',
            para: `Dining tables come in many styles, allowing you to find a set that fits your personality. Your table anchors your space, so find it and separate 
            dining chairs to customize the look to match your style. If you have a unique eating space, look for breakfast nooks, bar & pub tables, or bar stools to pull 
            up to a counter.`
        },
        {
            heading: 'Seek Out Stylish Storage',
            para: `Buffets, sideboards, and credenzas are great furniture additions that are also practical for storage. For example, use the top to serve food and keep 
            your china and silver in the drawers and shelves. Or pick up a china cupboard to display your serving ware.`
        },
        {
            heading: 'Add Entertaining Essentials',
            para: `When hosting guests, pub tables and bistro sets give you more seating and encourage socializing. Also, wine cabinets, home bars, and serving carts 
            make it easy for your guests to toast your hospitality and admire your stylish space.`
        },
        {
            heading: 'Personalize Your Space',
            para: `Start with your current kitchen and dining rooms, and add style, color, and personality to make your space reflect your taste. At Furniture Mecca, 
            you can explore various inspirations that might be perfect for you.`
        },

    ]
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
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const intervelId = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length)
    //     }, 3000)
    //     return () => clearInterval(intervelId)
    // }, [])

    // useEffect(() => {
    //     if(sliderRef.current){
    //         const offset = -currentIndex * 310;
    //         sliderRef.current.style.transform = `translateY(${offset}px)`;
    //     }
    // }, [currentIndex])

    return (
        <div className='scop-main-container'>

            <div className='scop-contact-container'>

                <div className='heading-and-links'>
                    <h3>Get The Scop</h3>
                    <span> <a href='#'>Offer</a> | <a href='#'>Discounts</a> | <a href='#'>Best Prices</a> </span>
                </div>

                <div className='scop-input'>
                    <div className='scop-input-email'>
                        <input type='text' placeholder='Email' />
                        <button>
                            <a href='#'>Sign me up</a>
                        </button>
                    </div>
                    <p>By Signing up, you agree to our Privacy Policy and Terms of use</p>
                </div>

            </div>

            <div className={`product-text-details ${isTrue ? 'show' : ''}`}>

                <div className='product-text'>
                    {/* {productText.map((item, index) => {
                    return <div key={index} className='text-details'>
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                    </div>
                })} */}
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
