import { Route } from "react-router-dom";
import Home from "../../UI/Pages/Home/Home";
import Categories from "../../UI/Pages/Categories/Categories";
import ProductArchive from "../../UI/Pages/ProductArchive/ProductArchive";
import SingleProduct from "../../UI/Pages/SingleProduct/SingleProduct";
import Cart from "../../UI/Pages/Cart/Cart";
import Summary from "../../UI/Pages/Summery/Summary";
import PageNotFound from "../../UI/Pages/404Page/404Page";

// Main Images
import livingRoomMainImage from '../../Assets/pages-main-images/Living-Room-Desk-1-1024x341.jpg';
import bedroomMainImage from '../../Assets/pages-main-images/Bedroom-Desk-1.jpg';
import diningRoomMainImage from '../../Assets/pages-main-images/Dining-Room-Desk-1 1.399203c025f09981256a.jpg';
import mattressesMainImage from '../../Assets/pages-main-images/Mattresses-Desk-1-1024x341.jpg';
import kidsMainImage from '../../Assets/pages-main-images/Kids-Room-Desk-1-1024x341.jpg';
import accentFurnitureMainImage from '../../Assets/pages-main-images/Accent-Furniture-Desk-1-1024x341.jpg';
import smallSpaceMainImage from '../../Assets/pages-main-images/Small-Space-Desk-1-1024x341.jpg';
import outletMainImage from '../../Assets/pages-main-images/Outlet-Desk-1-1024x341.jpg';
import tentSaleMainImage from '../../Assets/pages-main-images/Main-Banner-Desktop-1-1536x409.jpg'

// Mobile view pages main images
import livingRoomMobileBanner from '../../Assets/mobile-view-pages-main-images/Living-Room-Mobile-Banner.webp'
import bedRoomMobileBanner from '../../Assets/mobile-view-pages-main-images/Bedroom-Mobile-Banner.webp'
import dinningRoomMobileBanner from '../../Assets/mobile-view-pages-main-images/Dining-Room-Mobile-Banner.webp'
import mattresessMobileBanner from '../../Assets/mobile-view-pages-main-images/Mattresses-Mobile-Banner.webp'
import kidsMobileBanner from '../../Assets/mobile-view-pages-main-images/Kids-Room-Mobile-Banner.webp'
import accentMobileBanner from '../../Assets/mobile-view-pages-main-images/Accent-Furniture-Mobile-Banner.webp'
import outletMobileBanner from '../../Assets/mobile-view-pages-main-images/Dining-Room-Mobile-Banner.webp'
import rugsMobileBanner from '../../Assets/mobile-view-pages-main-images/Dining-Room-Mobile-Banner.webp'
import smallSpacesMobileBanner from '../../Assets/mobile-view-pages-main-images/Small-Space-Mobile-Banner.webp'

import newArrivalImage from '../../Assets/category/new-arrival.png';
import livingRoomImage from '../../Assets/category/living-room.png';
import diningImage from '../../Assets/category/dining.png';
import bedroomImage from '../../Assets/category/badroom.png';
import outDoorImage from '../../Assets/category/out-door.png';
import recliningImage from '../../Assets/category/reclining.png';
import SectionaSofa from '../../Assets/to-be-change/sectional-sofa.png';
import Mattresses from '../../Assets/to-be-change/mattresses.png';
import HomeOffice from '../../Assets/to-be-change/home-office.png';
import KidsRoom from '../../Assets/to-be-change/kids-room.png';
import AreaRugs from '../../Assets/to-be-change/area-rugs.png';
import HomeDecor from '../../Assets/to-be-change/home-decor.png';
import Outlet from '../../Assets/to-be-change/outlet.png';
import Financing from "../../UI/Pages/Financing/Financing";
import LoginRegister from "../../UI/Pages/LoginRegisteration/LoginRegister";
import UserDashboard from "../../UI/Pages/UserDashboard/UserDashboard";
import Careers from "../../UI/Pages/Careers/Careers";
import FurnitureAtEveryBudget from "../../UI/Pages/FurnitureAtEveryBudget/FurnitureAtEveryBudget";
import StoreLocator from "../../UI/Pages/StoreLocator/StoreLocator";
import BlogPage from "../../UI/Pages/Blogs/BlogPage";
import SingleBlog from "../../UI/Pages/SingleBlog/SingleBlog";
import WishList from "../../UI/Pages/WishList/WishList";
import ActiveCategoryPage from "../../UI/Pages/ActiveCategoryPage/ActiveCategoryPage";
import BookAppointment from "../../UI/Pages/BookAppointment/BookAppointment";
import ShippingAndDelivery from "../../UI/Pages/ShippingAndDelivery/ShippingAndDelivery";
import TermsAndConditions from "../../UI/Pages/TermsAndCondition/TermsAndConditions";
import PrivacyPolicy from "../../UI/Pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "../../UI/Pages/Contact/Contact";

const categoryCardData = [
    { title: "Dining Room Sets", img: newArrivalImage, link: '#' },
    { title: "Pub Height Dining Sets", img: livingRoomImage, link: '#' },
    { title: "Dining Table", img: diningImage, link: '#' },
    { title: "Dining Chairs & Banches", img: bedroomImage, link: '#' },
    { title: "Counter & Bar  Stools", img: outDoorImage, link: '#' },
    { title: "Server Buffets & China Cabinate", img: recliningImage, link: '#' },
    { title: "Small Space Dining", img: SectionaSofa, link: '#' },
    { title: "Dining Room Collections", img: Mattresses, link: '#' },
    { title: "Shop All Dining", img: HomeOffice, link: '#' },
    { title: "Dining Room Outlets", img: KidsRoom, link: '#' },
    { title: "Area Rugs", img: AreaRugs, link: '#' },
    { title: "Home Decor", img: HomeDecor, link: '#' },
    { title: "Outlet", img: Outlet, link: '#' },
]
const routes = (

    <>
        <Route exact path="/" element={<Home />} />
        {/* Living Room */}
        <Route
            path="/living-room-category"
            element={
                <Categories
                    categoriesMainImage={livingRoomMainImage}
                    mobileViewMainImage={livingRoomMobileBanner}
                    categoryCartTitle={'Living Room'}
                    showPromotionsBaneers={false}
                    categoryCardData={categoryCardData}
                />
            }
        />
        <Route path='/product-category/living-room/living-room-sets' element={<ProductArchive productArchiveHading={`Living Room Sets`} />} />
        <Route path='/product-category/living-room/sofa-loveseat-sets' element={<ProductArchive productArchiveHading={`Sofa & Loveseats`} />} />
        <Route path='/product-category/living-room/sectionals' element={<ProductArchive productArchiveHading={`Sectionals`} />} />
        <Route path='/product-category/living-room/reclining-sets' element={<ProductArchive productArchiveHading={`Reclining Sets`} />} />
        <Route path='/product-category/living-room/sofas' element={<ProductArchive productArchiveHading={`Sofas`} />} />
        <Route path='/product-category/living-room/sleeper-sofas' element={<ProductArchive productArchiveHading={`Sleeper Sofas`} />} />
        <Route path='/product-category/living-room/loveseats' element={<ProductArchive productArchiveHading={`Loveseats`} />} />
        <Route path='/product-category/living-room/small-space-living-rooms' element={<ProductArchive productArchiveHading={`Small Space Living Rooms`} />} />
        <Route path='/product-category/living-room/living-room-outlet' element={<ProductArchive productArchiveHading={`Living Room Outlets`} />} />

        {/* BedRoom */}
        <Route
            path="/bedroom-category"
            element={
                <Categories
                    categoriesMainImage={bedroomMainImage}
                    mobileViewMainImage={bedRoomMobileBanner}
                    categoryCartTitle={'Bedroom Set'}
                    showPromotionsBaneers={false}
                    categoryCardData={categoryCardData}
                />
            }
        />
        <Route path='/product-category/bedroom/bedroom-sets' element={<ProductArchive productArchiveHading={`Bedroom Sets`} />} />
        <Route path='/product-category/bedroom/beds-headboards' element={<ProductArchive productArchiveHading={`Beds Headboards`} />} />
        <Route path='/product-category/bedroom/dresser-mirror-sets' element={<ProductArchive productArchiveHading={`Dresser Mirror Sets`} />} />
        <Route path='/product-category/bedroom/dressers' element={<ProductArchive productArchiveHading={`Dressers`} />} />
        <Route path='/product-category/bedroom/chests' element={<ProductArchive productArchiveHading={`Chests`} />} />
        <Route path='/product-category/bedroom/nightstands' element={<ProductArchive productArchiveHading={`Night Stands`} />} />
        <Route path='/product-category/bedroom/mirrors' element={<ProductArchive productArchiveHading={`Mirrors`} />} />
        <Route path='/product-category/bedroom/twin-beds' element={<ProductArchive productArchiveHading={`Twin Beds`} />} />
        <Route path='/product-category/bedroom/queen-beds-fm' element={<ProductArchive productArchiveHading={`Queen Beds`} />} />
        <Route path='/product-category/bedroom/full-beds' element={<ProductArchive productArchiveHading={`Full Beds`} />} />
        <Route path='/product-category/bedroom/king-beds/' element={<ProductArchive productArchiveHading={`King Beds`} />} />
        <Route path='/product-category/bedroom/small-space-bedrooms' element={<ProductArchive productArchiveHading={`Small Spaces Bedrooms`} />} />
        <Route path='/product-category/bedroom/bedroom-outlet' element={<ProductArchive productArchiveHading={`Bedroom Outlet`} />} />

        {/* Dining Room */}
        <Route
            path="/dining-room-category"
            element={
                <Categories
                    categoriesMainImage={diningRoomMainImage}
                    mobileViewMainImage={dinningRoomMobileBanner}
                    categoryCartTitle={'Dining Room'}
                    showPromotionsBaneers={false}
                    categoryCardData={categoryCardData}
                />
            }
        />
        <Route path='/product-category/dining-room/dining-room-sets' element={<ProductArchive productArchiveHading={`Dining Room Sets`} />} />
        <Route path='/product-category/dining-room/pub-heights-dining-sets' element={<ProductArchive productArchiveHading={`Pub Hights Dining Sets`} />} />
        <Route path='/product-category/dining-room/dining-chairs-benches' element={<ProductArchive productArchiveHading={`Dining Chairs & Benches`} />} />
        <Route path='/product-category/dining-room/dining-tables' element={<ProductArchive productArchiveHading={`Dining Tables`} />} />
        <Route path='/product-category/dining-room/bar-pub-stools' element={<ProductArchive productArchiveHading={`Bar Put Stools`} />} />
        <Route path='/product-category/dining-room/servers-buffets-china-cabinets' element={<ProductArchive productArchiveHading={`Servers Buffets China Cabinates`} />} />

        {/* Mattresses */}
        <Route
            path="/mattresses-category"
            element={
                <Categories
                    categoriesMainImage={mattressesMainImage}
                    mobileViewMainImage={mattresessMobileBanner}
                    categoryCartTitle={'Mattresses'}
                    showPromotionsBaneers={false}
                    categoryCardData={categoryCardData}
                />
            }
        />

        <Route path='/product-category/mattresses/twin-size' element={<ProductArchive productArchiveHading={`Twin Size`} />} />
        <Route path='/product-category/mattresses/queen-size' element={<ProductArchive productArchiveHading={`Queen Size`} />} />
        <Route path='/product-category/mattresses/full-size' element={<ProductArchive productArchiveHading={`Full Size`} />} />
        <Route path='/product-category/mattresses/king-size' element={<ProductArchive productArchiveHading={`King Size`} />} />
        <Route path='/product-category/mattresses/bed-frames' element={<ProductArchive productArchiveHading={`Bed Frames`} />} />
        <Route path='/product-category/mattresses/pillows' element={<ProductArchive productArchiveHading={`Pillows`} />} />
        <Route path='/product-category/mattresses/memory-foam-mattresses' element={<ProductArchive productArchiveHading={`Memory Foam Mattresses`} />} />
        <Route path='/product-category/mattresses/box-springs' element={<ProductArchive productArchiveHading={`Box Springs`} />} />
        <Route path='/product-category/mattresses/mattress-protection' element={<ProductArchive productArchiveHading={`Mattress Protection`} />} />
        <Route path='/product-category/mattresses/sale-mattresses' element={<ProductArchive productArchiveHading={`Sale Mattresses`} />} />

        {/* Kids Room */}
        <Route
            path="/kids-category"
            element={
                <Categories
                    categoriesMainImage={kidsMainImage}
                    mobileViewMainImage={kidsMobileBanner}
                    showPromotionsBaneers={false}
                    categoryCartTitle={'Kids Room'}
                    categoryCardData={categoryCardData}
                />
            }
        />

        <Route path='/product-category/kids/kids-bedroom-sets' element={<ProductArchive productArchiveHading={`Kids Bedreem Sets`} />} />
        <Route path='/product-category/kids/kids-room' element={<ProductArchive productArchiveHading={`Kids Room`} />} />
        <Route path='/product-category/kids/kids-beds-headboards' element={<ProductArchive productArchiveHading={`Kids Beds Headboards`} />} />
        <Route path='/product-category/kids/kids-bedroom-storage' element={<ProductArchive productArchiveHading={`Kids Bedroom Storage`} />} />
        <Route path='/product-category/kids/sale-kids-room' element={<ProductArchive productArchiveHading={`Sale Kids Room`} />} />

        {/* Accent & Rugs */}
        <Route
            path="/accent-furniture-category"
            element={
                <Categories
                    categoriesMainImage={accentFurnitureMainImage}
                    mobileViewMainImage={accentMobileBanner}
                    showPromotionsBaneers={false}
                    categoryCartTitle={'Accent Furniture And Rugs'}
                    categoryCardData={categoryCardData}
                    newArrival={true}
                />
            }
        />

        {/* Accent Furniture */}
        <Route path='/product-category/accent-furniture/accent-tables' element={<ProductArchive productArchiveHading={`Accent Tables`} />} />
        <Route path='/product-category/accent-furniture/accent-chests-storage' element={<ProductArchive productArchiveHading={`Accent Chest Storage`} />} />
        <Route path='/product-category/accent-furniture/coffee-end-tables' element={<ProductArchive productArchiveHading={`Coffee End Tables`} />} />
        <Route path='/product-category/accent-furniture/lamps-lighting' element={<ProductArchive productArchiveHading={`Lamps Lighting`} />} />
        <Route path='/product-category/accent-furniture/entertainment-centers-tv-stands' element={<ProductArchive productArchiveHading={`Entertainment Center & TV Stands`} />} />
        <Route path='/product-category/accent-furniture/home-office' element={<ProductArchive productArchiveHading={`Home Office`} />} />
        <Route path='/product-category/accent-furniture/benches' element={<ProductArchive productArchiveHading={`Benches`} />} />
        <Route path='/product-category/accent-furniture/sale-accent-furniture' element={<ProductArchive productArchiveHading={`Sale Accent Furniture`} />} />
        {/* Rugs Routes */}
        <Route path='/product-category/rugs-main/machine-washable' element={<ProductArchive productArchiveHading={`Machine Washable`} />} />
        <Route path='/product-category/rugs-main/indoor-outdoor-rugs' element={<ProductArchive productArchiveHading={`Indoor Outdoor Rugs`} />} />
        <Route path='/product-category/rugs-main/runners' element={<ProductArchive productArchiveHading={`Runners`} />} />
        <Route path='/product-category/rugs-main/small-area-rugs' element={<ProductArchive productArchiveHading={`Small Area Rugs`} />} />
        <Route path='/product-category/rugs-main/large-area-rugs' element={<ProductArchive productArchiveHading={`Large Area Rugs`} />} />
        <Route path='/product-category/rugs-main/all-area-rugs' element={<ProductArchive productArchiveHading={`All Area Rugs`} />} />
        <Route path='/product-category/rugs-main/sale-rugs' element={<ProductArchive productArchiveHading={`Sale Rugs`} />} />

        {/* Small Spaces */}
        <Route
            path="/small-spaces"
            element={
                <Categories
                    categoriesMainImage={smallSpaceMainImage}
                    mobileViewMainImage={smallSpacesMobileBanner}
                    categoryCartTitle={'Small Spaces'}
                    showPromotionsBaneers={false}
                    categoryCardData={categoryCardData}
                    newArrival={true}
                />
            }
        />

        <Route path='/product-category/small-space-furniture/small-space-bedrooms' element={<ProductArchive productArchiveHading={`Small Space Bedrooms`} />} />
        <Route path='/product-category/small-space-furniture/small-space-living-rooms' element={<ProductArchive productArchiveHading={`Small Space Living Rooms`} />} />
        <Route path='/product-category/small-space-furniture/small-space-dining-rooms' element={<ProductArchive productArchiveHading={`Small Space Dining Rooms`} />} />

        {/* Outlets */}
        <Route
            path="/sale-category"
            element={
                <Categories
                    categoriesMainImage={outletMainImage}
                    mobileViewMainImage={outletMobileBanner}
                    showPromotionsBaneers={false}
                    categoryCartTitle={'Outlets'}
                    categoryCardData={categoryCardData}
                    newArrival={true}
                />
            }
        />

        <Route path='/steal-deal' element={<ProductArchive productArchiveHading={`Steal Deal`} />} />
        <Route path='/product-category/fall-sale-2024' element={<ProductArchive productArchiveHading={`Fall Sale 2024`} />} />
        <Route path='/product-category/sale/package-deals' element={<ProductArchive productArchiveHading={`Package Deals`} />} />
        <Route path='/product-category/sale/50-off-sale' element={<ProductArchive productArchiveHading={`50% Off Sale`} />} />
        <Route path='/product-category/sale/last-call' element={<ProductArchive productArchiveHading={`Last Call`} />} />

        {/* Sale Day */}
        <Route
            path="/holiday-sale"
            element={
                <ActiveCategoryPage
                />
            }
        />

        {/* Product Archive Page Routes */}
        <Route
            path='/holiday-sale'
            element={
                <ProductArchive
                    productArchiveHading={`Labor Day Sale`}
                />
            }
        />



        {/* Single Product Page Routes */}
        <Route
            path='/single-product/:slug'
            element={
                <SingleProduct />
            }
        />

        {/* Cart And Summery */}
        <Route
            path='/add-to-cart'
            element={
                <Cart
                />
            }
        />

        <Route
            path='/cart-page/check-out'
            element={
                <Summary
                />
            }
        />

        <Route
            path="/financing-option"
            element={<Financing />}
        />

        <Route
            path="/login"
            element={<LoginRegister />}
        />

        <Route
            path="/user-dashboard"
            element={<UserDashboard />}
        />

        <Route
            path="/careers"
            element={<Careers />}
        />
        <Route
            path="/blogs"
            element={<BlogPage />}
        />
        <Route
            path="/single-blog/:id"
            element={<SingleBlog />}
        />
        <Route
            path="/furniture-at-every-budget"
            element={<FurnitureAtEveryBudget />}
        />

        <Route
            path="/:categorySlug"
            element={<Categories />}
        />

        <Route
            path="/:categorySlug/:subCategorySlug"
            element={<ProductArchive />}
        />

        <Route
            path="/our-locations"
            element={<StoreLocator />}
        />
        <Route
            path="/wish-list"
            element={<WishList />}
        />
        
        <Route 
            path="/contact-us"
            element={<Contact />}
        />
        <Route 
            path="/privacy-policy"
            element={<PrivacyPolicy />}
        />
        <Route 
            path="/terms-condition"
            element={<TermsAndConditions />}
        />
        <Route 
            path="/shipping-and-delivery"
            element={<ShippingAndDelivery />}
        />
        <Route 
            path="/book-an-appointment"
            element={<BookAppointment />}
        />

        {/* not found routes */}
        <Route path='*' element={<PageNotFound />} />
    </>
);
export default routes;