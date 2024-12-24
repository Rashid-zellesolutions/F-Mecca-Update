import React, { useEffect, useState, useRef } from 'react'
import './BestSallerSlider.css'
import imageOne from '../../../Assets/global-images/Enzo-bedrrom-set.webp';
import imageTwo from '../../../Assets/global-images/tatun-pub.jpg';
import imageThree from '../../../Assets/global-images/Ian-bedroom-set.webp';
import { Link } from 'react-router-dom';

const BestSallerSlider = () => {

  // States and variables
  const sliderImagesOne = [
    imageOne,
    imageTwo,
    imageThree
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImagesOne.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImagesOne.length]);

  const getClassName = (index) => {
    const centerIndex = sliderImagesOne.length > 1 ? Math.floor(sliderImagesOne.length / 2) : 0;
    if (index === centerIndex) {
      return 'best-slider center';
    } else {
      return 'best-slider';
    }
  };

  const getImagesWithCorrectOrder = () => {
    let images = [...sliderImagesOne];
    const firstPart = images.splice(currentIndex);
    return [...firstPart, ...images];
  };

  return (
    <div className='best-seller-slider-main-container'>
      <div className='best-seller-header'>
        <Link to={'#'}>Best Saller</Link>
        <Link to={'#'}>View All</Link>
      </div>
      <div className='best-seller-slider'>
        {getImagesWithCorrectOrder().map((item, index) => (
          <div className={getClassName(index)} key={index}>
            <img src={item} alt='img' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSallerSlider
