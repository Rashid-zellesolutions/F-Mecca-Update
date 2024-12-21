import React from 'react';
import './ProductArchive.css';
import CustomerServicePanel from '../../Components/CustomerServicePanel/CustomerServicePanel';
import CategoriesGetScop from '../../Components/CategoriesGetScop/CategoriesGetScop';
import FAQ from '../../Components/FAQ/FAQ';
import Shopvia from '../../Components/ShopViaBanner/Shopvia';
import BreadCrumWithProduct from '../../Components/BreadCrumWithProduct/BreadCrumWithProduct';
import Products from '../../Components/Products/Products';
import underFifteen from '../../../Assets/Furniture Mecca/product archive page/breadcrums/under-1500.png';
import sofaAndLoveSeat from '../../../Assets/Furniture Mecca/product archive page/breadcrums/sofa-and-love-seat.png';
import sectionalSets from '../../../Assets/Furniture Mecca/product archive page/breadcrums/sectional-set.png'
import InstaGallery from '../../Components/InstaGallery/InstaGallery';
import RelatedCategories from '../../Components/Related-categories-Tags/RelatedCategories';
import InstaTwoImageGallery from '../../Components/InstaTwoImageGallery/InstaTwoImageGallery';
import MobileFinancingSlider from '../../Components/FinanceBannerSlider/MobileFinancingSlider';
import AnnouncmentBanners from '../../Components/AnnouncmentBanner/AnnouncmentBanner';
import twelveMonthCreditOfferImage from '../../../Assets/Furniture Mecca/Landing Page/sale banner/download 121.png';
import payPalMobileBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/PAYPAL-BANNER 1.png';
import sixMonthCreditImage from '../../../Assets/Furniture Mecca/Landing Page/sale banner/download 122.png';
import paymentOptionsBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/Frame 4278.png'
import { useParams } from 'react-router-dom';

const ProductArchive = ({productArchiveHading}) => {
  // Breadcrup component data
  const breadcrumRecentData = [
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
    {img: underFifteen, title: 'Under $1500'},
    {img: sofaAndLoveSeat, title: 'Sofa & Love Seat Sets'},
    {img: sectionalSets, title: 'Sectional Sets'},
]


  return (
    <div>
        <BreadCrumWithProduct 
          breadcrumRecentData={breadcrumRecentData}  
        />
        <Products 
          productArchiveHading={productArchiveHading}
        />
        <RelatedCategories />
        <FAQ />
        <MobileFinancingSlider />
        <AnnouncmentBanners 
          bannerImage={twelveMonthCreditOfferImage} 
          padding={'10px'}
        />
        <AnnouncmentBanners 
          bannerImage={payPalMobileBanner} 
          padding={'10px 0'}
        />
        <AnnouncmentBanners 
          bannerImage={sixMonthCreditImage} 
          padding={'10px 0'}
        />
        <AnnouncmentBanners 
          bannerImage={paymentOptionsBanner} 
          padding={'10px 0'}
        />
    </div>    
  )
}

export default ProductArchive
