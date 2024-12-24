import React, {useState} from 'react';
import './AllBlogs.css';
import BlogCard from '../BlogCard/BlogCard';
import BlogCardShimmer from '../../Loaders/blogCardShimmer/BlogCardShimmer';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../../utils/api';

const AllBlogs = ({blogData}) => {

  // States and Variables
  const navigate = useNavigate()

  // Functions
  const handleNavigate = (item) => {
    navigate(`/single-blog/${item.id}`, {state:  item});
  }

  return (
    <div className='blog-page-blog-cards-main-container'>
      {blogData && blogData.length >= 0 ? (
        blogData.slice(0, 9).map((item, index) => (
        <div key={index} className='blog-cards-col'>
          <BlogCard
            singleBlog={item} 
            blogMainImage={`${url}${item.img}`}
            ind={index}
            blogCategory={item.category}
            blogTitle={item.title}
            blogPostDate={item.postDate}
            navigateToSinglePage={() => handleNavigate(item)}
          />
        </div>  
      ))
      ) : (
        Array.from({ length: 9 }).map((_, index) => (
            <BlogCardShimmer />
          ))
      )
    }
    </div>
  )
}

export default AllBlogs
