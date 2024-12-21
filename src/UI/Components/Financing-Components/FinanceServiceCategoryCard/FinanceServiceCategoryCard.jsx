import React from 'react'
import './FinanceServiceCategoryCard.css'
import storeIcon from '../../../../Assets/Furniture Mecca/Financing/store.png'

const FinanceServiceCategoryCard = ({marginTop, cardIcon, cardTitle, cardDesc}) => {
  return (
    <div className={`finance-service-category-card ${marginTop}`}>
        <div className='finance-service-category-card-icon-div'>
            <img src={cardIcon} alt={cardTitle} />
        </div>
        <div className='finance-service-category-card-detail-div'>
            <h3>{cardTitle}</h3>
            <p>{cardDesc}</p>
        </div>
    </div>
  )
}

export default FinanceServiceCategoryCard
