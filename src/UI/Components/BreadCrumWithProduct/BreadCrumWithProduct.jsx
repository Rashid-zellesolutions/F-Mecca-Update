import React from 'react'
import './BreadCrumWithProduct.css';

const BreadCrumWithProduct = ({breadcrumRecentData, pageName, pathSegment = []}) => {

  const breadCrumbLinks = pathSegment.map((segment, index) => {
    const path = pathSegment.slice(0, index + 1).join('/');
    return (
      <span key={index}>
          <a href={`/${path}`}>{segment}</a>
          {index < pathSegment.length - 1 && <span> / </span>}
      </span>
    )
  })
  return (
    <div className='breadcrum-with-products'>
        <div className='breadcrum'>
            <p> 
              {/* <a href='#'>Home</a> / <a href='#'> Furniture</a> / <a href='#'>Living Room</a> / <a href='#'> Living Room Sets</a>  */}
              {breadCrumbLinks}
              {pageName && <span> / <strong>{pageName}</strong></span>}
            </p>
        </div>
        {/* This section is display none from css */}
        <div className='breadcrum-products-container'>
                {breadcrumRecentData.map((item, index) => {
                    return <div className='single-product' key={index}>
                      <div className='breadcrum-product-image'>
                        <img src={item.img} alt='img' />
                      </div>
                        <p>{item.title}</p>
                    </div>
                })}
        </div>
    </div>
  )
}

export default BreadCrumWithProduct
