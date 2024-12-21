import React, { useState } from 'react'
import './DropdownMenu.css';
import { Link } from 'react-router-dom';
import { url } from '../../../utils/api';


const DropdownMenu = ({parentCategorySlug,navHeading, dropDownNavData,products}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [outerIndex, setOuterIndex] = useState(null)
    const [innerIndex, setInnerIndex] = useState(null)
    const handleActiveIndex = (index) => {
        setActiveIndex(index);
    }

    const handleAccentActiveItems = (i, index) => {
        setOuterIndex(i)
        setInnerIndex(index);
    }
    
  return (
    <div className='mattresses-main-div'>
                {
                // dropDownNavData[0].heading === 'Accent Furniture' ? (dropDownNavData[0].links.map((item, i) => {
                //     return <div className='menu-links'>
                //         <h3 className='living-room-heading'>{item.headingOne}</h3>
                //         <div className='mattresses-links-div'>
                //             <p>
                //                 {item.innerLinks.map((it, index) => {
                //                     return <p className={`mattres-links ${outerIndex === i && innerIndex === index ? 'active' : ''}`} onClick={() => handleAccentActiveItems(i, index)}>
                //                         <Link to={it.link}>{it.name}</Link>
                //                     </p>
                //                 })}
                //             </p>
                //         </div>
                //     </div>
                    
                //     }))  
                //     :
                     <div style={{display: 'flex', width: '25%'}}>
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
                }
       {products && <div className='mattresses-images-div'>
            {products?.map((item, index) => {
                return <div key={index} className='mattress-image'>
                    <img src={url + item.image} alt={item.name} />
                    <p className='image-title'><Link to={item.slug}>{item.name}</Link> </p>
                    <div className='pricing'>{item.sale_price === ""? <p className='price'>${item.regular_price}</p>: <del><p className='price'>${item.regular_price}</p></del>}
                    <p className='price new'>${item.sale_price}</p></div>
                </div>
            })}
        </div>}
        
    </div>
  )
}

export default DropdownMenu
