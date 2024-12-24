import React from 'react'
import './TrandingBlogs.css'
import { url } from '../../../../utils/api'
import {useNavigate } from 'react-router-dom'

const TrandingBlogs = ({blogs}) => {
    const navigate = useNavigate();
    const navigateToSingleBlog = (item) => {
        navigate(`/single-blog/${item.id}`, {state:  item});
    }

    return (
        <div className='tranding-blogs-main-section'>
            <h3>Trending</h3>
            <div className='tranding-blogs-cards'>
                {blogs?.map((item, index) => (
                    <div className='tranding-single-blog-card' onClick={() => navigateToSingleBlog(item)}>
                        <img src={`${url}${item.img}`} alt='imm' className='tranding-blog-man-image' />
                        <div className='tranding-blog-content'>
                            <h3 className='tranding-blog-name'>{item.title}</h3>
                            <p className='tranding-blog-post-date'>{item.postDate}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TrandingBlogs
