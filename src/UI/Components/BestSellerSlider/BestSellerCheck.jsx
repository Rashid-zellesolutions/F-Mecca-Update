import React, { useState, useEffect } from 'react';
import './BestSellerSlider.css'; // Import external CSS file

function BestSellerCheck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const slides = [
    {
      title: 'Stevie Charcoal 87" Sofa & Chair',
      price: '$1,599.00',
      imageUrl: 'https://www.wayfair.com/furniture/pdp/steve-charcoal-87-sofa-and-chair-samdsad-w003695349.html',
      rating: 4.5,
      reviews: '(200)',
    },
    // Add more slides here...
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    setAutoSlideInterval(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-best-seller">
      <h2 className="title">Best Sellers</h2>
      <div className="mobile-best-seller-menu">
        <div className="slide-track">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.imageUrl} alt={slide.title} />
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p className="price">{slide.price}</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</ span>
                  <span className="reviews">{slide.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default BestSellerCheck;