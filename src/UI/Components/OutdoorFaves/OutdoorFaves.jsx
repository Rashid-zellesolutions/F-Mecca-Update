import React from 'react'
import './OutdoorFaves.css';
import outDoorBanner from '../../../Assets/images/outdoor-fav-banner.png';
import { Link } from 'react-router-dom';

const OutdoorFaves = () => {

    const relatedCategoryData = [
        {category: 'brown wicker patio furniture'},
        {category: 'deep seating patio furniture'},
        {category: 'heavy duty patio furniture'},
        {category: 'I shaped outdoor seating'},
        {category: 'outside patio'},
    ]
    
  return (
    <div className='out-door-faves-main'>
        {/* <div className='out-door-and-fav'>
            <div className='out-door-fav-details'>
                <h3>Outdoor Faves for Less</h3>
                <p>Score everything for your next backyard bash</p>
                <span>
                    <Link>Shop the sale</Link>
                    <p>Sponsored</p>
                </span>
            </div>
            <div className='out-door-fav-banner'>
                <img src={outDoorBanner} alt='banner' />
            </div>
        </div> */}
        <div className='related-category-div'>
            <h3>Related Categories</h3>
            <div className='related-category-tags'>
                {relatedCategoryData.map((item, index) => {
                    return <p key={index} className='related-category'>{item.category}</p>
                })}
            </div>
        </div>
    </div>
  )
}

export default OutdoorFaves
