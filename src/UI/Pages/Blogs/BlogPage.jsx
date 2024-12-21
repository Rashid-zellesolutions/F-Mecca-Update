import React, { useState } from 'react'
import './BlogPage.css';
import BlogHead from '../../Components/Blogs-Components/BlogsHead/BlogHead'
import AllBlogs from '../../Components/Blogs-Components/AllBlogs/AllBlogs';
import BlogPagination from '../../Components/Blogs-Components/BlogsPaginations/BlogPagination';
import blogOneImg from '../../../Assets/blogs-images/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import blogTwoImg from '../../../Assets/blogs-images/Some-Basics-on-cleaning-Leather-Furnitur.png';
import blogThreeImg from '../../../Assets/blogs-images/image.png';

const BlogPage = () => {

  const blogData = [
    {id: 1, title: 'Benefits Of Accent Furniture Benefits Of Accent 1', category: 'Dining Room', img: blogOneImg, postDate: '20 May 2024'},
    {id: 2, title: 'Keelin McAllister Named Recipient of 2024 Women in Supply Chain Award', category: 'Dining Room', img: blogTwoImg, postDate: '20 May 2024'},
    {id: 3, title: 'Benefits Of Accent Furniture Benefits Of Accent 3', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 4, title: 'Benefits Of Accent Furniture Benefits Of Accent 4', category: 'Dining Room', img: blogOneImg, postDate: '20 May 2024'},
    {id: 5, title: 'Benefits Of Accent Furniture Benefits Of Accent 5', category: 'Dining Room', img: blogTwoImg, postDate: '20 May 2024'},
    {id: 6, title: 'Benefits Of Accent Furniture Benefits Of Accent 6', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 7, title: 'Benefits Of Accent Furniture Benefits Of Accent 7', category: 'Dining Room', img: blogOneImg, postDate: '20 May 2024'},
    {id: 8, title: 'Benefits Of Accent Furniture Benefits Of Accent 8 ', category: 'Dining Room', img: blogTwoImg, postDate: '20 May 2024'},
    {id: 9, title: 'Benefits Of Accent Furniture Benefits Of Accent 9', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 10, title: 'Benefits Of Accent Furniture Benefits Of Accent 10', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 11, title: 'Benefits Of Accent Furniture Benefits Of Accent 11', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 12, title: 'Benefits Of Accent Furniture Benefits Of Accent 12', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 13, title: 'Benefits Of Accent Furniture Benefits Of Accent 13', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 14, title: 'Benefits Of Accent Furniture Benefits Of Accent 14', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 15, title: 'Benefits Of Accent Furniture Benefits Of Accent 15', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 16, title: 'Benefits Of Accent Furniture Benefits Of Accent 16 ', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 17, title: 'Benefits Of Accent Furniture Benefits Of Accent 17', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 18, title: 'Benefits Of Accent Furniture Benefits Of Accent 18', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 19, title: 'Benefits Of Accent Furniture Benefits Of Accent 19', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 20, title: 'Benefits Of Accent Furniture Benefits Of Accent 20', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 21, title: 'Benefits Of Accent Furniture Benefits Of Accent 21', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 22, title: 'Benefits Of Accent Furniture Benefits Of Accent 22', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 23, title: 'Benefits Of Accent Furniture Benefits Of Accent 23', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 24, title: 'Benefits Of Accent Furniture Benefits Of Accent 24', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 25, title: 'Benefits Of Accent Furniture Benefits Of Accent 25', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 26, title: 'Benefits Of Accent Furniture Benefits Of Accent 26', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
    {id: 27, title: 'Benefits Of Accent Furniture Benefits Of Accent 27 ', category: 'Dining Room', img: blogThreeImg, postDate: '20 May 2024'},
  ]

  const blogsPerPage = 9; // Number of blogs to show per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalBlogs = blogData?.length || 0;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  // Calculate the blogs to show for the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const blogsToShow = blogData.slice(startIndex, endIndex);

  // Handle next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {  
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='blogs-page-main-container'>
      <div className='blogs-page-main-heading-div'>
        <h3 className='blogs-page-main-heading'>Exciting Blogs Created by <span> Furniture Mecca </span></h3>
        <h3 className='mobile-view-blog-page-main-heading'>Exciting Blogs</h3>
      </div>
      <BlogHead />
      <AllBlogs blogData={blogsToShow}/>
      <BlogPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  )
}

export default BlogPage
