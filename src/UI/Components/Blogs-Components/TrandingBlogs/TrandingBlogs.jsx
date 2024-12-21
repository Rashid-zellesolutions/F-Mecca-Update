import React from 'react'
import './TrandingBlogs.css'
import trandingBlogImage from '../../../../Assets/blogs-images/tranding-blog.png'

const TrandingBlogs = () => {
    const trandingData = [
        { img: trandingBlogImage, name: `Mid-Century Modern Tricks & TipsMid-Century`, date: '31-Dec-2023' },
        { img: trandingBlogImage, name: `Mid-Century Modern Tricks & TipsMid-Century`, date: '31-Dec-2023' },
        { img: trandingBlogImage, name: `Mid-Century Modern Tricks & TipsMid-Century`, date: '31-Dec-2023' },
    ]
    return (
        <div className='tranding-blogs-main-section'>
            <h3>Tranding</h3>
            <div className='tranding-blogs-cards'>
                {trandingData.map((item, index) => (
                    <div className='tranding-single-blog-card'>
                        <img src={item.img} alt='imm' className='tranding-blog-man-image' />
                        <div className='tranding-blog-content'>
                            <h3 className='tranding-blog-name'>{item.name}</h3>
                            <p className='tranding-blog-post-date'>{item.date}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default TrandingBlogs
