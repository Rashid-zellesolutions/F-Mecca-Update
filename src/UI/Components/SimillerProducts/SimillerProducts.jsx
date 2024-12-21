import React, {useState, useEffect} from 'react'
import './SimillerProducts.css'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import arrowLeftRed from '../../../Assets/icons/arrow-left-red.png';
import arrowRightRed from '../../../Assets/icons/arrow-right-red.png';
import { useProducts } from '../../../context/productsContext/productContext'
import { useNavigate } from 'react-router-dom'
import { useSingleProductContext } from '../../../context/singleProductContext/singleProductContext'
import axios from 'axios'
import { url } from '../../../utils/api'
import ProductCardTwo from '../ProductCard/ProductCard'
import heart from '../../../Assets/icons/heart-vector.png'
import ProductCardShimmer from '../Loaders/productCardShimmer/productCardShimmer'
import { useList } from '../../../context/wishListContext/wishListContext'
import Slider from 'react-slick'
import star from '../../../Assets/icons/black-star.png'
import leftArrow from '../../../Assets/icons/arrow-left-charcol.png'
import rightArrow from '../../../Assets/icons/arrow-right-charcol.png'
import { toast } from 'react-toastify'

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`cart-latest-products-slider-arrow cart-latest-products-slider-arrow-left ${className}`} >
      <img src={leftArrow} alt='arrow' />
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`cart-latest-products-slider-arrow cart-latest-products-slider-arrow-right ${className}`} >
      <img src={rightArrow} alt='arrow' />
    </div>
  )
}

const SimillerProducts = ({collection}) => {
    // console.log('collected collection', collection)
    const simillerProducts = collection.map((item) => item);
    // console.log("similler product uid", simillerProducts)
    // const similerProductsData = products.map((item) => item)
    
    // console.log("similler products", similerProductsData)

    const [data, setData] = useState()
    const fetchData = async () => {
        const api = `/api/v1/products/get/`;
        try {
            const request = simillerProducts.map(async (item) => {
                const response = await axios.get(`${url}${api}${item}`);
                return response.data.products;
            });
            const myCollections = await Promise.all(request);
            const filteredMyCollection = myCollections.flat();
            // console.log("filtered similer data", filteredMyCollection)
            return filteredMyCollection;
        } catch (error) {
            console.error("error geting data", error)
        }
    }


    const getchMyCollectionProducts = async () => {
        const products = await fetchData();
        setData(products);
        // console.log("my colection data", data);
    }
    useEffect(() => {
        getchMyCollectionProducts()
    }, [])
    const showArrowOnCardLength = data && data.length
    // console.log("cards data", showArrowOnCardLength)
    // console.log("converted my collection", data)
    // console.log("single collection", products)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hideFilters, setHideFilters] = useState(false);

    // Change image on hover function
    const handleImageHover = (index) => {
      setHoveredIndex(index);
    };

    const handleImageHoverLeave = () => {
      setHoveredIndex(null);
    };

    // Card title words limit
    const maxLength = 30;
    const truncateTitle = (title, maxLength) => {
        if(!title) return '';
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
    };

    // console.log("similler data", data)
    // Select Color Variations Functions
    const [selectedColorIndices, setSelectedColorIndices] = useState(Array(data && data.length).fill(0));
    const handleVariantImageClick = (cardIndex, colorIndex) => {
        const updatedIndices = [...selectedColorIndices];
        updatedIndices[cardIndex] = colorIndex;
        setSelectedColorIndices(updatedIndices);
    };

    // product color variation index from redux
    const colorIndex = useSelector((state) => state.colorIndex.colorIndex)

    const scrollContainerRef = useRef(null);
    const cardWidth = 310; // Adjust the width of your cards here
    const [simillerProductIndex, setSimillerProductIndex] = useState(0);
    const handleScroll = (direction) => {
        const newIndex = simillerProductIndex + direction;
        if(newIndex >= 0 && newIndex <= data.length - 1){
            setSimillerProductIndex(newIndex)
        }
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction * cardWidth * 1;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Prevent dragging to scroll
    const handleMouseDown = (e) => {
        e.preventDefault();
    };

    const handleTouchMove = (e) => {
        e.preventDefault();
    };

        // const navigate = useNavigate()
        const [quickViewProduct, setQuickViewProduct] = useState({})
        const [quickViewClicked, setQuickView] = useState(false);
        const handleQuickViewOpen = (item) => {
            setQuickView(true);
            setQuickViewProduct(item)

        }

        const handleQuickViewClose = () => { setQuickView(false) }

    const navigate = useNavigate();
    const handleCardClick = (item) => {
        navigate(`/single-product/${item.slug}`, {state: {products: item}})
    }

    // wish list
    const {addToList, removeFromList, isInWishList} = useList()
    const notify = (str) => toast.success(str);
    const notifyRemove = (str) => toast.error(str)
    const handleWishList = (item) => {
        if(isInWishList(item.uid)){
            removeFromList(item.uid);
            notifyRemove('Removed from wish list', {
                autoClose: 10000,
                className: "toast-message",
            })
        }else{
            addToList(item)
            notify("added to wish list", {
                autoClose: 10000,
            })
        }
    }

    // Slick
  let settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    // nextArrow: true,
    // prevArrow: true,
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
    <div className='similler-products-main-container'>
        <h3>Shop from this collection</h3>
        {/* <div className='similler-products-wrapper' onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}>
            <button
                className={`scroll-button left ${simillerProductIndex >= data && data.length ? 'disable-similler-product-arrow' : ''} ${showArrowOnCardLength > 4 ? 'show-arrow-on-slider' : ''}`}
                onClick={() => handleScroll(-1)} 
            //    onClick={handlePrev}
                disabled={simillerProductIndex === 0}
            >
                <img src={arrowLeftRed} alt='arrow-left' />
            </button> 
            <div className='similler-products-cards' ref={scrollContainerRef}>
                {data ? (
                    data && data.slice(0, 12).map((item, index) => (
                    <ProductCard
                        key={item.uid}
                        maxWidthAccordingToComp={'100%'} justWidth={'310px'}
                        // tagIcon={item.productTag ? item.productTag : item.heart}
                        tagIcon={heart}
                        tagClass={` ${item.productTag ? 'tag-img' : 'heart-icon'}`}
                        tagDivClass={`${item.productTag ? 'product-tag-div' : 'heart-icon-div'}`}
                        mainImage={hoveredIndex === index && item.image.image_url ? item.hoverImage : item.image.image_url}
                        productCardContainerClass={`product-card ${hideFilters ? 'card-width-increase' : ''}`}
                        mouseEnter={() => handleImageHover(index)}
                        mouseLeave={handleImageHoverLeave}
                        ProductTitle={truncateTitle(item.name, maxLength)}
                        stars={item.ratingStars}
                        reviewCount={'200'}
                        lowPriceAddvertisement={item.lowPriceAddvertisement}
                        priceTag={item.regular_price}
                        financingAdd={item.financingAdd}
                        learnMore={item.learnMore}
                        colorVariation={item.colorVariation}
                        mainIndex={index}
                        deliveryTime={item.deliveryTime}
                        selectedColorIndices={selectedColorIndices}
                        handleVariantColor={() => handleVariantImageClick(index, colorIndex)}
                        borderLeft={index % 4 === 3}
                        stock={item.manage_stock}
                        handleCardClick={() => handleCardClick(item)}
                        singleProductData={item}
                        attributes={item.attributes}
                        ProductSku={item.sku}
                        sale_price={item.sale_price}
                        handleWishListclick={() => handleWishList(item)}
                    />
                ))
            ) : (
                Array.from({ length: 5 }).map((_, index) => (
                    <ProductCardShimmer />
                ))
            )}
            </div>
            <button
                className={`scroll-button right ${simillerProductIndex >= data && data.length ? 'disable-similler-product-arrow' : ''} ${showArrowOnCardLength > 4 ? 'show-arrow-on-slider' : ''}`}
               onClick={() => handleScroll(1)} 
            
            >
                <img src={arrowRightRed} about='arrow-right' />
            </button>
        </div> */}

        <div className='cart-related-products-slider-main-div'>
          <Slider {...settings}>
            {data ? (
              data.map((item, index) => (
              <div key={index} className='cart-latest-product-cards-container'>
                <ProductCard
                  key={index}
                  slug={item.slug}
                  singleProductData={item}
                  maxWidthAccordingToComp="98%"
                  // justWidth={'320px'}
                  tagIcon={item.productTag ? item.productTag : heart}
                  tagClass={item.productTag ? 'tag-img' : 'heart-icon'}
                  mainImage={`${item.image.image_url}`}
                  productCardContainerClass="product-card"
                  ProductSku={item.sku}
                  tags={item.tags}
                  ProductTitle={truncateTitle(item.name, maxLength)}
                  stars={[
                    { icon: star, title: 'filled' },
                    { icon: star, title: 'filled' },
                    { icon: star, title: 'filled' },
                    { icon: star, title: 'filled' },
                    { icon: star, title: 'filled' },
                  ]}
                  reviewCount={item.reviewCount}
                  lowPriceAddvertisement={item.lowPriceAddvertisement}
                  priceTag={item.regular_price}
                  sale_price={item.sale_price}
                  financingAdd={item.financingAdd}
                  learnMore={item.learnMore}
                  mainIndex={index}
                  deliveryTime={item.deliveryTime}
                  stock={item.manage_stock}
                  attributes={item.attributes}
                  handleCardClick={() => handleCardClick(item)}
                  handleQuickView={() => handleQuickViewOpen(item)}
                  type={item.type}
                  variation={item.variations}
                  handleWishListclick={() => handleWishList(item)}
                />
              </div>
            ))
            ) : (
              Array.from({ length: 4 }).map((_, index) => (
                            <ProductCardShimmer />
                        ))
            )}
          </Slider>
        </div>
    </div>
  )
}
export default SimillerProducts