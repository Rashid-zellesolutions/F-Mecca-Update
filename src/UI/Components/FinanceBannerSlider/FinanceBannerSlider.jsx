import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FinanceBannerSlider.css';
// import paypalBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/New-Financing-WF-1.jpg';
// import moveForword from '../../../Assets/Furniture Mecca/Landing Page/sale banner/New-Financing-AAF-1.jpg';
import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { url } from "../../../utils/api";


function FinanceBannerSlider() {
    const [images, setIMages] = useState([])
    const getFinanceBannerImagesFRomApi = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/pages/home/finance-slider/get`);
            // console.log("finance images", response.data.homeSliders)
            setIMages(response.data.homeSliders)
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getFinanceBannerImagesFRomApi()
    }, [])

    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed (in ms)
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll per action
        autoplay: true, // Enables autoplay
        autoplaySpeed: 3000, // Autoplay interval (in ms)
        draggable: true, // Allows drag/swipe functionality
        pauseOnHover: false, // Pause autoplay on hover
        arrows: false, // Show left/right navigation arrows
    };


    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="carousel-slide" key={index}>
                        <img
                            src={`${url}${image.image_url}`}
                            alt={`slide ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FinanceBannerSlider;
