import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from '../../Assets/Furniture Mecca/Landing Page/Slider/Main Banner 1.jpg';
import imageTwo from '../../Assets/Furniture Mecca/Landing Page/Slider/Main Banner 2.jpg';

const SliderTwo = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        
      };

    const sliderImages = [{img: imageOne}, {img: imageTwo}]
    return (
        <div className='slider'>
            {sliderImages.map((item, index) => (
                <Slider {...settings}>
                    <div className='slide'>
                        <img src={item.img} alt='img' />
                    </div>
                </Slider>
            ))}
        </div>
    )
}

export default SliderTwo
