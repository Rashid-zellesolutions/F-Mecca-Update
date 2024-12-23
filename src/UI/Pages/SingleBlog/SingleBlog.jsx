import React from 'react'
import './SingleBlog.css'
import BlogHead from '../../Components/Blogs-Components/BlogsHead/BlogHead'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import facebook from '../../../Assets/icons/fb-icon.png'
import youtube from '../../../Assets/icons/yt-icon.png'
import instaGram from '../../../Assets/icons/insta-icon.png'
import tiktok from '../../../Assets/icons/tik-tok-icon.png'
import mail from '../../../Assets/icons/main-icon.png'
import TrandingBlogs from '../../Components/Blogs-Components/TrandingBlogs/TrandingBlogs'
import FirstToKnow from '../../Components/Blogs-Components/FirstToKnow/FirstToKnow'
import SearchTag from '../../Components/Blogs-Components/SearchTags/SearchTag'
import NextUp from '../../Components/Blogs-Components/NextUp/NextUp'
import { url } from '../../../utils/api'
import { useBlog } from '../../../context/BlogsContext/blogsContext'

const SingleBlog = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const { id } = useParams();
    const {blogs} = useBlog();
    let singleBlog = location.state || {}
    if (!singleBlog.id) {
        // If `singleBlog` is not available in `location.state`, find it in the `blogs` array
        singleBlog = blogs.find((blog) => blog.id === parseInt(id)) || {};
    }
    console.log("single blog", singleBlog)

    const socialLinks = [
        { icon: facebook, link: '#' },
        { icon: youtube, link: '#' },
        { icon: instaGram, link: '#' },
        { icon: tiktok, link: '#' },
        { icon: mail, link: '#' },
    ]

    const extractTextFromHTML = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        return doc.body.textContent || doc.body.innerText
    }
    // const { blogs } = useBlog()
    const filteredBlogs = blogs.filter((item) => item.id !== singleBlog.id);

    // Get Surrouding Blogs
    // const getSurroundingBlogs = (id) => {
    //     const currentIndex = blogs.findIndex((item) => item.id === id); // Get the index of the blog
    //     console.log("current blog index", currentIndex);

    //     if (currentIndex === -1) {
    //         return { before: null, after: null }; // If blog is not found
    //     }

    //     const beforeIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null; // Index before the current one
    //     const afterIndex = currentIndex + 1 < blogs.length ? currentIndex + 1 : null; // Index after the current one

    //     console.log("beforeIndex", beforeIndex);
    //     console.log("afterIndex", afterIndex);

    //     return { beforeIndex, afterIndex };
    // }


    const getSurroundingBlogs = (id) => {
        const currentIndex = blogs.findIndex((item) => item.id === id); // Find the index of the current blog
        console.log("current blog index", currentIndex);

        if (currentIndex === -1) {
            return { beforeId: null, afterId: null }; // If the blog is not found
        }

        const beforeId = currentIndex === 0 ? null : blogs[currentIndex - 1].id; 
        const beforeIndex = beforeId !== null ? blogs.findIndex((item) => item.id === beforeId) : null
        const afterId = currentIndex + 1 < blogs.length ? blogs[currentIndex + 1].id : null;
        const afterIndex = afterId !== null ? blogs.findIndex((item) => item.id === afterId) : null;

        return { beforeIndex, afterIndex };

        // Calculate beforeIndex and afterIndex
    // const beforeIndex = currentIndex === 0 ? null : currentIndex - 1; // If first blog, no previous
    // const afterIndex = currentIndex + 1 < blogs.length ? currentIndex + 1 : null; // If last blog, no next

    // return { beforeIndex, afterIndex };
    };


    // const { beforeId, afterId } = getSurroundingBlogs(singleBlog.id);
    const { beforeIndex, afterIndex } = getSurroundingBlogs(singleBlog.id);
    console.log("beforeIndex", beforeIndex);
    console.log("afterIndex", afterIndex);

    const navigateToSingleBlog = (item) => {
        console.log("item", item)
        navigate(`/single-blog/${item.id}`, { state: item });
    }



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
                        <img src={`${url}${singleBlog?.img}`} alt='single-blog-image' className='single-blog-main-image' />
                    </div>
                    <div className='single-blog-columns'>
                        {/* {splitColums} */}
                        {extractTextFromHTML(singleBlog.blogDescription)}
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
                    <div className='prev-and-next-blog-section' >
                        <div className='prev-single-blog' onClick={() => navigateToSingleBlog(blogs[beforeIndex])}>
                            <p>Previous Blog</p>
                            {beforeIndex !== null ? (
                                <h3>{blogs[beforeIndex].title}</h3> // Show the title of the "before" blog
                            ) : (
                                <h3>No Prev Blog</h3>
                            )}
                            {/* <h3>
                        Bob’s Supports Operation Homefront Transitional Housing (Apartments)
                    </h3> */}
                        </div>
                        <div className='next-single-blog' onClick={() => navigateToSingleBlog(blogs[afterIndex])}>
                            <p>Next Blog</p>
                            {afterIndex !== null ? (
                                <h3>{blogs[afterIndex].title}</h3> // Show the title of the "before" blog
                            ) : (
                                <h3>No Prev Blog</h3>
                            )}
                            {/* <h3>Bob’s Supports Operation Homefront Transitional Housing (Apartments)</h3> */}
                        </div>
                    </div>
                </div>
                <div className='single-blog-right-content'>
                    <TrandingBlogs blogs={filteredBlogs} />
                    <FirstToKnow />
                    <SearchTag />
                    <NextUp />
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
