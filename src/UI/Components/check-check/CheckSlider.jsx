// src/CardSlider.js
import React, { useState } from 'react';
import './CheckSlider.css';

const CheckSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cards = [
        "Card 1", "Card 2", "Card 3", 
        "Card 4", "Card 5", "Card 6"
    ];

    const totalSlides = Math.ceil(cards.length / 6);
    
    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            {card}
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots-container">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CheckSlider;
