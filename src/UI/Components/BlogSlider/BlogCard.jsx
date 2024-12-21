import React from 'react'
import './BlogCard.css';
import rightArrowWithooutOutline from '../../../Assets/icons/arrow-right-without-outline-black.png'
import starBlack from '../../../Assets/icons/star-black.png';
import startUnfilled from '../../../Assets/icons/star-transperent-bg.png'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogCard = ({img, category, title, createdBy, comments}) => {
    
    const stars = [
        {star: <FaStar size={14} />},
        {star: <FaStar size={14} />},
        {star: <FaStar size={14} />},
        {star: <FaStar size={14} />},
        {star: <CiStar size={14} />},
    ]

  return (
    <>
        <div className='blog-card'>
            <div className='blog-card-image'>
                <div className='blog-date-tag'>
                    <p>30</p>
                    <p>May</p>
                </div>
                <LazyLoadImage src={img} alt='img' effect='blur' />
            </div>
            <div className='blog-arther-details'>
                <p>{category}</p>
                <h3>{title}</h3>
                <div className='blog-created-by-and-comments'>
                    <div className='blog-star-rating'>
                        {stars.map((item, index) => (
                            // <img src={item} alt='star' />
                            <p key={index}>{item.star}</p>
                        ))}
                        (200)
                    </div>
                    <span className='mobile-view-blog-card-author'>By: <p>Furniture Mecca</p></span>
                    <p>{comments}</p>
                </div>
            </div>
            <div className='blog-para-and-see-more'>
                <p>
                    In mattis scelerisque magna, ut tincidunt ex. Quisque nibh urna, pretium in tristique in, 
                    bibendum sed libero. Pellentesque mauris nunc, pretium non erat non,...
                </p>
                <button>
                    Read more
                    <img src={rightArrowWithooutOutline} alt='right arrow' />
                </button>
            </div>
        </div> 
    </>
  )
}

export default BlogCard
