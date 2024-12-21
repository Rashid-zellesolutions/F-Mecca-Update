import React, {useState} from 'react'
import './BestSellerMenu.css'

const BestSellerMenu = ({menuName, menuItems, handleActiveItemFunction}) => {
    const [activeItem, setActiveItem] = useState(0)
  return (
    <div className='best-seller-menu'>
        <h3>{menuName}</h3>
        <div className='best-seller-nav-items'>
            {menuItems.map((item, index) => (
                <p
                    key={index}
                    className={activeItem === index ? 'active' : ''}
                    onClick={handleActiveItemFunction}
                >
                    {item}
                </p>
            ))}
        </div>
    </div>
  )
}

export default BestSellerMenu
