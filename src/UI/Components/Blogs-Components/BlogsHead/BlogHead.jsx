import React from 'react'
import './BlogHead.css'

const BlogHead = () => {

    const blogCategories = [
        {name: 'All Blogs', type: 'all-blogs'},
        {name: 'Organization', type: 'organization'},
        {name: 'Styles', type: 'styles'},
        {name: 'Rooms', type: 'rooms'},
        {name: 'DIY', type: 'diy'},
        {name: 'Outdoors', type: 'outdoor'},
        {name: 'Enteraining', type: 'entertainment'},
        {name: 'Guides', type: 'guide'},
        {name: 'Renovations', type: 'renovation'},
    ]
    
  return (
    <>
    <div className='blog-head-main-container'>
      {blogCategories.map((item, index) => (
        <p className='blog-head-category-type'>{item.name}</p>
      ))}
    </div>
    <div className='mobile-view-blog-head-main-container'>
      {blogCategories.slice(0, 6).map((item, index) => (
        <p className='mobile-view-blog-head-category-type'>{item.name}</p>
      ))}
    </div>
    </>
  )
}

export default BlogHead
