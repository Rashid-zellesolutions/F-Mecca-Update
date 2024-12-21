import React, { useState, useEffect } from 'react'
import './Haider.css';
import logo from '../../Assets/Logo/m_logo_360 2.png'
import searchIcon from '../../Assets/icons/search-icon-charcol.png';
import NearStoreIcon from '../../Assets/icons/home.png';
import HeartIcon from '../../Assets/icons/like.png';
// import cartIcon from '../../Assets/icons/new-cart.png';
import cartIcon from '../../Assets/icons/shopping-bag.png';
import mobileCartIcon from '../../Assets/icons/mobile-cart.png';
import profileIcon from '../../Assets/icons/profile.png'
import locationIcon from '../../Assets/icons/location-red.png';
import navToggler from '../../Assets/icons/Union.png'
import searchRed from '../../Assets/icons/search-red.png'
import Nav from '../Navbar/Nav';
import TabMenu from '../Navbar/TabMenu/TabMenu';
import NearStorePopUp from '../../UI/Components/NearStorePopUp/NearStorePopUp';
import { MdOutlineStars } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import usaFlag from '../../Assets/icons/usa-flage.png'
import LocationPopUp from '../../UI/Components/LocationPopUp/LocationPopUp';
import LanguagePopUp from '../../UI/Components/LanguagePopUp/LanguagePopUp';
import PromotionalBanner from '../../UI/Components/PromotionalBanner/PromotionalBanner';
import CartSidePannel from '../../UI/Components/Cart-side-section/CartSidePannel';
import { useCart } from '../../context/cartContext/cartContext';
import { useProducts } from '../../context/productsContext/productContext';
import mobileUserIcon from '../../Assets/icons/user-charcol.png';
import MobileNavbar from '../Navbar/MobileNavbar/MobileNavbar';
import axios from 'axios';
import { url } from '../../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from '../../context/GlobalContext/globalContext';

const Haider = () => {
  // const notify = () => toast()
  const [isTabMenuOpen, setIsTabMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false)
  const { products } = useProducts()
  const { cart, addToCart, cartSectionOpen, setCartSectionOpen, increamentQuantity, decreamentQuantity, removeFromCart, calculateTotalPrice, cartProducts } = useCart()
  const cartItemCount = cart.length
  const handleCartSectionOpen = () => {
    setShowCart(true)
  }
  const handleCartSectionClose = () => {
    setShowCart(false)
  }

  const handleTabMenu = () => {
    setIsTabMenuOpen(!isTabMenuOpen)
  }

  async function fetchHeaderPayloads() {
    // const url = ;

    try {
      const response = await fetch(`${url}/api/v1/header-payloads/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Adjust headers as needed
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Data fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }

  const [headerData,setHeaderData] = useState([]);
  const [headerSale,setHeaderSale] = useState([]);

  useEffect(() => {
    fetchHeaderPayloads().then(data => {
      setHeaderData(data.data[0].categories)
      setHeaderSale(data.data[0].sale)
    }).catch(error => {
      console.error(error);
    });
  }, [])

  const navLinks = [
    { name: "Living Room", link: 'living-room-category', hasDropdown: true },
    { name: "Bedroom", link: '/bedroom-category', hasDropdown: true },
    { name: "Dining Room", link: '/dining-room-category', hasDropdown: true },
    { name: "Mattresses", link: '/mattresses-category', hasDropdown: true },
    { name: "Kids", link: '/kids-category', hasDropdown: true },
    { name: "Accent Furniture / Rugs", link: '/accent-furniture-category', hasDropdown: true },
    { name: "Small Spaces", link: '/small-spaces', hasDropdown: true },
    { name: "Outlets", link: '/sale-category', hasDropdown: true },
    { name: "Holiday Sale", link: '/holiday-sale', hasDropdown: true },

  ]
  const [nearStorePopUp, setNearStorePopUp] = useState(false)
  const handleNearStorePopUp = () => {
    setNearStorePopUp(true)
  }

  const handleCloseNearStoreModal = () => {
    setNearStorePopUp(false)
    console.log("near stor pop up", nearStorePopUp)
  }

  // const storeDetailsData = [
  //   {
  //     city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
  //     address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
  //     outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
  //       { day: 'Sunday', time: '06: 30 PM' },
  //       { day: 'Monday', time: '06: 30 PM' },
  //       { day: 'Tuesday', time: '06: 30 PM' },
  //       { day: 'Wednesday', time: '06: 30 PM' },
  //       { day: 'Thursday', time: '06: 30 PM' },
  //       { day: 'Friday', time: '06: 30 PM' },
  //       { day: 'Saturday', time: '06: 30 PM' },
  //     ],
  //     virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
  //   },
  //   {
  //     city: 'Philadelphia', miles: '0.8 Miles', openUntil: '(Open Until 06: 30 PM)', openUntilIcon: <MdOutlineStars size={20} />,
  //     address: 'E Venango st, Philadelphia, PA 19134', addressCity: 'Philadelphia, Pennsylvania, 101', call: '267-639-6801',
  //     outlet: 'Outlet', outletLink: '#', direction: 'Directions', directionLink: '#', appointment: 'Book Appointment', appointmentLink: '#', openHours: 'Store Hours', hours: [
  //       { day: 'Sunday', time: '06: 30 PM' },
  //       { day: 'Monday', time: '06: 30 PM' },
  //       { day: 'Tuesday', time: '06: 30 PM' },
  //       { day: 'Wednesday', time: '06: 30 PM' },
  //       { day: 'Thursday', time: '06: 30 PM' },
  //       { day: 'Friday', time: '06: 30 PM' },
  //       { day: 'Saturday', time: '06: 30 PM' },
  //     ],
  //     virtualTour: 'Virtual Tour', virtualTourLink: '#', storeDetails: 'Store DEtails', storeDetailsLink: '#'
  //   }
  // ]

  // Language Modal Script
  
  const [changeLanguage, setChangeLanguage] = useState(false)
  const [currentSelectedCountry, setCurrentSelectedCountry] = useState('');
  const [currentSelectedCountryFlag, setCurrentSelectedCountryFlag] = useState();

  const handleLanguageModal = () => {
    setChangeLanguage(true)
  }

  const handleCLoseLanguageModal = () => {
    setChangeLanguage(false);
  }

  // Location Modat script
  const [searchLocation, setSearchLocation] = useState(false);


  const handleSearchModal = () => {
    setSearchLocation(true)
  }
  const handleCloseSearch = () => {
    setSearchLocation(false)
    console.log("close btn cicked", searchLocation)
  }
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const showMobileNav = () => {
    setMobileNavVisible(true)
  }

  // Login redirect

  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentInd, setCurrentInd] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const searchForProducts = async (text) => {
    const api = `/api/v1/products/by-name?name`;
    try {
      setIsSearching(true)
      setIsLoading(true);
      const response = await axios.get(`${url}${api}=${text}`)
      console.log("searched response", response.data.products)
      setSearchedProducts(response.data.products)
    } catch (error) {
      console.error("error fething data", error);
    } finally {
      setIsSearching(false)
      setIsLoading(false)
    }

  }

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 2) {
      searchForProducts(value);
    } else {
      setSearchedProducts([]);
    }
  }

  const handleSearchInputFocus = () => setIsSearchInputFocused(true);
  const handleBlur = () => {
    setIsSearchInputFocused(false)
    setSearchQuery('')
    setSearchedProducts([])
  }

  // Card title words limit
  const maxLength = 15;
  // const nameLength = 20;
  const descriptionLength = 200
  const truncateTitle = (title, maxLength) => {
    if (!title) return '';
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
  };

  // const formatedSku = searchedProducts[currentInd].sku.split(':');
  const handleProductHOver = (index) => {
    setCurrentInd(index);
  }
  const handleMouseLeave = () => {
    setCurrentInd(0)
  }

  const highLightText = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  const handleNavigateToSingleProduct = (items) => {
    navigate(`/single-product/${items.slug}`, { state: items })
    setSearchQuery('')
    setSearchedProducts([])

  }

  const [locationDetails, setLocationDetails] = useState({
    zipCode: '',
    city: '',
    state: '',
    country: ''
  });

  const nearZip = locationDetails.zipCode || 'PA 19134';
  const nearState = locationDetails.state || 'E Venango - ST';
  // console.log("on header location details", locationDetails)


  const { info } = useGlobalContext();
  return (
    <div className='haider-main-container'>

      {/* Banner Responsive */}
      <PromotionalBanner
        handleLanguageModal={handleLanguageModal}
        handleDeliverModal={handleSearchModal}
        currentSelectedCountryFlag={currentSelectedCountryFlag}
        usaFlag={usaFlag}
        currentSelectedCountry={currentSelectedCountry}
      />
      {/* Desktop view header */}
      <div className='header'>
        <div className='logo-container'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {isSearchInputFocused ? <div className='on-input-focus-overlay'></div> : <></>}
        <div className={`search-bar-container ${searchedProducts.length > 0 || isSearchInputFocused ? 'focused-search-container' : ''}`}>
          {/* {isSearchInputFocused ? <div className='on-input-focus-overlay'></div> : <></>} */}
          <div className='search-bar-div'>
            <img src={searchIcon} alt="search icon" />
            <input
              type='search'
              value={searchQuery}
              placeholder='Search every thing'
              onFocus={handleSearchInputFocus}
              onBlur={handleBlur}
              onChange={handleSearchInput}
            />
            {isLoading ? <div className='input-loader'></div> : <></>}
          </div>
          <div className={`search-product-display-div ${searchedProducts.length > 0 ? 'search-product-display-div-focused' : ''}`}>
            <div className='search-products-display-left'>
              <div className='searched-products'>
                {searchedProducts.slice(0, 4).map((items, index) => (
                  <div
                    key={index}
                    className='searched-product'
                    onMouseEnter={() => handleProductHOver(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleNavigateToSingleProduct(items)}
                  >
                    <img src={`${url}${items.image.image_url}`} alt='main' />
                    <div className='searched-product-name-and-sku'>
                      <h3>{highLightText(truncateTitle(items.name, maxLength), searchQuery)}</h3>
                      <p>({items.sku})</p>
                    </div>
                    <div className='searched-product-prices'>
                      {
                        items.sale_price === "0" ?
                          <h3 className='searched-product-regular-price'>${items.regular_price}</h3> :
                          <h3 className='searched-product-sale-price'> <del>${items.regular_price}</del>  ${items.sale_price}</h3>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <button className='see-all-searched-products'>See all Products {searchForProducts?.length}</button>
            </div>
            <div className='search-product-display-right'>
              <div className='searched-selected-product-main-image-div'>
                <img
                  src={`${url}${searchedProducts?.[currentInd]?.image?.image_url}`}
                  alt='main-img'
                  className='searched-selected-product-main-image'
                />
              </div>
              <div className='searched-selected-product-name-and-price'>
                <h3 className='searched-selected-product-name'>{truncateTitle(searchedProducts?.[currentInd]?.name, maxLength)}</h3>
                <p className='searched-selected-product-sku'>{searchedProducts?.[currentInd]?.sku?.split(':')}</p>
                <div className='searched-selected-product-price'>
                  {
                    searchedProducts?.[currentInd]?.sale_price === "0" ?
                      <h3 className='searched-product-regular-price'>${searchedProducts?.[currentInd]?.regular_price}</h3> :
                      <h3 className='searched-product-sale-price'> <del>${searchedProducts?.[currentInd]?.regular_price}</del>  ${searchedProducts?.[currentInd]?.sale_price}</h3>
                  }
                </div>
              </div>
              <div className='searched-selected-product-description-div'>
                <p className='searched-selected-product-description'>{truncateTitle(searchedProducts?.[currentInd]?.description, descriptionLength)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='nearby-address-container'>
          <div className='nearby-address-div'>
            <div className='icon-and-nearby-city'>
              <img src={NearStoreIcon} alt='near by' onClick={handleNearStorePopUp} />
              <NearStorePopUp isOpen={nearStorePopUp} handleCloseNearBy={handleCloseNearStoreModal} />
              <div className='near-by-city-time' onClick={handleNearStorePopUp}>
                <p>Nearest Store</p>
                <span>
                  <Link> {nearState} </Link><p> (Opens at 09:30 AM)</p>
                </span>
              </div>
              <span className='deliver-to' onClick={handleSearchModal}>
                <p>Deliver to</p>
                <span>{info.locationData.zipCode} {info.locationData.stateCode}</span>
              </span>
            </div>
          </div>
        </div>

        <div className='header-icons-container'>
          <Link to={'/login'}>
            <img src={profileIcon} alt="profile" />
          </Link>
          <Link to={'/wish-list'}>
            <img src={HeartIcon} alt="heart" />
          </Link>
          <button className='header-cart-icon-count' onClick={handleCartSectionOpen}>
            <img src={cartIcon} alt="cart" />
            <p className='header-cart-products-count'>{cartItemCount}</p>
          </button>
        </div>
      </div>

      {/* Tablate Haider */}
      <div className='tab-view-header'>
        <div className='tab-view-header-containt'>
          <div className='header-view-toggle-and-profile-div'>
            <img src={navToggler} alt="togle button" onClick={handleTabMenu} className='tab-view-humburger-icon' />
            <img src={profileIcon} alt="profile" />
          </div>
          <div className='tab-view-logo-and-searchbar'>
            <Link to={'/'}><img src={logo} alt='logo' /></Link>
            <div className='tab-view-searchbar-container'>
              <input type='search' placeholder="Search all things Bob's" />
              <img src={searchRed} alt="search" />
            </div>
          </div>
          <div className='tab-view-card-and-location'>
            <img src={locationIcon} alt="location" />
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>

      {/* Mobile View Header */}
      <div className='mobile-view-header'>
        <div className='mobile-view-logo-and-other-containt-section'>
          <img className='nav-toggler' src={navToggler} alt="togle button" onClick={showMobileNav} />
          <Link to='/'>
            <img className='mobile-logo' src={logo} alt='mobile-logo' />
          </Link>
          <div className='mobile-view-cart-and-location'>
            <img src={locationIcon} alt='location' onClick={handleNearStorePopUp} />
            {/* <img src={mobileCartIcon} alt='cart-icon' onClick={handleCartSectionOpen} /> */}
            <button className='header-cart-icon-count' onClick={handleCartSectionOpen}>
            <img src={cartIcon} alt="cart" />
            <p className='header-cart-products-count'>{cartItemCount}</p>
          </button>
          </div>
        </div>
        <div className='mobile-view-search-section'>
          <div className='mobile-view-search'>
            <img src={searchIcon} alt='search-icon' />
            <input type='text' placeholder='Search All Things Mecca' />
          </div>
          <Link href='/login'>
            <img className='mobile-user-icon' src={mobileUserIcon} alt='user-icon' />
          </Link>
        </div>

      </div>
      {
      isTabMenuOpen ? 
      <TabMenu isNavbarVisible={isTabMenuOpen} setIsNavbarVisible={setIsTabMenuOpen} navLinks={navLinks} /> :
      <Nav navLinks={headerData && headerData} sale_data={headerSale && headerSale} />
      }

      {/* Language Modal */}
      <LanguagePopUp
        changeLanguage={changeLanguage}
        setChangeLanguage={setChangeLanguage}
        handleCLoseLanguageModal={handleCLoseLanguageModal}
        currentSelectedCountry={currentSelectedCountry}
        setCurrentSelectedCountry={setCurrentSelectedCountry}
        currentSelectedCountryFlag={currentSelectedCountryFlag}
        setCurrentSelectedCountryFlag={setCurrentSelectedCountryFlag}
      />

      {/* Location Modal */}
      <LocationPopUp
        searchLocation={searchLocation}
        handleCloseSearch={handleCloseSearch}
        setLocationDetails={setLocationDetails}
        locationDetails={locationDetails}
      />
      <CartSidePannel
        cartData={cartProducts}
        addToCartClicked={showCart}
        setAddToCartClick={setShowCart}
        handleCartSectionClose={handleCartSectionClose}
        increamentQuantity={increamentQuantity}
        decreamentQuantity={decreamentQuantity}
        removeFromCart={removeFromCart}
      />
      <MobileNavbar
        showMobileNav={mobileNavVisible}
        setMobileNavVisible={setMobileNavVisible}
      />
    </div>
  )
}

export default Haider