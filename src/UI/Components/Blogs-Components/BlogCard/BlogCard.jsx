import React, { useEffect, useState } from 'react'
import './BlogCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import arrowRight from '../../../../Assets/icons/blog-btn-arrow.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BlogCard = (
  {
    blogMainImage,
    navigateToSinglePage,
    blogCategory,
    blogTitle,
    blogPostDate,
    ind
  }) => {

  const [animButton, setAnimButton] = useState(null);

  const fetchVariableData = async () => {
    const api = `https://fm.skyhub.pk/api/v1/products/get/468`
    try {
      const resposnse = await axios.get(api);
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    fetchVariableData();
  }, [])


  const handleButtonsAnimation = (ind) => {
    setAnimButton(ind);
  }

  const handleButtonAnimEnd = () => {
    setAnimButton(null)
  }

  const maxLength = 40;
  const truncateTitle = (title, maxLength) => {
    if (!title) return '';
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
  };


  return (
    <div
      className='blog-card-main-container'
      onMouseEnter={() => handleButtonsAnimation(ind)}
      onMouseLeave={handleButtonAnimEnd}
      onClick={navigateToSinglePage}
    >
      <div className='blog-card-main-image-div'>
        <LazyLoadImage effect='blur' src={blogMainImage} alt='main' className='blog-card-main-image-class' />
      </div>
      <div className='blog-card-content-div'>
        <Link className='blog-card-category'>{blogCategory}</Link>
        <h3 className='blog-card-main-title'> {truncateTitle(blogTitle, maxLength)} </h3>
        <div className={`blog-card-footer-buttons ${animButton === ind ? 'increase-padding-anim' : ''}`}>
          <button className='blog-card-read-more-btn'>
            Read more
            <img src={arrowRight} alt='arrow' className='blog-card-btn-arrow' />
          </button>
          <p className='blog-card-post-date'>{blogPostDate}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
