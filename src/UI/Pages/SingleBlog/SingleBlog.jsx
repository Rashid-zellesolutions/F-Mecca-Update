import React from 'react'
import './SingleBlog.css'
import BlogHead from '../../Components/Blogs-Components/BlogsHead/BlogHead'
import { Link, useLocation } from 'react-router-dom'
import facebook from '../../../Assets/icons/fb-icon.png'
import youtube from '../../../Assets/icons/yt-icon.png'
import instaGram from '../../../Assets/icons/insta-icon.png'
import tiktok from '../../../Assets/icons/tik-tok-icon.png'
import mail from '../../../Assets/icons/main-icon.png'    
import TrandingBlogs from '../../Components/Blogs-Components/TrandingBlogs/TrandingBlogs'
import FirstToKnow from '../../Components/Blogs-Components/FirstToKnow/FirstToKnow'
import SearchTag from '../../Components/Blogs-Components/SearchTags/SearchTag'
import NextUp from '../../Components/Blogs-Components/NextUp/NextUp'

const SingleBlog = () => {
    const location = useLocation()
    const singleBlog = location.state || {}
    console.log("single blog", singleBlog)
    const blogColumnData = `Manchester, CT – September 16, 2024 – Bob’s Discount Furniture, one of the fastest growing omni-channel furniture retailers in the country, is proud to announce today that Supply & Demand Chain Executive has named Keelin McAllister, Director of Sales and Operations Planning, Bob’s Discount Furniture, as a recipient of the 2024 Women in Supply Chain award.
                            In her role with Bob’s, Keelin has successfully led the development of a comprehensive Sales and Operating Plan, accomplishing the goal of aligning the customer demand forecast with supply and inventory plans.
                            Since joining Bob’s Discount Furniture in 2020, Keelin has done an exceptional job at translating complex messages into actionable, bite-sized pieces for various teams across the organization.
                            “As a valued team member, Keelin has done an amazing job putting her ideas into action and has been able to rally broad cross-functional support throughout our organization. This includes lifting new and complex concepts into our company culture at all levels in the organization,” said Toni Spinelli-Perrelle, Vice President of Merchandise Planning, Bob’s Discount Furniture.” Keelin’s ability to synthesize both strategic and tactical initiatives and results across the demand and supply planning disciplines has earned her this wonderful honor.”  
                            Her resourcefulness is highly admired by her peers and demonstrated by her ability to routinely conquer difficult challenges. Keelin is an extremely reliable and valuable partner to many at Bob’s, helping her team leverage unprecedented ideas to gain a competitive edge in the marketplace.
                            “Working for Bob’s lets me build out reporting, processes, and work streams that have a huge impact on our business,” said Keelin. “I love that our growth allows me to pivot quickly and always have new projects to jump into. “Currently I am excited about incorporating our Open-to-Buy process into our monthly S&OP process.  This will help us with minimize our risk and maximize our opportunity for continued growth.”
                            Supply & Demand Chain Executive, a supply chain publication focusing on trucking, warehousing, packaging, procurement, risk management, professional development and more, created the Women in Supply Chain Award to honor female supply chain leaders and executives whose accomplishments, mentorship and examples set a foundation for women in all levels of a company’s supply chain network. Keelin was submitted under the Rising Stars category, which recognizes young or newer professionals (39 and under) whose achievements, hard work, and vision have shaped the supply chain network.
                            To view the full list of 2024 Women in Supply Chain Award honorees, click here.`

    const splitColums = blogColumnData.split(".").map((sentence, index) => {
        if(sentence.trim()){
            return <div>
                        <p key={index} className='splited-paras'>{sentence.trim()}</p>
                        <br />
            </div>
        }
    })
    console.log("splited column", splitColums)

    const socialLinks = [
        {icon: facebook, link: '#'},
        {icon: youtube, link: '#'},
        {icon: instaGram, link: '#'},
        {icon: tiktok, link: '#'},
        {icon: mail, link: '#'},
    ]
  return (
    <div className='single-blog-main-container'>
      <div className='single-blog-main-heading-div'>
        <h3 className='single-blog-main-heading'>Exciting Blogs Created by <span> Furniture Mecca </span></h3>
        <h3 className='mobile-view-single-blog-main-heading'>Exciting Blogs</h3>
      </div>
      <BlogHead />
      <div className='single-blog-content-section'>
        <div className='single-blog-left-content'>
            <div className='single-blog-title-and-publish-date'>
                <h3 className='single-blog-name'>{singleBlog.title}</h3>
                <p className='single-blog-post-date'>{singleBlog.postDate}</p>
            </div>
            <div className='single-blog-main-image-div'> 
                <img src={singleBlog?.img} alt='single-blog-image' className='single-blog-main-image' />
            </div>
            <div className='single-blog-columns'>
                {splitColums}
            </div>
            <div className='single-blog-social-links-div'>
                <p>Share this: </p>
                <div className='single-blog-social-icons'>
                    {socialLinks.map((items, index) => (
                        <Link className='social-single-icon'>
                            <img src={items.icon} alt='cosial-icon' className='social-icon-img' />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='prev-and-next-blog-section'>
                <div className='prev-single-blog'>
                    <p>Previous Blog</p>
                    <h3>
                        Bob’s Supports Operation Homefront Transitional Housing (Apartments)
                    </h3>
                </div>
                <div className='next-single-blog'>
                    <p>Next Blog</p>
                    <h3>Bob’s Supports Operation Homefront Transitional Housing (Apartments)</h3>
                </div>
            </div>
        </div>
        <div className='single-blog-right-content'>
            <TrandingBlogs />
            <FirstToKnow />
            <SearchTag />
            <NextUp />
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
