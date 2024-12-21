import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrival.css';
import goldenDiningRoomSet from '../../../Assets/images/Dining-Room-Set-in-Gold-02 1.png';
import blackDiningRoomSet from '../../../Assets/images/Dining-room-set-black.png';
import whiteDiningRoomSet from '../../../Assets/images/dining-room-set-white.png';
import leftArrow from '../../../Assets//icons/arrow-left-white (2).png'
import rightArrow from '../../../Assets//icons/arrow-right-white.png'
import mobArrowLeft from '../../../Assets/icons/arrow-left-charcol.png';
import mobArrowRight from '../../../Assets/icons/arrow-right-charcol.png'
import cartRed from '../../../Assets/icons/cart.png';
import { FaEye } from "react-icons/fa";
import cart from '../../../Assets/icons/cart-white.png';
import { Link } from 'react-router-dom';
import NewArrivalCard from './NewArrivalCard/NewArrivalCard';
// import DealOfTheDayCard from './DealOfTheDayCard/DealOfTheDayCard';


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`category-arrow category-arrow-left ${className}`} >
      <img src={leftArrow} alt='arrow' className='new-arrival-desktop-arrows' />
      <img src={mobArrowLeft} alt='arrow' className='new-arrival-mobile-arrows' />
    </div>
  )
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`category-arrow category-arrow-right ${className}`} >
        <img src={rightArrow} alt='arrow' className='new-arrival-desktop-arrows'/>
        <img src={mobArrowRight} alt='arrow' className='new-arrival-mobile-arrows' />
      </div>
    )
  }

const NewArrival = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cardData = [
        {
            cardImage: goldenDiningRoomSet, pieces: '8 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
            desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
        },
        {
            cardImage: blackDiningRoomSet, pieces: '5 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
            desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
        },
        {
            cardImage: whiteDiningRoomSet, pieces: '4 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
            addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
            desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
        },
        {
          cardImage: goldenDiningRoomSet, pieces: '8 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
          addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
          desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
      },
      {
          cardImage: blackDiningRoomSet, pieces: '5 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
          addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
          desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
      },
      {
          cardImage: whiteDiningRoomSet, pieces: '4 Pieces', title: 'Trellis Room Set', price: '$599', newPrice: '$399', addCartLink: '#', 
          addCartIcon: cart, addCart: 'add to cart', viewAllLink: '#', viewIcon: <FaEye  size={20}/>, viewAll: "View All" ,
          desc: 'Monaco 3 PC Modular Sectional with 2 Chaise, Grey, Sectional'
      },
  ]
  
  return (
    <div className='new-arrival-main'>
      <div className='new-arrival-heading-div'>
        <a href='#'>New Arrivals</a>
        <a href='#'>View All</a>
      </div>

      <div className='slider-container'>
        <div className='new-arrival-cards' >
          <Slider {...settings}>
            {cardData.map((item, index) => (
              <div key={index} className='new-arrival-cards-container'>
                <NewArrivalCard 
                  cardIndex={index}
                  arrivalImage={item.cardImage} 
                  pieces={item.pieces} 
                  title={item.title} 
                  price={item.price} 
                  newPrice={item.newPrice}
                  desc={item.desc}
                  addToCartLink={item.addCartLink} 
                  addToCardIcon={item.addCartIcon}
                  addToCart={item.addCart}
                  viewAllLink={item.viewAllLink}
                  viewAllIcon={item.viewIcon}
                  viewAll={item.viewAll}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default NewArrival
