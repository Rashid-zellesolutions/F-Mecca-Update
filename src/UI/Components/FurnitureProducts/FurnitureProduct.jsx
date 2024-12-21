import React, { useState } from 'react';
import './FurnitureProducts.css';
import ChairOneImage from '../../../Assets/to-be-change/download 53.png';
import ChairTwoImage from '../../../Assets/to-be-change/download 54.png';
import ChairThreeImage from '../../../Assets/to-be-change/download 55.png';
import ChairFourImage from '../../../Assets/to-be-change/download 56.png';
import ChairFiveImage from '../../../Assets/to-be-change/download 57.png';
import ArrowLeft from '../../../Assets/icons/arrow-left.png';
import ArrowRight from '../../../Assets/icons/arrow-right.png';
import arrowLeftRed from '../../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../../Assets/icons/arrow-right-red.png';

const FurnitureProduct = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const products = [
        { name: "Linen Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Teal Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Ottoman Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Dylan Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Playday Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Rilly Ash Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Cottage Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Playscape Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Benone Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Swival Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Damask Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFiveImage },
        { name: "Laural Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairFourImage },
        { name: "Chaise Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "Pop Up Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairTwoImage },
        { name: "Miranda Chair ", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairOneImage },
        { name: "Nova Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairThreeImage },
        { name: "O'Brian Chair", price: '$598', code: 'SKU: 1775-46-45', variation: [{color: 'red'}, {color: 'green'}, {color: 'blue'},], category: 'Chair', btnText: 'Buy Now', img: ChairThreeImage },
    ];

    const halfLength = Math.floor(products.length /2)
    const itemsPerSlide = 2;
    const totalSlides = Math.ceil(products.length / itemsPerSlide / 2);

    const handleNext = () => {
        if (index < totalSlides - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className="container">
            <h3 className='product-heading'>New Arrivals</h3>
            <div className="product-slider">
                {index > 0 && <button onClick={handlePrev} className="product-arrow arrow-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                    <img src={isHovered ? arrowLeftRed : ArrowLeft} alt='arrow left' /> 
                </button>}
                <div
                    className="row"
                    style={{ transform: `translateX(-${index * 80}%)` }}
                >
                    {products.slice(0, halfLength).map((product, i) => (
                        <div key={i} className="column">
                            <img src={product.img} alt={product.name} />
                            <div className='furniture-details-container'>
                                <p className='price'>{product.price}</p>
                                <h3 className='heading'>{product.name}</h3>
                                <p className='code'>{product.code}</p>
                                <p className="dimension"> Color : 
                                    {product.variation.map((variant, idx) => (
                                        <span key={idx} className="variation-color" style={{backgroundColor: `${variant.color}`}}> </span>
                                    ))}
                                </p>
                                <p className='material'>Category:  {product.category}</p>
                                <button>{product.btnText}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="row"
                    style={{ transform: `translateX(-${index * 80}%)` }}
                >
                    {products.slice(halfLength, products.length).map((product, i) => (
                        <div key={i} className="column">
                            <img src={product.img} alt={product.name} />
                            <div className='furniture-details-container'>
                                <p className='price'>{product.price}</p>
                                <h3 className='heading'>{product.name}</h3>
                                <p className='code'>{product.code}</p>
                                <p className="dimension"> Color : 
                                    {product.variation.map((variant, idx) => (
                                        <span key={idx} className="variation-color" style={{backgroundColor: `${variant.color}`}}> </span>
                                    ))}
                                </p>
                                <p className='material'>Category:  {product.category}</p>
                                <button>{product.btnText}</button>
                            </div>
                        </div>
                    ))}
                </div>
                {index < totalSlides - 2 && <button onClick={handleNext} className="product-arrow arrow-right" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                    <img src={isHovered ? arrowRightRed : ArrowRight} alt='arrow right' /> 
                </button>}
            </div>
            <div className='mobile-view-product-slider'>
                <div className='mobile-view-row'>
                    {products.map((item, i) => {
                        return <div className='mobile-view-product'>
                            <img src={item.img} alt={item.name} />
                            <div className='mobile-view-product-detail'>
                                <p className='mobile-view-code-and-price'>{item.code} <span>{item.price}</span></p>
                                <h3>{item.name}</h3>
                                <p>{item.code}</p>
                                <p>Dimension : {item.dimention}</p>
                                <p>Material : {item.material}</p>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default FurnitureProduct;
