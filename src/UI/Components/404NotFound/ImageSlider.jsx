import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Correct import for Swiper styles
import './ImageSlider.css'; // Your custom styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useProducts } from '../../../context/productsContext/productContext';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';

const ImageSlider = () => {
    const {products} = useProducts()
    const swiperRef = useRef(null); // Create a ref for the Swiper instance
    const swiperContainerRef = useRef(null);

    useEffect(() => {
      swiperRef.current = new Swiper(swiperContainerRef.current, {
        modules: [Navigation, Pagination], // Use the necessary modules
        centeredSlides: true,
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
  
      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true); // Destroy the instance safely
        }
      };
    }, []);

  return (
    <section className="section slider-section">
      <div className="container slider-column">
        <div className="swiper swiper-slider">
          <div className="swiper-wrapper">
            {products.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <BestSellerProductCard
                  productData={item}
                  productMainImage={item.mainImage} 
                  starIcon={item.ratingStars} 
                  reviews={item.reviewCount} 
                  productName={item.productTitle} 
                  oldPrice={item.priceTag}
                  newPrice={item.priceTag} // Update as needed for the new price
                />
              </div>
            ))}
          </div>
          <span className="swiper-pagination">  </span>
          <span className="swiper-button-prev"></span>
          <span className="swiper-button-next"></span>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
