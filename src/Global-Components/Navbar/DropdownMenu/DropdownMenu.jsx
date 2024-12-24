import React, { useState } from 'react'
import './DropdownMenu.css';
import { Link } from 'react-router-dom';
import { url } from '../../../utils/api';

const DropdownMenu = ({ parentCategorySlug, navHeading, dropDownNavData, products }) => {
    // State and variables
    const [activeIndex, setActiveIndex] = useState(null);

    const handleActiveIndex = (index) => {
        setActiveIndex(index);
    }


    return (
        <div className='mattresses-main-div'>
            <div style={{ display: 'flex', width: '25%' }}>
                <div className='menu-links'>
                    <h3 className='living-room-heading'>{navHeading}</h3>
                    <div className='mattresses-links-div'>
                        {dropDownNavData.map((item, index) => {
                            return <p className={`mattres-links ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => handleActiveIndex(index)}>
                                <Link to={`/${parentCategorySlug}/${item.slug}`}>{item.name}</Link>
                            </p>
                        })}
                    </div>
                </div>
            </div>
            {products && <div className='mattresses-images-div'>
                {products?.map((item, index) => {
                    return <div key={index} className='mattress-image'>
                        <img src={url + item.image} alt={item.name} />
                        <p className='image-title'><Link to={item.slug}>{item.name}</Link> </p>
                        <div className='pricing'>{item.sale_price === "" ? <p className='price'>${item.regular_price}</p> : <del><p className='price'>${item.regular_price}</p></del>}
                            <p className='price new'>${item.sale_price}</p></div>
                    </div>
                })}
            </div>}
        </div>
    )
}

export default DropdownMenu
