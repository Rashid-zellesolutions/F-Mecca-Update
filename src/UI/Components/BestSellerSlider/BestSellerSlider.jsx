import React, { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@splidejs/react-splide/css'
import './BestSellerSlider.css';
import BestSellerSliderMainBanner from '../../../Assets/Furniture Mecca/Landing Page/best seller products/Home Page Banner 396x595.jpg';
import { useNavigate } from 'react-router-dom';
import BestSellerProductCard from '../BestSellerProductCard/BestSellerProductCard';
import star from '../../../Assets/icons/Star 19.png'

import leftArrow from '../../../Assets/icons/arrow-left-white.png';
import rightArrow from '../../../Assets/icons/right-arrow-white.png';
import axios from 'axios';
import { url } from '../../../utils/api';
import { useSingleProductContext } from '../../../context/singleProductContext/singleProductContext';
import { useCart } from '../../../context/AddToCart/addToCart';
import { useList } from '../../../context/wishListContext/wishListContext';
import { toast } from 'react-toastify';
import BestSellerProductCardShimmer from '../BestSellerProductCard/BestSellerProductCardShimmer';

const BestSellerPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`best-seller-arrow ${className}`} >
            <img src={leftArrow} alt='arrow' />
        </div>
    )
}

function BestSellerNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`best-seller-arrow ${className}`} >
            <img src={rightArrow} alt='arrow' />
        </div>
    )
}




const BestSellerSlider = () => {

    // States and Variables
    const navigate = useNavigate()
    const [allProducts, setAllProducts] = useState([])
    const [bestSellerNav1, setBestSellerNav1] = useState([
        {
            heading: "Living Room",
            image: BestSellerSliderMainBanner,
            slug: "living-room"
        },
        {
            heading: "Bedroom",
            image: BestSellerSliderMainBanner,
            slug: "bedroom"
        },
        {
            heading: "Dining Room",
            image: BestSellerSliderMainBanner,
            slug: "dining-room"
        },
    ]);
    const [currentSlug, setCurrentSlug] = useState();
    const [loading, setLoading] = useState(false);
    const getBestSellerProducts = async (slug) => {
        const api = `/api/v1/products/get-deal-of-month-products?slug=${slug}`
        try {
            setLoading(true);
            const response = await axios.get(`${url}${api}`)
            console.log("response best seller", response.data.products)
            setAllProducts(response.data.products);
            setLoading(false);

        } catch (error) {
            console.error("error geting best seller products", error);
            setLoading(false);
        }
    }
    const getBestSellerData = async () => {
        const api = `/api/v1/best-seller-home/get`
        try {
            const response = await axios.get(`${url}${api}`)
            setBestSellerNav1(response.data)
            setCurrentSlug(response.data[0].slug)
            getBestSellerProducts(response.data[0].slug);

        } catch (error) {
            console.error("error geting best seller products", error);
        }
    }
    useEffect(() => {
        // getBestSellerProducts()
        getBestSellerData()
    }, [])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage] = useState(6);
    const [totalPages] = useState(Math.ceil(allProducts.length / cardsPerPage));
    const [applyFilter, setApplyFilter] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [activeItem, setActiveItem] = useState(0)
    const [MobileActiveIndex, setMobileActiveIndex] = useState(0)
    const [mobIndex, setMobIndex] = useState(0)
    // const [cardIndex, setCardIndex] = useState(0)
    const { addSingleProduct } = useSingleProductContext();
    const { addToCart } = useCart()
    const { addToList, isInWishList, removeFromList } = useList()
    const notify = (str) => toast.success(str);
    const notifyRemove = (str) => toast.error(str)
    const [listed, setListed] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    // Functions
    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    const handleMobileActiveindex = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
        const handleResizer = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizer);
        return () => window.removeEventListener("resize", handleResizer)
    })

    // product slice to show 6 product maxx
    const handleCardClicked = (item) => {
        // console.log("item clicked", item)
        // addSingleProduct(item)
        addSingleProduct(item)
        addToCart(item)
        navigate(`/single-product/${item.slug}`, { state: item })
        // addQuantityIntoProduct(item.uid, setAllProducts, allProducts)
        // console.log("product uid", item.uid)
        // console.log("added quantity into payload", allProducts)

    }

    const handleWishlisted = (item) => {
        console.log("to delete uid", item.uid)
        if (isInWishList(item.uid)) {
            removeFromList(item.uid);
            notifyRemove('Removed from wish list', {
                autoClose: 10000,
                // position: toast.POSITION.BOTTOM_CENTER,
                className: "toast-message",
            })
        } else {
            addToList(item); // Add if not in wishlist
            notify("added to wish list", {
                autoClose: 10000,
            })
        }
    }

    const handleMobileNavClick = (index) => {
        setApplyFilter(true);
        setTimeout(() => {
            setApplyFilter(false);
            setMobIndex(index)
        }, 1000)
    }

    // Get the slice of products to display based on the current page
    const getDisplayedCards = () => {
        const start = currentPage * cardsPerPage;
        const end = start + cardsPerPage;
        const publishedProductes = allProducts.filter(product => product.status === 'published');
        const productWithDiscount = publishedProductes.map((product) => {
            let newPrice = parseFloat(product.regular_price);
            if (product.discount && product.discount.is_discountable === 1) {
                const oldPrice = parseFloat(product.regular_price); // Convert regular_price to a number
                const discountValue = parseFloat(product.discount.discount_value);
                // console.log("discount value", discountValue, parseFloat(product.regular_price))

                // Calculate the new price based on the discount type
                if (product.discount.discount_type === 'percentage' && !isNaN(discountValue)) {
                    newPrice = parseFloat(product.regular_price) - (parseFloat(product.regular_price) * (discountValue / 100));
                    // console.log("new price", oldPrice * (discountValue / 100));
                    // console.log("old price", oldPrice)
                    newPrice = parseFloat(newPrice.toFixed(2));
                } else if (product.discount.discount_type === 'currency' && !isNaN(discountValue)) {
                    newPrice = oldPrice - discountValue;
                    newPrice = parseFloat(newPrice.toFixed(2));
                }
                //else if (product.discount.discount_type === 'fixed') 
                else {
                    // newPrice = oldPrice - parseFloat(product.discount.discount_value);
                    newPrice = oldPrice;
                }
            }
            return {
                ...product,
                newPrice
            }
        })

        return productWithDiscount.slice(start, end);
    };

    const ratingStars = [
        { icon: star },
        { icon: star },
        { icon: star },
        { icon: star },
        { icon: star }
    ]

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <BestSellerNextArrow to="next" />,
        prevArrow: <BestSellerPrevArrow to="prev" />,
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
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    useEffect(() => {
    }, [MobileActiveIndex])


    return (
        <div className="best-seller-slider-container">

            <div className='best-seller-imaage-and-cards'>
                <div className='best-seller-slider-main-banner'>
                    <img src={url + bestSellerNav1[activeItem].image.image_url} alt='main banner' />
                </div>
                <div className='best-seller-slider-div'>
                    <div className='best-seller-slider-menu-bar'>
                        <h3>Best Seller</h3>
                        <div className='best-seller-menu-bar'>
                            {bestSellerNav1.map((item, index) => (
                                <p
                                    key={index}
                                    className={activeItem === index ? 'active' : ''}
                                    onClick={() => {
                                        getBestSellerProducts(item.slug)
                                        handleActiveItem(index)
                                    }}
                                >
                                    {item.Heading}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='best-seller-slider-main-banner-mobile-view'>
                        <img src={url + bestSellerNav1[activeItem].image.image_url} alt='main banner' />
                    </div>
                    <div className='products-slider-container'>

                        <div className='best-seller-slider-wrapper' style={{ overflow: 'hidden' }}>
                            <div
                                className='best-seller-slider'
                                style={{
                                    transform: `translateX(-${(currentIndex / totalPages) * 100}%)`
                                }}>
                                {/* {products.slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => ( */}
                                {!loading ?
                                    getDisplayedCards().slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => (
                                        <BestSellerProductCard
                                            productData={item}
                                            isDiscountable={item.discount.is_discountable === 1 ? true : false}
                                            key={index}
                                            productMainImage={item.images?.[0]?.image_url}
                                            starIcon={ratingStars}
                                            reviews={'200'}
                                            productName={item.name}
                                            oldPrice={item.regular_price}
                                            newPrice={item.newPrice}
                                            listed={listed}
                                            handleCardClicked={() => handleCardClicked(item)}
                                            handleWishListClicked={() => handleWishlisted(item)}
                                        />
                                    )) :
                                    <>
                                        <BestSellerProductCardShimmer />
                                        <BestSellerProductCardShimmer />
                                        <BestSellerProductCardShimmer />
                                        <BestSellerProductCardShimmer />
                                        <BestSellerProductCardShimmer />
                                        <BestSellerProductCardShimmer />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Seller Mobile View */}
            <div className='mobile-view-best-seller-main-container'>
                <div className={`mobile-view-best-seller-loading ${applyFilter ? 'show-mobile-view-best-seller-filter' : ''}`}></div>
                <h3 className='mobile-view-best-seller-heading'>Best Seller</h3>
                <div className='mobile-view-nav-and-card-contaner'>
                        <img src={url + bestSellerNav1[mobIndex].image.image_url} alt='mobile-cards-banner' className='mobile-category-menu-banner' />

                    <div className='mobile-view-best-seller-menu-items'>
                        {bestSellerNav1.map((items, index) => (
                            <p
                                key={index}
                                className={`mobile-view-best-seller-nav ${mobIndex === index ? "mobile-view-nav-active" : ""}`}
                                onClick={() => {
                                    handleMobileNavClick(index)
                                    handleMobileActiveindex(index)
                                    getBestSellerProducts(items.slug)
                                }}
                            >
                                {items.Heading}
                            </p>
                        ))}
                    </div>

                    <div className='mobile-view-slider-cards'>
                        {!loading ? (
                            <Slider {...settings}>
                                {allProducts.map((item, index) => (
                                    <BestSellerProductCard
                                        productData={item}
                                        isDiscountable={item.discount.is_discountable === 1 ? true : false}
                                        key={index}
                                        productMainImage={item.images?.[0]?.image_url}
                                        starIcon={ratingStars}
                                        reviews={'200'}
                                        productName={item.name}
                                        oldPrice={item.regular_price}
                                        newPrice={item.sale_price}
                                        listed={listed}
                                        handleCardClicked={() => handleCardClicked(item)}
                                        handleWishListClicked={() => handleWishlisted(item)}
                                    />
                                ))
                                }
                            </Slider>
                        ) : (
                            <BestSellerProductCardShimmer width={'85%'} />
                        )}

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BestSellerSlider;
