// import React, { useEffect, useState } from 'react';
// import './Slider.css'; 
// import ArrowLeft from '../../Assets/icons/arrow-left.png';
// import ArrowRight from '../../Assets/icons/arrow-right.png';
// import arrowLeftRed from '../../Assets/icons/arrow-left-red.png';
// import arrowRightRed from '../../Assets/icons/arrow-right-red.png';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { url } from '../../utils/api';
// // Mobile view banner images
// import sliderImageOne from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa3.png';
// import sliderImageThree from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa4.png';
// import sliderImageFour from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa2.png';
// import axios from 'axios';
// import MainSLiderShimmer from '../../UI/Components/Loaders/MainSliderShimmer/MainSLiderShimmer';

// const Sliderr = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);
//     const [isDraging, setIsDraging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [currentX, setCurrentX] = useState(0);
//     const [slides, setSlides] = useState([])

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     }

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     }

//     const getHomeSliderImages = async () => {
//         try {
//             const response = await axios.get(`${url}/api/v1/pages/home/slider/get`)
//             setSlides(response.data.homeSliders || [])
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     useEffect(() => {
//         getHomeSliderImages();
//     }, [])

//     const mobileViewSLider = [
//         {img: sliderImageOne},
//         {img: sliderImageThree},
//         {img: sliderImageFour},
//     ]

//     const nextSlide = () => {
//         setCurrentIndex(prevIndex => (slides.length ? (prevIndex + 1) % slides.length : 0));
//     };

//     const prevSlide = () => {
//         setCurrentIndex(prevIndex => (slides.length ? (prevIndex === 0 ? slides.length - 1 : prevIndex - 1) : 0));
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlide, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     const mobileNextSlide = () => {
//         setMobileCurrentIndex((prevIndex) => (prevIndex + 1) % mobileViewSLider.length);
//     };

//     const mobilePrevSlide = () => {
//         setMobileCurrentIndex((prevIndex) => (prevIndex === 0 ? mobileViewSLider.length - 1 : prevIndex - 1));
//     }

//     useEffect(() => {
//         const interval = setInterval(mobileNextSlide, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//         <div 
//             className='slider'
//             style={{ cursor: isDraging ? 'grabbing' : 'grab' }}
//         >
//             <div 
//                 className='arrow left-arrow' 
//                 onClick={prevSlide} 
//                 onMouseEnter={handleMouseEnter} 
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <img 
//                     src={isHovered ? arrowLeftRed : ArrowLeft} 
//                     alt="arrow left" 
//                 />
//             </div>
//             <div className='slides-container' 
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {/* {slides && slides.length > 0 ? ( */}
//                    { slides.map((slide, index) => (
//                         <div 
//                             className='slide' 
//                             key={index}>
//                             <img 
//                                 src={`${url}${slide.image_url}`} 
//                                 // src={slide.img}
//                                 alt={`slide ${index + 1}`}
//                                 effect='blur'
//                             />
//                         </div>
//                     ))}
//                 {/* ) : (
//                     <MainSLiderShimmer />
//                 )} */}
//                 {/* slides.map((slide, index) => (
//                     <div 
//                         className='slide' 
//                         key={index}>
//                         <LazyLoadImage 
//                             src={`${url}${slide.image_url}`} 
//                             // src={slide.img}
//                             alt={`slide ${index + 1}`}
//                             effect='blur'
//                         />
//                     </div>
//                 )) */}
//             </div>
//             <div 
//                 className='arrow right-arrow' 
//                 onClick={nextSlide} 
//                 onMouseEnter={handleMouseEnter} 
//                 onMouseLeave={handleMouseLeave}>
//                 <img 
//                     src={isHovered ? arrowRightRed : ArrowRight} 
//                     alt="arrow right" 
//                 />
//             </div>
//         </div>
//         <div className='mobile-view-slider'>
//             <div className='mobile-arrow mobile-left-arrow' onClick={mobilePrevSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <img src={isHovered ? arrowLeftRed : ArrowLeft} alt="arrow left" />
//             </div>
//             <div className='mobile-view-slider-container' style={{transform: `translateX(-${mobileCurrentIndex * 100}%)`}}>
//                 {mobileViewSLider.map((mobileSlide, mobileIndex) => (
//                     <div className='mobile-slide' key={mobileIndex}>
//                         <img src={mobileSlide.img} alt={`slide ${mobileIndex + 1}`} />
//                     </div>
//                 ))}
//             </div>
//             <div className='mobile-arrow mobile-right-arrow' onClick={mobileNextSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <img src={isHovered ? arrowRightRed : ArrowRight} alt="arrow right" />
//             </div>
//         </div>
//         </>
//     );
// };

// export default Sliderr;













import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import ArrowLeft from '../../Assets/icons/arrow-left.png';
import ArrowRight from '../../Assets/icons/arrow-right.png';
import arrowLeftRed from '../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../Assets/icons/arrow-right-red.png';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import sliderImageOne from '../../Assets/Furniture Mecca/Landing Page/Slider/mobile-view-banner.png';
import sliderImageThree from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa4.png';
import sliderImageFour from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa2.png';
import { url } from '../../utils/api';
import loader from "../../Assets/Loader-animations/loader-check-two.gif"

// Slider component accepting images as props
const Sliderr = ({ images, height }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imagePreloader, setImagePreloader] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (images?.length ? (prevIndex + 1) % images?.length : 0));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (images?.length ? (prevIndex === 0 ? images?.length - 1 : prevIndex - 1) : 0));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [images]);

    const mobileViewSLider = [
        { img: sliderImageOne },
        { img: sliderImageThree },
        { img: sliderImageFour },
    ]

    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => setIsHovered(true);
    // const handleMouseLeave = () => setIsHovered(false);

    // Custom arrows
    const CustomPrevArrow = ({ onClick }) => (
        <div className="arrow left-arrow" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={isHovered ? arrowLeftRed : ArrowLeft} alt="arrow left" />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="arrow right-arrow" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={isHovered ? arrowRightRed : ArrowRight} alt="arrow right" />
        </div>
    );

    const settings = {
        dots: false, // Set to true if you want dot navigation
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow:imagePreloader? <CustomPrevArrow /> :<></>,
        nextArrow:imagePreloader? <CustomNextArrow /> : <></>,
    };

    return (
        <>

            <div className="slider" style={{ cursor: 'grab', height: height ? height : "calc(100vw * 0.26355)" }}>
                <Slider {...settings}>
                    {images?.map((img, index) => (
                        <div className="slide" key={index}>
                            <img
                                src={`${url}${img.image_url}`}
                                alt={`slide ${index + 1}`}
                                onDragStart={(e) => e.preventDefault()}
                                onLoad={() => setImagePreloader(true)} 
                            />
                          
                        </div>
                    ))}
                </Slider>
                {!imagePreloader && <div className='image_preloader'>
                                <img src={loader} alt="" srcset="" />
                            </div>}
            </div>

            {/* Mobile View */}

            <div className="mobile-view-slider">
                <Slider {...settings}>
                    {images?.map((img, index) => (
                        <div className="mobile-slide" key={index}>
                            <img
                                src={mobileViewSLider[index].img}
                                alt={`slide ${index + 1}`}
                                onDragStart={(e) => e.preventDefault()}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
export default Sliderr;
