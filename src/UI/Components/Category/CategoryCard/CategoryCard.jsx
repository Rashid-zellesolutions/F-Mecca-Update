import React from 'react'
import './CategoryCard.css';

const CategoryCard = ({img, title, link}) => {

  return (
        <div className='categoty-card'>
            <div className='category-card-items'>
                <img src={img} alt="new arrival" />
                <p><a href={link}>{title}</a></p>
            </div>
        </div>
  )
}

export default CategoryCard
