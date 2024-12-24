import React, {useState, useEffect, useRef} from 'react'
import './CustomerPhotos.css';

import arrowLeft from '../../../Assets/icons/arrow-left-red.png';
import arrowRight from '../../../Assets/icons/arrow-right-red.png';
import { url } from '../../../utils/api';

const CustomerPhotos = ({images}) => {

    

      const [currentIndex, setCurrentIndex] = useState(5); // Start from the first duplicate set
      const [isTransitioning, setIsTransitioning] = useState(false);
      const sliderRef = useRef();

      const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(images.length);
          sliderRef.current.style.transform = `translateX(-${images.length * 220}px)`;
        } else if (currentIndex === images.length * 2) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(images.length);
          sliderRef.current.style.transform = `translateX(-${images.length * 220}px)`;
        }
      };

      const handlePrev = () => {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex(currentIndex - 1);
        }
      };

      const handleNext = () => {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setCurrentIndex(currentIndex + 1);
        }
      };

      useEffect(() => {
        if (isTransitioning) {
          sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
          sliderRef.current.style.transform = `translateX(-${currentIndex * 220}px)`;
        }
      }, [currentIndex, isTransitioning]);

  return (
    <div className='customer-photos-main-container'>
        <div className="slider-container">
            <button className="customer-slider-arrow left" onClick={handlePrev}>
                <img src={arrowLeft} alt='arrow left' />
            </button>
            <div
                className="slider-wrapper"
                ref={sliderRef}
                onTransitionEnd={handleTransitionEnd}
                style={{ transform: `translateX(-${currentIndex * 220}px)` }}
            >
                {[...images,...images,...images,].map((src, index) => (
                <img effect='blur' key={index} src={`${url}${src}`} alt={`Slide ${index}`} className="slide-image" />
                ))}
            </div>
            <button className="customer-slider-arrow right" onClick={handleNext}>
                <img src={arrowRight} alt='arrow right' />
            </button>
        </div>
    </div>
  )
}

export default CustomerPhotos
