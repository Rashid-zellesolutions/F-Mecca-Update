import React, {useState} from 'react'
import './NewArrivalCard.css';
import { Link } from 'react-router-dom';

const NewArrivalCard = ({arrivalImage, pieces, newPrice, desc, title, price, addToCartLink, addToCardIcon, addToCart, viewAllLink,viewAllIcon, viewAll, cardIndex  }) => {
    const [cartHoverIndex, setCartHoverIndex] = useState(null);
    const handleCartHover = (cardIndex) => {
      setCartHoverIndex(cardIndex);
    }
    const handleCardHoverLeave = () => {
      setCartHoverIndex(null)
    }

    // Card title words limit
    const maxLength = 35;
    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    return (
    <div key={cardIndex} className='card' >
        <div className='card-header'> 
            <img src={arrivalImage} alt='img' />
            <span className='pieces-text'>{pieces}</span>
            <span className='title-and-price'>
                <div className='mobile-view-new-ariival-price'>
                    <del>$ 799</del>
                    <p className='mobile-view-new-arrival-product-price'>{price}</p>
                </div>
            </span>
        </div>
        {/* <div className='card-buttons'>
            <Link to={addToCartLink} onMouseEnter={() => handleCartHover(cardIndex)} onMouseLeave={handleCardHoverLeave}>
                <img src={addToCardIcon} alt='icon' />
                <p>{addToCart}</p>
            </Link>
            <Link to={viewAllLink}>
                {viewAllIcon}
                <p>{viewAll}</p>
            </Link>
        </div> */}
        <div className='new-arrival-desc-and-price'>
            <div className='new-arrival-desc'>
                <p>{truncateTitle(desc, maxLength)}</p>
            </div>
            <div className='new-arrival-new-and-old-price'>
                <del>{price}</del>
                <h3 className='new-arrival-new-price'>{newPrice}</h3>
            </div>
        </div>
    </div>
  )
}

export default NewArrivalCard
