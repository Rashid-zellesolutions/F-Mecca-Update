import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BlogSlider.css';
import diningRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-on-cleaning-Leather-Furniture 1.png';
import livingRoomBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Some-Basics-On-Keeping-Your-Living-Room-Furniture-Clean 1.png';
import mattressBlogImage from '../../../Assets/Furniture Mecca/Landing Page/blogs/Perks-Of-Using-High-Quality-Mattresses-For-Sleeping 1.png';
import BlogCard from './BlogCard';
import leftArrow from '../../../Assets/icons/arrow-left-charcol.png'
import rightArrow from '../../../Assets/icons/right-arrow.png'

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`blog-slider-arrow blog-slider-arrow-left ${className}`} >
      <img src={leftArrow} alt='arrow' />
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`blog-slider-arrow blog-slider-arrow-right ${className}`} >
      <img src={rightArrow} alt='arrow' />
    </div>
  )
}


const BlogSlider = () => {

  const blogsData = [
    { img: diningRoomBlogImage, category: 'Dining Room', title: 'Advantages Of Purchasing a Firm Mattress', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: livingRoomBlogImage, category: 'Bed Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: mattressBlogImage, category: 'Mattresses', title: 'How To Choose the Ideal Furniture Shop for Your House', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Loveseats', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Kids Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Living Room', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Accent Furniture', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Rugs', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Tent Sale', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
    { img: diningRoomBlogImage, category: 'Outlets', title: 'Benifits Of Accent Furniture', createdBy: 'Furniture Mecca', comments: '4 comments' },
  ]

  const maxLength = 50;
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className='blogs-main-container'>
      <h3>Exciting Blogs Created By <span>Furniture Mecca</span></h3>
      <p className='blogs-main-para'>
        Captivating narratives by Jasons Furniture Outlet, where each blog tells a unique tale of style,
        comfort, and functionality. Discover the enchanting stories behind every furnishing at The Furniture Depots,
        turning your home into a haven filled with both charm and character.
      </p>
      <div className='blogs-slider-main-container'>
        <Slider {...settings}>
          {blogsData.map((item, index) => (
            <div key={index} className='blog-cards-container'>
              <BlogCard key={index} img={item.img} category={item.category} title={truncateTitle(item.title, maxLength)} createdBy={item.createdBy} comments={item.comments} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogSlider;
