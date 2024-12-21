import React, { useRef, useState, useEffect } from 'react';
import './SingleProductStickySection.css';
import { Link, useParams } from 'react-router-dom';
// Sticky Slider Images
import moonDanceImg from '../../../Assets/images/Moondance-Bedroom-Set-01-1024x644 2.png';
import arrowLeft from '../../../Assets/icons/arrow-left-red.png';
import arrowRight from '../../../Assets/icons/arrow-right-red.png';
import redHeart from '../../../Assets/icons/red-heart.png'
import filledHeart from '../../../Assets/icons/filled-heart.png';

// Rating Stars Import
import blackStar from '../../../Assets/icons/star-black.png';
import whiteStar from '../../../Assets/icons/star-transperent-bg.png';
import minus from '../../../Assets/icons/minus.png';
import plus from '../../../Assets/icons/plus.png';

// Variant Images
import silverImage from '../../../Assets/images/silver-variant-image.png';
import brownImage from '../../../Assets/images/brown-variant-image.png';
import blackImage from '../../../Assets/images/black-variant-image.png';
import grayImage from '../../../Assets/images/gray-variant-image.png'
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import ProductOverView from '../ProductOverView/ProductOverView';
import SingleProductFAQ from '../SingleProductFAQ/SingleProductFAQ';
import AlsoNeed from '../AlsoNeed/AlsoNeed';



// Alice Slider
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import imgOne from '../../../Assets/Furniture Mecca/Landing Page/instagram images/B560__02 1.png';
import imgTwo from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 875.png';
import imgThree from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 876.png';
import imgFour from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 877.png';
import imgFive from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 878.png';
import { useCart } from '../../../context/cartContext/cartContext';
import CartSidePannel from '../Cart-side-section/CartSidePannel';
import FinancingOptions from '../FinancingOptions/FinancingOptions';
import SizeVariant from '../SizeVariant/SizeVariant';
import DeliveryOptions from '../DeliveryOptions/DeliveryOptions';
import Breadcrumb from '../../../Global-Components/BreadCrumb/BreadCrumb';
import heartIcon from '../../../Assets/icons/red-heart.png'
import { url } from '../../../utils/api';
import { useSingleProductContext } from '../../../context/singleProductContext/singleProductContext';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useList } from '../../../context/wishListContext/wishListContext';
import ImageComp from '../ImageComp/ImageComp';
import { useProductPage } from '../../../context/ProductPageContext/productPageContext';
import RatingReview from '../starRating/starRating';




const SingleProductStickySection = ({ productData }) => {

  const { singleProductData, setSingleProductData, setSelectedVariationUid, findObjectByUID, setSelectedVariationData, selectedVariationData } = useProductPage();

  // console.log("product data", productData)
  const { slug } = useParams()
  // //console.log("slug get", slug)
  const [getBySlug, setGetBySlug] = useState({})
  const getProductDataWithSlug = async (slug) => {
    const api = `/api/v1/products/get-by-slug/`
    try {
      const response = await axios.get(`${url}${api}${slug}`)
      // //console.log("response with slug", response.data.products)
      const temporaryProduct = response.data.products[0] || {};
      setGetBySlug(temporaryProduct)
    } catch (error) {
      //console.log("Error Fetching fetching data with slug", error);
    }
  }
  // Effect to fetch data if user came directly via link
  useEffect(() => {
    // //console.log("useEffect triggered");
    if (!productData || Object.keys(productData).length === 0) {
      // //console.log("Fetching data for slug:", slug);
      getProductDataWithSlug(slug);
    }
    setSingleProductData(productData)
    setSelectedVariationUid(productData.default_variation)
    setSelectedVariationData(findObjectByUID(productData.default_variation, productData.variations));

  }, [productData, slug]);
  // const product = productData || getBySlug;
  const [product, setProduct] = useState(Object.keys(productData || {}).length > 0 ? productData : getBySlug)
  //console.log("product on top", product)

  const { cart, addToCart, decreamentQuantity, increamentQuantity, removeFromCart, calculateTotalPrice, addToCart0, cartProducts } = useCart();
  const [cartSection, setCartSection] = useState(false);
  const [isProtectionCheck, setIsProtectionCheck] = useState(true)

  const searchProductOnCart = cart.find((item) => item.product.uid === product.uid)

  const [quantity, setQuantity] = useState(1)
  const increaseLocalQuantity = () => {
    setQuantity(quantity + 1);
  }
  const decreaseLocalQuantity = () => {
    setQuantity(quantity - 1);
  }

  const variableRegularPrice = product.variations ? product.variations.regular_price : '';
  const variableSalePrice = product.variations ? product.variations.sale_price : '';

  // Alice Slider
  // const images = [imgOne, imgOne, imgOne, imgOne, imgOne];
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  // const [mobActiveIndex, setMobActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const mobCarouselRef = useRef(null);

  const handleThumbnailClickk = (index) => {
    setActiveIndex(index);
    carouselRef.current.slideTo(index); // Slide to the selected thumbnail
  };
  const handleMobThumbnailClickk = (index) => {
    setMobileActiveIndex(index);
    mobCarouselRef.current.slideTo(index); // Slide to the selected thumbnail
  };

  const handleNextSlide = () => {
    const newIndex = activeIndex + 1;
    if (newIndex < product.images.length) {
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex); // Slide to the next thumbnail
    }
  };
  const handleMobNextSlide = () => {
    const newIndex = mobileActiveIndex + 1;
    if (newIndex < product.images.length) {
      setMobileActiveIndex(newIndex);
      mobCarouselRef.current.slideTo(newIndex); // Slide to the next thumbnail
    }
  };
  // const handleMobileNextSlide = () => {
  //   const newIndex = mobActiveIndex + 1;
  //   if (newIndex < images.length) {
  //     setMobActiveIndex(newIndex);
  //     mobCarouselRef.current.slideTo(newIndex); // Slide to the next thumbnail
  //   }
  // };

  const handlePrevSlide = () => {
    const newIndex = activeIndex - 1;
    if (newIndex >= 0) {
      setActiveIndex(newIndex);
      carouselRef.current.slideTo(newIndex); // Slide to the previous thumbnail
    }
  };
  const handleMobPrevSlide = () => {
    const newIndex = mobileActiveIndex - 1;
    if (newIndex >= 0) {
      setMobileActiveIndex(newIndex);
      mobCarouselRef.current.slideTo(newIndex); // Slide to the previous thumbnail
    }
  };

  // sticky behavior scrip
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftSectionRef.current && rightSectionRef.current) {
        const leftSection = leftSectionRef.current;
        const rightSection = rightSectionRef.current;

        const rightSectionBottom = rightSection.getBoundingClientRect().bottom;
        const leftSectionBottom = leftSection.getBoundingClientRect().bottom;

        if (rightSectionBottom < window.innerHeight) {
          leftSection.style.position = 'absolute';
          leftSection.style.bottom = '0';
        } else {
          leftSection.style.position = 'sticky';
          leftSection.style.bottom = 'auto';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resizing of the window

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Sticky Behavior cript end

  //   Second Section Functions

  // const ratingStars = [
  //   { name: 'filled Star', icon: blackStar },
  //   { name: 'filled Star', icon: blackStar },
  //   { name: 'filled Star', icon: blackStar },
  //   { name: 'filled Star', icon: blackStar },
  //   { name: 'un-filled Star', icon: whiteStar },
  // ]

  // const variantImages = [
  //   { name: 'Silver', img: silverImage },
  //   { name: 'Brown', img: brownImage },
  //   { name: 'Black', img: blackImage },
  //   { name: 'Gray', img: grayImage },
  // ]

  // const [variationName, setVariationName] = useState(product.colorVariation[0].color)
  // const [variationName, setVariationName] = useState(0)
  // const handleColorVariation = (index) => {
  //   setVariationName(index);
  // }

  // const [count, setCount] = useState(1);

  // const handleIncrease = () => {
  //   setCount(prevCount => prevCount + 1);
  // };

  // const handleDecrease = () => {
  //   setCount(prevCount => Math.max(1, prevCount - 1));
  // };

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleAddToCartProduct = (product) => {
    setCartSection(true);
    // console.log(product)
    addToCart(product, quantity, !isProtectionCheck);
    console.log(cart, "here is the products in cart")
  }
  const handleCartClose = () => {
    setCartSection(false)
  }
  const [variationData, setVariationData] = useState([])
  // const [variationPayload, setVariationPayload] = useState();
  //   const selectedAttr = product?.variations?.find(variation =>
  //     variation.attributes.some(attribute =>
  //       attribute.type === 'select' &&
  //       attribute.options.some(option => option.value === selectVariation)
  //     ) &&
  //     variation.attributes.some(attribute =>
  //       attribute.type === 'color' &&
  //       attribute.options.some(option => option.value === selectedColor)
  //     )
  //   );

  //   // setVariationPayload(selectedAttr?.images)
  //   setVariationData(selectedAttr)
  //   return selectedAttr

  //   // //console.log("variation payload to check", variationPayload)

  // }



  // //console.log("variation payload to check outer", variationPayload)

  const [selectVariation, setSelectVariation] = useState(0);
  const handleSelectVariation = (value) => {
    setSelectVariation(value);
  }
  const [selectedUid, setSelectedUid] = useState(null);

  const handleSelectedVariationData = (value) => {
    setSelectedUid(value);

    const selectedIndex = productData.variations.findIndex(variation => variation.uid === value);

    console.log(productData.variations);
    console.log(selectedUid, "here");
    console.log(selectedIndex, "index");
    setVariationData(productData.variations[selectedIndex]);

    if (selectedIndex !== -1) {
      console.log(variationData, "selected variation data"); // Log the matched variation
    } else {
      console.log("No matching variation found for the selected UID.");
    }
  };


  const [selectedColor, setSelectedColor] = useState();
  const handleSelectColor = (value) => {
    setSelectedColor(value);
    //console.log("Matched Variation: ", matchedVariation);
  }





  //console.log("imgggg", variationData)
  const formatePrice = (price) => {
    return new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  // //console.log("product variable", product.type)
  const { addToList, removeFromList, isInWishList } = useList()
  const handleWishList = (item) => {

    if (isInWishList(item.uid)) {
      removeFromList(item.uid)
    } else {
      addToList(item)
    }
  }

  //console.log("variation payload image", variationPayload?.images?.[0]?.image_url)
  // //console.log("pp vv", `${url}${product.variations[0].images[0].image_url}`)


  return (
    <>

      <div className='sticky-main-container-0'>
        {/* <Breadcrumb /> */}
        <Breadcrumb sku={productData?.sku} category={productData?.categories[0].name} categorySlug={productData?.categories[0].slug} />
        <div className="sticky-main-container">
          <div className='left-section'>
            <div className='single-product-alice-slider'>
              <p className='single-product-slider-main-image-stock-tag' >In Stock</p>
              {/* {product.tags && <p className='single-product-slider-main-image-sale-tag' style={{ backgroundColor: product.tags[0].bg_color }}> {product.tags[0].text}</p>} */}
              <button className='single-product-arrow single-product-arrow-left' onClick={handlePrevSlide} >
                <img src={arrowLeft} alt='left' />
              </button>
              <AliceCarousel
                ref={carouselRef}
                activeIndex={activeIndex}
                disableDotsControls
                disableButtonsControls
                items={
                  product.type === 'variable'
                    ? (selectedVariationData?.images || []).map((img, index) => (
                      <img
                        key={index}
                        src={`${url}${img.image_url}`}
                        className="single-product-slider-img"
                        alt={`Slide ${index}`}
                      />
                    ))
                    : (product?.images || []).map((item, index) => (
                      <img
                        key={index}
                        src={`${url}${item.image_url}`}
                        className="single-product-slider-img"
                        alt="simple"
                      />
                    ))
                }
                responsive={{
                  0: { items: 1 },
                  1024: { items: 1 },
                }}
              />

              <div className="single-product-slider-thumbnails">
                {product.type === 'variable' ? (
                  selectedVariationData?.images?.map((img, ind) => (
                    <div
                      key={ind}
                      className={`single-product-slider-thumbnail ${activeIndex === ind ? '' : 'single-product-slider-thumbnail-inactive'}`}
                      onClick={() => handleThumbnailClickk(ind)}
                    >
                      <img src={`${url}${img.image_url}`} alt={`Thumbnail ${ind}`} />
                    </div>
                  ))
                ) : (
                  product.images?.map((simpleImg, index) => (
                    <div
                      key={index}
                      className={`single-product-slider-thumbnail ${activeIndex === index ? '' : 'single-product-slider-thumbnail-inactive'}`}
                      onClick={() => handleThumbnailClickk(index)}
                    >
                      <LazyLoadImage effect="blur" src={`${url}${simpleImg.image_url}`} alt={`Thumbnail ${index}`} />
                    </div>
                  ))
                )}
              </div>

              <button className='single-product-arrow single-product-arrow-right' onClick={handleNextSlide}>
                <img src={arrowRight} alt='right' />
              </button>
            </div>
            {/* <ImageComp singleImage={product.variations[0].images[0].image_url} /> */}
          </div>



          <div className='right-section'>
            <div className='single-product-detail-container'>
              <div className='single-page-product-name-anddetails'>
                <h3 className='single-product-heading'>{product.name}</h3>
                <div className='single-product-rating'>
                  {/* <span className='stars-icon'>
                  {ratingStars && ratingStars.map((item, index) => {
                    return <img key={index} src={item.icon} alt={item.name} className='star-img' />
                  })}
                </span> */}
                  <RatingReview rating={(product?.average_rating)} disabled={true} size={"20px"} />
                  {/* <p>{product?.average_rating}</p> */}
                  {/* <Link>200 Reviews</Link> */}
                </div>
                {/* <h3 className='single-product-price'>${productData.productCard.priceTag}</h3> */}
                {productData.type === "simple" ? <>
                  {productData?.sale_price !== "0=" ? <div className='single-product-prices'>
                    <del className='single-product-old-price'>{formatePrice(productData?.regular_price)}</del>
                    <h3 className='single-product-new-price'>{formatePrice(productData?.sale_price)}</h3>
                  </div> : <div className='single-product-prices'>
                    <h3 className='single-product-new-price'>{formatePrice(productData.regular_price)}</h3>
                  </div>
                  }
                </> : <>
                  {selectedVariationData?.sale_price !== "0=" ? <div className='single-product-prices'>
                    <del className='single-product-old-price'>{formatePrice(selectedVariationData?.regular_price)}</del>
                    <h3 className='single-product-new-price'>{formatePrice(selectedVariationData?.sale_price)}</h3>
                  </div> : <div className='single-product-prices'>
                    <h3 className='single-product-new-price'>{formatePrice(product.regular_price)}</h3>
                  </div>
                  }
                </>}

                {/* <p className='single-product-installment-price-price'>$9/month for 6 months - Total {productData.productCard.priceTag} </p> */}

                <span className='single-product-shipping'>
                  <p className='single-product-installment-price-price'>$9/month for 6 months - Total $ 199.00 </p>
                  <p>Get it between July 27 - July 31'</p>
                </span>
                <div className='single-product-frame-color'>
                  <SizeVariant
                    productType={product.type}
                    productData={product.variations}
                    attributes={product.attributes}
                    selectedColor={selectedColor}
                    selectVariation={selectVariation}
                    handleSelectColor={handleSelectColor}
                    handleSelectVariation={handleSelectVariation}
                    handleSelectedVariationData={handleSelectedVariationData}
                  />
                </div>
                <div className='add-cart-or-add-items-div'>
                  <div className='item-count'>
                    <button className={`minus-btn ${product.quantity === 1 ? 'disabled' : ''}`} onClick={decreaseLocalQuantity} disabled={product.quantity === 1}>
                      <img src={minus} alt='minus btn' />
                    </button>

                    <input type='number' value={quantity} readOnly />
                    {/* <p>{product.quantity}</p> */}
                    <button className='plus-btn' onClick={increaseLocalQuantity}>
                      <img src={plus} alt='plus btn' />
                    </button>
                  </div>
                  <img src={isInWishList(product.uid) ? filledHeart : redHeart} alt='red-heart-icon' className='red-heart-icon' onClick={(e) => { e.stopPropagation(); handleWishList(product) }} />
                  <button
                    className={`add-to-cart-btn ${isLoading ? 'loading' : ''}`}
                    onClick={() => {
                      handleClick();
                      addToCart0(product, variationData, !isProtectionCheck ? 1 : 0)
                      handleAddToCartProduct(product);

                    }
                    }>
                    {isLoading ? 'Loading...' : 'Add To Cart'}
                  </button>
                </div>
              </div>
              <FinancingOptions />
              {product.may_also_need && product.may_also_need.length > 0 ? <AlsoNeed productsUid={product.may_also_need} /> : <></>}

              <WhatWeOffer key={"single-protection"} isProtected={isProtectionCheck} setIsProtected={setIsProtectionCheck} />
              <DeliveryOptions />
              {/* <ProductOverView /> */}
              <SingleProductFAQ description={product.description} />
            </div>
          </div>
        </div>
        <CartSidePannel
          cartData={cartProducts}
          addToCartClicked={cartSection}
          handleCartSectionClose={handleCartClose}
          setAddToCartClick={setCartSection}
          removeFromCart={removeFromCart}
          decreamentQuantity={decreamentQuantity}
          increamentQuantity={increamentQuantity}
        />
      </div>

      <div className='mobile-view-sticky-main-container'>

        <div className='mobile-view-single-product-slider'>

          <div className='mobile-view-product-tags'>
            <h3>In stock</h3>
            <h3>Clarence Sale</h3>
          </div>
          <h3 className='mobile-view-product-name'>
            {product.name}
          </h3>
          <div className='mobile-view-price-and-favorite-div'>
            <div className='old-and-new-price'>
              {/* <del>$199.00</del>
              <p>${product.priceTag}</p> */}
              {productData.type === "simple" ? <>
                {productData?.sale_price !== "0=" ? <div className='single-product-prices'>
                  <del className='single-product-old-price'>{formatePrice(productData?.regular_price)}</del>
                  <h3 className='single-product-new-price'>{formatePrice(productData?.sale_price)}</h3>
                </div> : <div className='single-product-prices'>
                  <h3 className='single-product-new-price'>{formatePrice(productData.regular_price)}</h3>
                </div>
                }
              </> : <>
                {selectedVariationData?.sale_price !== "0=" ? <div className='single-product-prices'>
                  <del className='single-product-old-price'>{formatePrice(selectedVariationData?.regular_price)}</del>
                  <h3 className='single-product-new-price'>{formatePrice(selectedVariationData?.sale_price)}</h3>
                </div> : <div className='single-product-prices'>
                  <h3 className='single-product-new-price'>{formatePrice(product.regular_price)}</h3>
                </div>
                }
              </>}
            </div>
            <img src={heartIcon} alt='heart' />
          </div>

          <div className='mobile-view-single-product-rating'>
            {/* <span className='mobile-view-stars-icon'>
              {product.ratingStars && product.ratingStars.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} className='star-img' />
              })}
            </span> */}
            <RatingReview rating={(product?.average_rating)} disabled={true} size={"12px"} />
            <p>4.1</p>
            <Link>{product.reviewCount} Reviews</Link>
          </div>

          <div className='mobile-view-single-product-slider-main-section'>
            <button
              className='mobile-single-product-slider-arrow mobile-single-product-arrow-left'
              onClick={handleMobPrevSlide}
            >
              <img src={arrowLeft} alt='left arrow' />
            </button>
            <div className='mobile-view-single-product-slider-main-image'>
              {/* <AliceCarousel
                ref={mobCarouselRef} // Attach the ref
                activeIndex={activeIndex}
                disableDotsControls
                disableButtonsControls
                items={product.productAllImages && product.productAllImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="single-product-slider-img"
                    alt={`Slide ${index}`}
                  />
                ))
                }
                responsive={{
                  0: { items: 1 },
                  1024: { items: 1 }
                }}
              /> */}

              <AliceCarousel
                ref={mobCarouselRef}
                activeIndex={mobileActiveIndex}
                disableDotsControls
                disableButtonsControls
                items={
                  product.type === 'variable'
                    ? (selectedVariationData?.images || []).map((img, index) => (
                      <img
                        key={index}
                        src={`${url}${img.image_url}`}
                        className="single-product-slider-img"
                        alt={`Slide ${index}`}
                      />
                    ))
                    : (product?.images || []).map((item, index) => (
                      <img
                        key={index}
                        src={`${url}${item.image_url}`}
                        className="single-product-slider-img"
                        alt="simple"
                      />
                    ))
                }
                responsive={{
                  0: { items: 1 },
                  1024: { items: 1 },
                }}
              />
            </div>
            <div className='mobile-view-slider-thumb-images'>
              {product.type === 'variable' ? (
                selectedVariationData?.images?.map((img, ind) => (
                  <div
                    key={ind}
                    className={`single-product-slider-thumbnail ${mobileActiveIndex === ind ? '' : 'single-product-slider-thumbnail-inactive'}`}
                    onClick={() => handleMobThumbnailClickk(ind)}
                  >
                    <img src={`${url}${img.image_url}`} alt={`Thumbnail ${ind}`} />
                  </div>
                ))
              ) : (
                product.images?.map((simpleImg, index) => (
                  <div
                    key={index}
                    className={`single-product-slider-thumbnail ${mobileActiveIndex === index ? '' : 'single-product-slider-thumbnail-inactive'}`}
                    onClick={() => handleMobThumbnailClickk(index)}
                  >
                    <LazyLoadImage effect="blur" src={`${url}${simpleImg.image_url}`} alt={`Thumbnail ${index}`} />
                  </div>
                ))
              )}
            </div>
            <button
              className='mobile-single-product-slider-arrow mobile-single-product-arrow-right'
              onClick={handleMobNextSlide}
            >
              <img src={arrowRight} alt='arrow right' />
            </button>
          </div>

        </div>
        <div className='mobile-view-single-product-details'>
          <div className='mobile-view-color-variant'>
            {/* <div className='mobile-selected-color'>
              <p>Selected Color: </p>
              <h3>{variationName}</h3>
            </div>
            <div className='mobile-variant-images-div'>
              {product.colorVariation && product.colorVariation.map((item, index) => {
                return <div key={index} className={`mobile-single-product-color-variant ${variationName === index ? 'selected-color-variation' : ''}`} onClick={() => handleColorVariation(item.color)}>
                  <img src={silverImage} alt='img' />
                  <p>{item.color}</p>
                </div>
              })}
            </div> */}
            <SizeVariant
              productType={product.type}
              productData={product.variations}
              attributes={product.attributes}
              selectedColor={selectedColor}
              selectVariation={selectVariation}
              handleSelectColor={handleSelectColor}
              handleSelectVariation={handleSelectVariation}
              handleSelectedVariationData={handleSelectedVariationData}
            />
          </div>
          {/* <SizeVariant /> */}
          <div className='mobile-product-count-and-add-to-cart'>

            <div className='mobile-product-count'>
              {/* <button>
                <img src={minus} alt='minus-btn' />
              </button>
              <p>0</p>
              <button>
                <img src={plus} alt='plus-btn' />
              </button> */}
              <button className={`minus-btn ${product.quantity === 1 ? 'disabled' : ''}`} onClick={decreaseLocalQuantity} disabled={product.quantity === 1}>
                <img src={minus} alt='minus btn' />
              </button>

              {/* <input type='number' value={quantity} readOnly /> */}
              <p>{quantity}</p>
              {/* <p>{product.quantity}</p> */}
              <button className='plus-btn' onClick={increaseLocalQuantity}>
                <img src={plus} alt='plus btn' />
              </button>
            </div>
            {/* <button className='mobile-add-to-cart-btn'>Add To Cart</button> */}
            <button
                    className={`add-to-cart-btn ${isLoading ? 'loading' : ''}`}
                    onClick={() => {
                      handleClick();
                      addToCart0(product, variationData, !isProtectionCheck ? 1 : 0)
                      handleAddToCartProduct(product);

                    }
                    }>
                    {isLoading ? 'Loading...' : 'Add To Cart'}
                  </button>
          </div>
          <FinancingOptions />
          <SingleProductFAQ />
        </div>
      </div>
    </>
  );
};

export default SingleProductStickySection;
