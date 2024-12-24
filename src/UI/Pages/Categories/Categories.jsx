// import React, { useEffect, useState } from 'react'
// import './Categories.css';
// import Shopvia from '../../Components/ShopViaBanner/Shopvia';
// import Category from '../../Components/Category/Category';
// import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
// import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
// import NewArrival from '../../Components/NewArrivals/NewArrival';
// // import MultiProductSlider from '../../Components/MultiProductSLider/MultiProductSlider';
// import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
// import BestSeller from '../../Components/BestSeller/BestSeller';
// import DealOfDay from '../../Components/DealOfDay/DealOfDay';
// import FinanceBannerSlider from '../../Components/FinanceBannerSlider/FinanceBannerSlider';
// import BestSellerSlider from '../../Components/BestSellerSlider/BestSellerSlider';
// import ShipBanner from '../../Components/ShipBanner/ShipBanner';
// import shipBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AT FM.jpg'
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import ScreenSizer from '../../../utils/ScreenResizer/ScreenResizer';
// import { url } from '../../../utils/api';

// const Categories = ({categoriesMainImage, mobileViewMainImage, categoryCartTitle, categoryCardData, newArrival , showPromotionsBaneers}) => {
//   const { categorySlug } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const { width } = ScreenSizer();
//   const isMobile = width < 481; 
//   const [loading, setLoading] = useState(false);
//   const [categoryPageData,setCategoryPageData] = useState();
//   const [error, setError] = useState(null); 

//   const getPageData = async () => {
//     try {
//       const response = await fetch(`${url}/api/v1/sub-category/get/${location.state?.slug}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         }// Data to send
//       });
//       const result = await response.json();
//       setCategoryPageData(result.sub_categories);
//       console.log("category response ",result)
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(()=>{
//     getPageData();
//   },[])

//   const handleNavigate = (slug, item) => {
//     navigate(`/${categorySlug}/${item.slug}`, { state: item });
//   };

//   return (
//     <div>
//       {/* <Shopvia /> */}
//       <LatestModulerBanner customWidth={false} showBanners={true} mainImgShow={true} mobileMainImage={"https://fm.skyhub.pk"+location.state?.bannerImage2} mainImage={"https://fm.skyhub.pk"+location.state?.bannerImage} />
//       <Category title={location.state?.name} categoryData={categoryPageData} handleNavigate={handleNavigate} />
//       {/* {isMobile ? <BestSellerSlider /> : <BestSeller />} */}
//       <BestSeller />
//       {/* <DealOfDay /> */}
//       <NewArrival /> 
//       <ShipBanner bannerImg={shipBanner} showBanner={false} paddindTrue={false} />
//       <CategoriesGetScop isTrue={true} />
//       {/* <LatestModulerBanner customWidth={false} showBanners={true} paddingTop={true} mainImgShow={false} /> */}
//       <FinanceBannerSlider />
//       {/* <CustomerServicePanel /> */}
//     </div>
//   )
// }

// export default Categories
import React, { useEffect, useState } from 'react'
import './Categories.css';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import Category from '../../Components/Category/Category';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner';
import NewArrival from '../../Components/NewArrivals/NewArrival';
// import MultiProductSlider from '../../Components/MultiProductSLider/MultiProductSlider';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import BestSeller from '../../Components/BestSeller/BestSeller';
import DealOfDay from '../../Components/DealOfDay/DealOfDay';
import FinanceBannerSlider from '../../Components/FinanceBannerSlider/FinanceBannerSlider';
import BestSellerSlider from '../../Components/BestSellerSlider/BestSellerSlider';
import ShipBanner from '../../Components/ShipBanner/ShipBanner';
import shipBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/AT FM.jpg'
import ScreenSizer from '../../../utils/ScreenResizer/ScreenResizer';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { url } from '../../../utils/api';
import { useSEOContext } from '../../../context/SEOcontext/SEOcontext';
import Loader from '../../Components/Loader/Loader';

const Categories = ({
  categoriesMainImage, 
  mobileViewMainImage, 
  categoryCartTitle, 
  categoryCardData, 
  newArrival, 
  showPromotionsBaneers
}) => {

  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const { width } = ScreenSizer();
  const isMobile = width < 481; 
  const [loading, setLoading] = useState(false);
  const [categoryPageData,setCategoryPageData] = useState();
  const [categoryData,setCategoryData] = useState();
  const [bestSelling,setBestSelling] = useState();
  const [error, setError] = useState(null); 
  const [paragraph,setParagraph]= useState(null);
  const {setTitle,setDescription,setImage} = useSEOContext();


  console.log("cagegory slug", categorySlug);
  console.log("win location", location)

  const getPageData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/api/v1/sub-category/get/${categorySlug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }// Data to send
      });
      const result = await response.json();
      setCategoryPageData(result.sub_categories);
      setBestSelling(result.bestSelling);
      setParagraph(result.content);
      console.log("result ",result)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/api/v1/productCategory/get?slug=${categorySlug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }// Data to send
      });
      const result = await response.json();
      setCategoryData(result.categories[0])
      console.log("result 2",result);
      setTitle(result.categories[0].meta.title);
      setDescription(result.categories[0].meta.description);
      setImage(url+result.categories[0].meta.og_image);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getPageData();
    getCategoryData();
    console.log("category page data",categoryPageData)
  },[categorySlug]);

  useEffect( ()=> {
    getPageData();
    if(!location.state) {
      getCategoryData();
    }
  //  !location.state? getCategoryData() : null;
    console.log(categoryData,"here is categoruy data")
  },[])

  const handleNavigate = (slug, item) => {
    navigate(`/${categorySlug}/${item.slug}`, { state: item });
  };

  // console.log(`category data`, location.state?.bannerImage2)


  return (
    <>
      {/* <Shopvia /> */}
      <LatestModulerBanner customWidth={false} showBanners={false} mainImgShow={true} mobileMainImage={url+(location.state? location.state?.bannerImage : categoryData?.bannerImage)}  /* { url+(location.state? location.state?.bannerImage2 : categoryData?.bannerImage2) } */ mainImage={url+(location.state? location.state?.bannerImage : categoryData?.bannerImage)} />
      
      <Category title={location.state? location.state?.name : categoryData?.name } categoryData={categoryPageData} handleNavigate={handleNavigate} />
      {/* <CategoryShimmer/> */}
      {/* {isMobile ? <BestSellerSlider /> : <BestSeller />} */}
      {bestSelling && /* (<BestSeller categoryData={bestSelling} />) */ <BestSellerSlider /> }
      {/* <DealOfDay /> */}
      <NewArrival /> 
      <ShipBanner bannerImg={shipBanner} showBanner={false} paddindTrue={false} />
      <CategoriesGetScop text={paragraph} isTrue={true} />
      {/* <LatestModulerBanner customWidth={false} showBanners={true} paddingTop={true} mainImgShow={false} /> */}
      <FinanceBannerSlider />
      {/* <CustomerServicePanel /> */}
      
    </>
  )
}

export default Categories
