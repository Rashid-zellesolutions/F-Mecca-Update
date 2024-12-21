import React from 'react'
import './FurnitureForBudget.css'
import sofaUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/sofa-under.png'
import bedUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/bed-under.png'
import storageUnder from '../../../Assets/Furniture Mecca/Landing Page/furniture-for-budget/storage-under.png'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { url } from '../../../utils/api'

const FurnitureForBudget = ({budgetCardData}) => {
    // const budgetCardData = [
    //     {img: sofaUnder, sale: 'Dining Room Under $1000', shopNow: 'Shop now', uid: 84,max_price:1000,category:"dining-room"},
    //     {img: bedUnder, sale: 'Benches Under $500', shopNow: 'Shop now', uid: 74,max_price:500,category:"benches"},
    //     {img: storageUnder, sale: 'Love Seats Under $500', shopNow: 'Shop now', uid: 19,max_price:500,category:"love-seats"},
    // ]
    const navigate = useNavigate();

    const navigateToDetails = (uid,max_price,category) => {
        navigate(`/furniture-at-every-budget?category=${category}&categoryUid=${uid}&max_price=${max_price}`);
    }
  return (
    <div className='furniture-for-budget-main-secton'>
        <div className='furniture-for-budget-heading-section'>
            <h3>Furniture For Every Budget</h3>
            <p>From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.</p>
        </div>
        <div className='furniture-for-budget-card'>
            {budgetCardData.map((items, index) => (
                <div 
                    key={index} 
                    className='budget-furniturre-card' 
                    onClick={()=>{
                        navigateToDetails(items.uid,items.max_price,items.category)
                    }}
                >
                    <div className='budget-furniture-card-img'>
                        <LazyLoadImage src={url + items.img} alt='img' effect='blur' />
                    </div>
                    <div className='budget-furniture-card-details'>
                        <p>{items.sale}</p>
                        <button onClick={()=>{
                            navigateToDetails(items.uid,items.max_price,items.category)
                        }}>
                            {items.shopNow}
                            <div className='shop-now-btn-under-line'></div>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FurnitureForBudget