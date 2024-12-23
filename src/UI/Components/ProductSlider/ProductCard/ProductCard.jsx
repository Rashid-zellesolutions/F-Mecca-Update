import React from 'react';
import './ProductCard.css';
import arrowLeft from '../../../../Assets/icons/arrow-left-black.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCard = ({
  productData,
  handleCardClicked,
  img,
  heading,
  para,
  btnTxt,
  productImageHeading,
  productImagePrice,
  productImageAbout,
  productLink,
  index,
}) => {
  const backgroundColor = index % 2 === 0 ? '#F29039' : '#CC433B';

  return (
    <div className="product" onClick={() => handleCardClicked(productData)}>
      <div className="product-img">
        <img
          src={img}
          alt="product"
          effect="blur"
          onDragStart={(e) => e.preventDefault()} // Prevent drag behavior
        />
        <div className="product-img-detail">
          <div
            style={{ backgroundColor }}
            className="top_rated_head"
          >
            {/* TOP RATED */}
            Featured
          </div>
          <div className="top_rated_price_cont">
            <p>Starting From</p>
            <h3>{productImagePrice}</h3>
          </div>
        </div>
      </div>
      <div className="product-details">
        <p>{heading}</p>
        <button>
          <div href={productLink}>{btnTxt}</div>
          <img src={arrowLeft} alt="arrow left" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
