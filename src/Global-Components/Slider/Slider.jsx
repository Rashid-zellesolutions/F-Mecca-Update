import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import ArrowLeft from '../../Assets/icons/arrow-left.png';
import ArrowRight from '../../Assets/icons/arrow-right.png';
import arrowLeftRed from '../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../Assets/icons/arrow-right-red.png';

import sliderImageOne from '../../Assets/Furniture Mecca/Landing Page/Slider/mobile-view-banner.png';
import sliderImageThree from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa4.png';
import sliderImageFour from '../../Assets/Furniture Mecca/Landing Page/Slider/sofa2.png';
import { url } from '../../utils/api';
import loader from "../../Assets/Loader-animations/loader-check-two.gif"

// Slider component accepting images as props
const Sliderr = ({ images, height }) => {

    // State and variables
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imagePreloader, setImagePreloader] = useState(false);

    // Functions
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (images?.length ? (prevIndex + 1) % images?.length : 0));
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
        prevArrow: imagePreloader ? <CustomPrevArrow /> : <></>,
        nextArrow: imagePreloader ? <CustomNextArrow /> : <></>,
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
