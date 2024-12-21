import React from 'react'
import './RelatedCategories.css'
import { Link } from 'react-router-dom'

const RelatedCategories = () => {
    const relatedCategoriesData = [
        {categoryName: 'Leather Living Room sets', link: '#'},
        {categoryName: 'Reclining Living Room Sets', link: '#'},
        {categoryName: 'Small space Living Room sets', link: '#'},
        {categoryName: 'Sleeper Sofa Living Room sets', link: '#'},
        {categoryName: 'Sofa & Loveseat sets', link: '#'},
        {categoryName: 'Sofa & chair sets', link: '#'},
        {categoryName: 'Sofa & chair sets', link: '#'},
        {categoryName: 'Sofa & chair sets', link: '#'},
        {categoryName: 'Sofa & chair sets', link: '#'},
    ]
  return (
    <div className='related-categories-main-div'>
            <h3>Related Categories</h3>
            <div className='related-categories-items'>
                {relatedCategoriesData.map((item, index) => {
                    return <Link key={index} to={item.link}>{item.categoryName}</Link>
                })}
            </div>
        </div>
  )
}

export default RelatedCategories
