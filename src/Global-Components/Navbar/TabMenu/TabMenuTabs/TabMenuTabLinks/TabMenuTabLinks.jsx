import React from 'react'
import './TabMenuTabLinks.css'
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TabMenuTabLinks = ({name, closeSubMenuLinks, ind, innerInd, tabSublinksData}) => {

  console.log("index is : ", ind , "Inner INdex is : ", innerInd)
  return (
    <div className='tab-sub-menu-links'>
      <div className={`sub-nav-header `}>
          <span className='back-to-main-menu' onClick={closeSubMenuLinks}><FaChevronLeft size={17} /></span>
          <div className='sub-menu-heading-container'>
              <h3>{name}</h3>
              <span><Link to={'#'}> Shop all</Link> | <Link to={'#'}> Shop via Chat</Link></span>
          </div>
      </div>
      <div className='tab-sub-menu-link'>
        {tabSublinksData[ind].furnitureSubData[innerInd].furnitureLinks.map((item, index) => {
          return <h3 key={index} className='tab-sub-menu-link-item'>
           <Link to={item.link}> {item.name} </Link>
          </h3>
        })}
      </div>
      
    </div>
  )
}

export default TabMenuTabLinks
