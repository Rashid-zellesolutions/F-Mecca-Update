import React, { useEffect, useState } from 'react';
import './MultiProductSlider.css';
import tentSaleBanner from '../../../Assets/global-images/tent-sale-banner.png';
import diningRoomGolden from '../../../Assets/global-images/Dining-Room-Set-in-Gold.png';
import blackChairsSet from '../../../Assets/global-images/download 83.png';
import kanoSet from '../../../Assets/global-images/Kano-300x200-1 1.png';
import pubSet from '../../../Assets/global-images/Stone-Pub-Dining-Set.png';

const MultiProductSlider = () => {
    const images = [
        blackChairsSet,
        diningRoomGolden,
        kanoSet,
        pubSet,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const getSliderImages = (sliderIndex) => {
        const shift = (index, shiftBy) => (index + shiftBy) % images.length;
        return images.map((_, i) => {
            const newIndex = shift(currentIndex, sliderIndex + i);
            return images[newIndex];
        });
    };

    return (
        <div className='multi-product-sliders-man'>
            <div className='heading-div'>
                <h3>Best Seller</h3><p>View All</p>
            </div>
            <div className='product-banner-and-slider'>
            <div className='products-banner'>
                <img src={tentSaleBanner} alt='tent' />
            </div>
            <div className='product-sliders-container'>
                {[0, 1, 2, 3].map(sliderIndex => (
                    <div key={sliderIndex} className='slider-one'>
                        <div className='slider-inner-div' style={{ transform: `translateY(-${currentIndex * 250}px)` }}>
                            {getSliderImages(sliderIndex).map((img, index) => (
                                <div key={index} className='my-slides'>
                                    <img src={img} alt='img' />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default MultiProductSlider;
