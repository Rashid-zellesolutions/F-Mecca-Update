import React, {useState} from 'react';
import './DealOfTheDayCard.css';
import testImage from '../../../../Assets/Furniture Mecca/product page/frequently bought/MN600__04-300x200 1.png'
import star from '../../../../Assets/icons/Star 19.png'
// import cartIcon from '../../../../Assets/icons/cart-bag-charcol.png';
// import cartWhite from '../../../../Assets/icons/cart-bag-white.png'
import heartIcon from '../../../../Assets/icons/heart-charcol.png';
// import heartWhite from '../../../../Assets/icons/heart-white.png'
// import combinedArrows from '../../../../Assets/icons/multi-arrow-charcol.png'
// import multiArrowWhite from '../../../../Assets/icons/multi-arrow-white.png'
// import leftArrow from '../../../../Assets/icons/arrow-left-white.png';
// import rightArrow from '../../../../Assets/icons/right-arrow-white.png';
import { url } from '../../../../utils/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useList } from '../../../../context/wishListContext/wishListContext';


const products = [
  { id: 1, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews',  stock: 11, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 2, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 3, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 4, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 5, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 6, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 7, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 8, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 9, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$20', imageUrl: testImage, rating: ' reviews', stock: 10, sold: 50, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 10, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$30', imageUrl: testImage, rating: ' reviews', stock: 8, sold: 30, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 11, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$40', imageUrl: testImage, rating: ' reviews', stock: 15, sold: 80, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  { id: 12, name: "Stevie Charcoal 87'' Sofa & Chair", price: '$50', imageUrl: testImage, rating: ' reviews', stock: 5, sold: 20, stars: [
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
    {icon: star},
  ] },
  // Add more products here
];

const DealOfTheDayCard = ({
    index, 
    name, 
    star, 
    review, 
    price, 
    newPrice, 
    isDiscountable,
    productImage, 
    handleDealCardClick, 
    dealDayData,
    handleWishListClick,
    handleCartSection,
    handleShareProduct,
  }) => {

    const formatePrice = (price) => {
      return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    }
    // const [isHovered, setIsHovered] = useState(null);

    

    // Deal of the day product name limitations
    const maxLength = 40;
    const truncateTitle = (title, maxLength) => {
      if(!title) return '';  
      return title.length > maxLength ? title.slice(0, maxLength) + '...' : title 
      
    };
    // console.log("deal day data", url,productImage)
    const {isInWishList} = useList()
    return (
      <div 
        index={index} 
        className='deal-of-the-day-product-card' 
        onClick={() => handleDealCardClick(dealDayData)}
      >
        <div 
            className='deal-of-the-day-product-rating-and-name'
          >
          <h3 className='deal-of-the-day-product-name'>
            {truncateTitle(name, maxLength)}
          </h3>
          <div 
            className='deal-of-the-day-price'>
              {isDiscountable ? <del>{formatePrice(price)}</del> : <></>}
              <p>{formatePrice(newPrice)}</p>
          </div>
          <div 
              className='deal-of-the-day-rating-and-reviews'>
            <div 
                className='deal-of-the-day-card-stars'>
              {star && star.map((items, innIndex) => (
                <img 
                    key={innIndex} 
                    src={items.icon} 
                    alt='star' 
                  />
              ))}
              </div>
            <p>({review})</p>
          </div>
        </div>

        <div className='deal-of-the-day-product-image'>
          <img src={heartIcon} alt='heart-icon' className='mobile-view-deal-day-card-heart-icon' />
          <div className='deal-of-the-day-product-discount'><p>-12%</p></div>
          <LazyLoadImage src={`${url}${productImage}`} alt='img' effect='blur' />
          <div className='deal-of-the-day-card-icons-div'>
              <button 
                  className={`deal-of-the-day-icon-one`}
                  onClick={() => handleCartSection(dealDayData)} 
              >
              </button>
              
              <button  
                  className={`deal-of-the-day-icon-two ${isInWishList(dealDayData.uid) ? 'active-wish-list-btn' : ''}`}
                  onClick={(e) => {e.stopPropagation(); handleWishListClick(dealDayData)}} 
              >
              </button>

              <button 
                  className={`deal-of-the-day-icon-three `} 
                  onClick={(e) => {e.stopPropagation() ; handleShareProduct(dealDayData)}}
              >
                
              </button>
          </div> 
        </div>

        <div className='mobile-view-deal-of-the-day-product-details'>
            <div className='mobile-view-star-rating-and-review'>
                <div className='mobile-view-product-stars'>
                    {star && star.map((item, index) => (
                      <img key={index} src={item.icon} alt='src' />
                    ))}
                </div>
                <p>{review}</p>
            </div>
            <h3 className='mobile-view-deal-of-the-day-product-name'>
                {name}
            </h3>
            <div 
              className='mobile-view-deal-of-the-day-price'>
              <del>${price}</del>
              <p>$ 1,599.00</p>
            </div>
        </div>
      </div>
    );
};

export default DealOfTheDayCard;
