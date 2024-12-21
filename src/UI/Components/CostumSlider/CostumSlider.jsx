// // CustomSlider.js
// import React, { useState } from 'react';
// import './CostumeSlider.css'; // Custom styles

// const CustomSlider = ({ slides, slidesToShow = 2, slideWidth }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       Math.min(prevIndex + 1, slides.length - slidesToShow)
//     );
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const slideStyles = {
//     transform: `translateX(-${currentIndex * slideWidth}px)`,
//     width: `${slides.length * slideWidth}px`,
//   };

//   return (
//     <div className="slider-container">
//       <button className="slider-button prev" onClick={goToPrev}>
//         &lt;
//       </button>
//       <div className="slider-wrapper">
//         <div className="slider-content" style={slideStyles}>
//           {slides.map((SlideComponent, index) => (
//             <div
//               className="slider-slide"
//               style={{ width: `${slideWidth}px` }}
//               key={index}
//             >
//                 <SlideComponent />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="slider-button next" onClick={goToNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default CustomSlider;


// src/CustomSlider.js
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const SliderContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 100%;
// `;

// const SliderWrapper = styled.div`
//   display: flex;
//   transition: transform 0.3s ease-in-out;
//   width: ${(props) => props.cardWidth * props.children.length}px;
// `;

// const SliderItem = styled.div`
//   flex: 0 0 ${(props) => props.cardWidth}px;
//   box-sizing: border-box;
// `;

// const Arrow = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   z-index: 1;

//   ${({ left }) => (left ? 'left: 0;' : 'right: 0;')}
// `;

// const DotsContainer = styled.div`
//   text-align: center;
//   margin-top: 10px;
// `;

// const Dot = styled.button`
//   background: ${({ active }) => (active ? 'black' : 'lightgray')};
//   border: none;
//   border-radius: 50%;
//   width: 10px;
//   height: 10px;
//   display: inline-block;
//   margin: 0 5px;
//   cursor: pointer;
// `;

// const CustomSlider = ({ cards, visibleCards, showArrows = true, showDots = true }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(Math.max(currentIndex - 1, 0));
//   };

//   const handleNext = () => {
//     setCurrentIndex(Math.min(currentIndex + 1, Math.ceil(cards.length / visibleCards) - 1));
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const cardWidth = window.innerWidth / visibleCards;
  
//   return (
//     <SliderContainer>
//       {showArrows && currentIndex > 0 && <Arrow left onClick={handlePrev}>‹</Arrow>}
//       {showArrows && currentIndex < Math.ceil(cards.length / visibleCards) - 1 && <Arrow onClick={handleNext}>›</Arrow>}
//       <SliderWrapper cardWidth={cardWidth}>
//         {cards.map((card, index) => (
//           <SliderItem key={index} cardWidth={cardWidth}>
//             {card}
//           </SliderItem>
//         ))}
//       </SliderWrapper>
//       {showDots && (
//         <DotsContainer>
//           {Array.from({ length: Math.ceil(cards.length / visibleCards) }).map((_, index) => (
//             <Dot
//               key={index}
//               active={index === currentIndex}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </DotsContainer>
//       )}
//     </SliderContainer>
//   );
// };

// export default CustomSlider;


// src/CustomSlider.js// src/CustomSlider.js
import React, { useState, useEffect } from 'react';
import './CostumeSlider.css'; // Import the CSS file for styling
import arrowLeft from '../../../Assets/icons/arrow-left.png';
import arrowRight from '../../../Assets/icons/arrow-right.png';

const CustomSlider = ({ cards, visibleCards, showArrows = true, showDots = true, autoSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [autoSlide, setAutoSlide] = useState(true)

  const totalSlides = Math.ceil(cards.length / visibleCards);
  const slidesToShow = visibleCards;

  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(totalSlides - 1);
    }
  }, [currentIndex, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


    useEffect(() => {
      if(autoSlide) {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
      }
    }, []);

  



  return (
    <div className="costume-slider-container">
        {showArrows && currentIndex > 0 && <button className="costume-arrow costume-left" onClick={handlePrev}>
            <img src={arrowLeft}alt='left' />
        </button>}
        {showArrows && currentIndex < totalSlides - 1 && <button className="costume-arrow costume-right" onClick={handleNext}>
            <img src={arrowRight} alt='left' />
        </button>}
      {/* changed % to px from 100% to 430px */}
      <div
        className="costume-slider-wrapper"
        style={{
          transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
          width: `${(cards.length * 100) / visibleCards}%`,
          display: 'flex'
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="costume-slider-item">
            {card}
          </div>
        ))}
      </div>

      {showDots && (
        <div className="costume-dots-container">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`costume-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSlider;



