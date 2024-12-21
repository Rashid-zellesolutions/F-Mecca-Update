import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';

// Assets
import twelveMonthCreditOfferImage from '../../../Assets/Furniture Mecca/Landing Page/sale banner/download 121.png';
import payPalMobileBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/PAYPAL-BANNER 1.png';
import sixMonthCreditImage from '../../../Assets/Furniture Mecca/Landing Page/sale banner/download 122.png';
import paymentOptionsBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/Frame 4278.png'
import shipBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AT FM.jpg'

// components
import Category from '../../Components/Category/Category';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';
import GetTheScop from '../../Components/GetTheScop/GetTheScop';
import Sliderr from '../../../Global-Components/Slider/Slider';
import BlogSlider from '../../Components/BlogSlider/BlogSlider';
import NearStorePopUp from '../../Components/NearStorePopUp/NearStorePopUp';
import BestSellerSlider from '../../Components/BestSellerSlider/BestSellerSlider';
import InstaGallery from '../../Components/InstaGallery/InstaGallery';
import FinanceBannerSlider from '../../Components/FinanceBannerSlider/FinanceBannerSlider';
import Comparision from '../../Components/Comparision/Comparision';
import DealOfTheDay from '../../Components/DealOfTheDay/DealOfTheDay';
import TrendingNow from '../../Components/TrendingNow/TrendingNow';
import FurnitureForBudget from '../../Components/FurnitureForBudget/FurnitureForBudget';
import AnnouncmentBanners from '../../Components/AnnouncmentBanner/AnnouncmentBanner';
import MobileFinancingSlider from '../../Components/FinanceBannerSlider/MobileFinancingSlider';
import FinanceBanner2 from '../../Components/FinanceBannerSlider/FinanceBanner2';
// import ImageSlider from '../../Components/404NotFound/ImageSlider';
import InstaTwoImageGallery from '../../Components/InstaTwoImageGallery/InstaTwoImageGallery';
import { useLPContentContext } from '../../../context/LPContentContext/LPContentContext';
import LandingPageFinancing from '../../Components/LandingPageFinancingBanners/LandingPageFinancing';

// functions and utils
import { url } from '../../../utils/api';
import axios from 'axios';


const Home = () => {
  const [currentUrl, setCurrentUrl] = useState('/');
  const { postData, data, landingPageCategories, landingPageFOEB } = useLPContentContext();
  const [loading, setLoading] = useState(false);
  const [content2, setContent2] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [slides, setSlides] = useState([])

  const location = useLocation();
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  const getHomeSliderImages = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/pages/home/slider/get`)
      setSlides(response.data.homeSliders || [])
    } catch (error) {
      console.error(error);
    }
  }


  const getLandingPageContent2 = async () => {
    const api = `/api/v1/content2/get`
    try {
      setLoading(true);
      const response = await axios.get(`${url}${api}`)
      setContent2(response.data);
      setLoading(false);
      // console.log(response.data)

    } catch (error) {
      console.error("error fetching contents", error);
      setLoading(false);
    }
  }

  const getFeaturedProducts = async () => {
    const api = "/api/v1/products/featured-products";
    try {
      setLoading(true);
      const response = await axios.get(`${url}${api}`);
      // Filter products where parent === 0
      const filteredProducts = response.data.products.filter(
        (product) => product.parent === 0
      );
      setFeaturedProducts(filteredProducts);
      setLoading(false);
      // console.log(filteredProducts);
    } catch (error) {
      console.error("Error fetching contents", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHomeSliderImages();
    postData();
    getLandingPageContent2();
    getFeaturedProducts();
  }, [])

  const navigate = useNavigate();

  const handleNavigate = (slug, item) => {
    navigate(`/${slug}`, { state: item });
  };




  return (
    <div className='home-page-main-container'>
      <NearStorePopUp />
      <Sliderr images={slides ? slides : []} />
      <ShipBanner bannerImg={shipBanner} showBanner={true} paddindTrue={false} />
      <Category title={'Shop by Category'} categoryData={landingPageCategories} handleNavigate={handleNavigate} />
      <FinanceBannerSlider />
      <LandingPageFinancing />
      <TrendingNow />
      <MobileFinancingSlider />
      <AnnouncmentBanners bannerImage={twelveMonthCreditOfferImage} padding={'10px'} />
      <AnnouncmentBanners bannerImage={payPalMobileBanner} padding={'10px 0'} />
      <AnnouncmentBanners bannerImage={sixMonthCreditImage} padding={'10px 0'} />
      <AnnouncmentBanners bannerImage={paymentOptionsBanner} padding={'10px 0'} />
      

      
      <BestSellerSlider />
      {content2?.section_1 && (
        <Comparision
          heading={content2.section_1.heading}
          image={content2.section_1.image}
          mobileImage={content2.section_1.mobile_image}
        />
      )}


      {featuredProducts &&
        (<ProductSlider cardData={featuredProducts} />)
      }
      <DealOfTheDay />
      {landingPageFOEB && (
        <FurnitureForBudget budgetCardData={landingPageFOEB} />
      )}
      {content2?.section_2 && (
        <FinanceBanner2
          heading={content2.section_2.heading}
          image={content2.section_2.image}
          mobileImage={content2.section_2.mobile_image}
        />
      )}

      <GetTheScop />
      <BlogSlider />
      <InstaGallery />
      <InstaTwoImageGallery />
    </div>
  )
}

export default Home
