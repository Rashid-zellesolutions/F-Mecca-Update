import React, { useState, useRef, useEffect } from 'react';
import './BestSeller.css';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../utils/api';
import axios from 'axios';

// Assets
import arrowLeft from '../../../Assets/icons/arrow-left.png'
import arrowRight from '../../../Assets/icons/arrow-right.png'
import bestSellerMobileBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/mobile-view-main-image.png';

// Components
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import BestSellerProductCardShimmer from '../BestSellerProductCard/BestSellerProductCardShimmer';

const BestSeller = ({ categoryData }) => {

    // States and variables
    const [loading, setLoading] = useState(false);
    const [mainBanner, setMainBanner] = useState();
    const [products, setAllProducts] = useState();
    const [currentSlug, setCurrentSlug] = useState();
    const [data, setData] = useState(categoryData)
    const bestSellerNav = ['Living Room', 'Bedroom', 'Dining Room']
    const [activeItem, setActiveItem] = useState(0);
    const navigate = useNavigate()

    // Functions
    const getBestSellerProducts = async (slug) => {
        const api = `/api/v1/products/by-category?categorySlug=${slug}&best_selling_product=1`
        try {
            setLoading(true);
            const response = await axios.get(`${url}${api}`)
            // console.log("response best seller", response.data.products)
            setAllProducts(response.data.products);
            setLoading(false);
            console.log(response.data)

        } catch (error) {
            console.error("error geting best seller products", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        setMainBanner(categoryData.categories[0].image)
        setCurrentSlug(categoryData.categories[0].slug)
    }, []);

    useEffect(() => {
        getBestSellerProducts(currentSlug)
    }, [currentSlug]);

    const handleActiveItem = (index, item) => {
        setActiveItem(index);
        setMainBanner(item.image)
        setCurrentSlug(item.slug)
    };

    const handleProductClick = (item) => {
        navigate(`/single-product/${item.slug}`, { state: { products: item } });
    }

    const itemPerPage = 6
    const maxIndex = Math.ceil(products && products.length / itemPerPage) - 1;
    const [currentIndex, setCurrentIndex] = useState(1)
    const handlePageChange = (index) => {
        setCurrentIndex(index)
    }

    // Mobile view script
    const [mobiIndex, setMobIndex] = useState(0)
    const handleMobileNavClick = (index) => {
        setMobIndex(index);
    }

    const mobileItemPerPage = 1
    const mobileMaxIndex = Math.ceil(products && products.length / mobileItemPerPage) - 1;
    const [mobCurrentIndex, setMobCurrentIndex] = useState(1)
    const handleMobilePageChange = (index) => {
        setMobCurrentIndex(index)
    }

    const handleMobileSliderNext = (index) => {
        setMobCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % mobileItemPerPage;
            return nextIndex
        })
    }

    const handleMobileSliderPrev = (index) => {
        setMobCurrentIndex((prevIndex) => {
            const previusIndex = (prevIndex - 1) % mobileItemPerPage;
            return previusIndex;
        })
    }

    return (
        <div className={`category-besst-seller-main-container `}>
            {/* {loading && <Loader />} */}
            <div className='category-best-seller-and-banner-container'>

                <div className='category-best-seller-cards-section'>

                    <div className='category-best-seller-menu'>
                        <h3>Best Seller</h3>
                        {categoryData ? (
                            <div className='category-best-seller-menu-items'>
                                {data.categories.map((item, index) => (
                                    <p key={index} className={activeItem === index ? 'active' : ''} onClick={() => handleActiveItem(index, item)}>{item.Heading}</p>
                                ))}
                            </div>
                        ) : <></>}
                    </div>

                    <div className='products-slider-container'>
                        {!loading ? <div className='best-seller-slider' style={{ transform: `translateX(-${(currentIndex / maxIndex) * 0}%)` }}>
                            {products && products.slice(currentIndex, currentIndex + itemPerPage).map((item, index) => (
                                <BestSellerProductCard
                                    key={index}
                                    productData={item}
                                    productMainImage={item.image.image_url}
                                    starIcon={item.ratingStars}
                                    reviews={item.reviewCount}
                                    productName={item.name}
                                    oldPrice={item.regular_price}
                                    newPrice={item.sale_price}
                                    handleCardClicked={() => handleProductClick(item)}
                                />
                            ))}
                        </div> :

                            <div className='best-seller-slider'>


                                <BestSellerProductCardShimmer />
                                <BestSellerProductCardShimmer />
                                <BestSellerProductCardShimmer />
                                <BestSellerProductCardShimmer />
                                <BestSellerProductCardShimmer />
                                <BestSellerProductCardShimmer />


                            </div>
                        }
                    </div>
                </div>

                <div className='category-best-seller-banners-section'>
                    <img src={url + categoryData.cover_img.image_url} className='banner_one' alt='banner one' />
                    <img src={mainBanner && (url + mainBanner.image_url)} alt='banner two' />
                </div>

            </div>

            <div className='mobile-view-category-best-seller'>
                <div className='mobile-view-category-best-seller-heading-section'>
                    <h3>Best Seller</h3>
                </div>
                <div className='mobile-view-category-best-seller-nav-and-banner'>
                    <img src={bestSellerMobileBanner} alt='mobile-main-banner' />
                    <div className='mobile-view-category-best-seller-nav-items'>
                        {bestSellerNav.map((items, index) => (
                            <p
                                key={index}
                                onClick={() => { handleMobileNavClick(index); handleActiveItem(index) }}
                                className={`mobile-view-nav-link ${mobiIndex === index ? 'mobile-view-nav-active' : ''}`}

                            >
                                {items}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='mobile-view-category-best-seller-card-section'>
                    <button
                        className='mobile-view-best-seller-slider-arrows mobile-view-best-seller-arrow-left'
                        onClick={() => handleMobileSliderPrev(mobCurrentIndex)}
                    >
                        <img src={arrowLeft} alt='left-arrow' />
                    </button>
                    <div className='mobile-view-best-seller-slider' style={{ transform: `translateX(-${(mobCurrentIndex / mobileItemPerPage) * 100}%)` }}>
                        {products && products.slice(mobCurrentIndex, mobCurrentIndex + mobileItemPerPage).map((item, index) => (
                            <BestSellerProductCard
                                key={index}
                                productData={item}
                                productMainImage={item.mainImage}
                                starIcon={item.ratingStars}
                                reviews={item.reviewCount}
                                productName={item.productTitle}
                                oldPrice={item.priceTag}
                                newPrice={item.priceTag}
                                handleCardClicked={() => handleProductClick(item)}
                            />
                        ))}
                    </div>
                    <button
                        className='mobile-view-best-seller-slider-arrows mobile-view-best-seller-arrow-right'
                        onClick={() => handleMobileSliderNext(mobCurrentIndex)}
                    >
                        <img src={arrowRight} alt='right arrow' />
                    </button>
                </div>
                <div className='mobile-view-category-pagination-dots'>
                    {Array.from({ length: maxIndex }, (_, index) => (
                        <span
                            key={index}
                            className={`category-dot ${mobCurrentIndex === index ? 'category-dot-active-active' : ''}`}
                            onClick={() => handleMobilePageChange(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <div className='category-pagination-dots'>
                {Array.from({ length: maxIndex }, (_, index) => (
                    <span
                        key={index}
                        className={`category-dot ${currentIndex === index ? 'category-dot-active-active' : ''}`}
                        onClick={() => handlePageChange(index)}
                    ></span>
                ))}
            </div>
        </div>

    )
}

export default BestSeller
