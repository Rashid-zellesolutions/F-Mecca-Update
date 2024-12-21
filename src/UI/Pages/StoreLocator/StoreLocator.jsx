import React, { useState, useEffect, useRef } from 'react'
import './StoreLocator.css'
import mapImage from '../../../Assets/all-stores-location-images/stores-map-img.png'
import searchIcon from '../../../Assets/icons/search-white.png';
import locationIcon from '../../../Assets/icons/location-charcol-icon.png'
import eyeIcon from '../../../Assets/icons/eye-white.png'
import directionArrow from '../../../Assets/icons/direction-arrow.png'
import storeImage from '../../../Assets/all-stores-location-images/store-image.png'
import { FaStar } from "react-icons/fa";
import { GoogleMap, useLoadScript, LoadScript, Marker } from '@react-google-maps/api';
import directionIcon from '../../../Assets/icons/direction-icon.png';
import closeBtn from '../../../Assets/icons/cancel.png';
import blueTick from '../../../Assets/icons/blue-tick.png'
import axios from 'axios';


const StoreLocator = () => {
  const API_KEY = `AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry`

  const [storesApiData, setStoresApiData] = useState()

  const storesData = [
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
    {
      img: storeImage,
      storeName: 'Furniture Mecca',
      distance: '19.5M',
      address: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101',
      contact: '267-639-6801'
    },
  ]
  const commentData = [
    {
      useName: 'Nana Adwoa Serwah',
      profile: storeImage,
      comment: `Owner was Amazing. He had the time to talk with us concerning the couch we bought. We even got a deal. Come here for sure for my next furniture shopping.`,
    }
  ]

  const [showLocationDetails, setShowLocationDetails] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleLocationDetails = (index) => {
    setCurrentIndex(index);
    setShowLocationDetails((prevState) => prevState === index ? null : index);
  }

  const [sliderIndex, setSliderIndex] = useState(0);

  const images = [
    storeImage, // Replace with storeImage dynamically if needed
    storeImage, // Duplicate or add more images for demonstration
    storeImage,
  ];

  const handleDotClick = (index) => {
    setSliderIndex(index);
  };


  // mobile view script
  const [storeSelected, setStoreSelected] = useState('store-list');
  const [showBottomModal, setShowBottomModal] = useState(false);
  const [altitude, setAltitude] = useState({
    longitude: 0,
    latitude: 0
  })
  const handleShowTab = (type, lat, long) => {
    setStoreSelected(type);
    altitude.latitude = lat
    altitude.longitude = long
    console.log("longitude and latitude", altitude)
    if (type === 'map') {
      setTimeout(() => {
        setShowBottomModal(true)
        console.log("time out run")
      }, 1000);
    } else {
      setShowBottomModal(false)
      console.log("false bottom modal")
    }
  }
  const handleCloseBottomModal = () => {
    setShowBottomModal(false)
    // setStoreSelected('store-list')
  }

  // Google map code

  // const [loadMap, setLoadMap] = useState()
  // const API_END_POINT = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${altitude.latitude},${altitude.longitude}&key=${API_KEY}`;

  const fetchUserReviews = async (placeId) => {
    // const apiendpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${API_KEY}`;
    const apiendpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.0045027,-75.1276754&key=AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry`
    try {
      const response = await axios.get(apiendpoint);
      console.log("user reviews api response", response)
    } catch (error) {
      console.error("error geting google reviews", error);
    }
  }

  useEffect(() => {
    const fetchStoresData = async () => {
      const api = 'https://fm.skyhub.pk/api/v1/stores/get';
      try {
        const response = await axios.get(`${api}`);
        const stores = response.data.data
        console.log("response stores", stores);
        // setStoresApiData(response.data.data)
        // Loop through stores to fetch reviews
        const updatedStores = await Promise.all(
          stores.map(async (store) => {
            const reviews = await fetchUserReviews(store.place_id); // Assuming you have `place_id` in your store data
            return { ...store, reviews };
          })
        );
        setStoresApiData(updatedStores)
      } catch (error) {
        console.error("error fetching stores data", error);
      }
    }
    fetchStoresData();
  }, [])

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100%",
    height: "100%", // Set appropriate height for the map container
  };
  const center = {
    lat: altitude.latitude,
    lng: altitude.longitude, // Default longitude
  };

  // Load Google Maps API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY, // Replace with your actual API key
    libraries: libraries
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <div className='store-locator-main-container'>
      <h3 className='store-locator-main-heading'>Store Locator</h3>

      {/* Desktop view */}
      <div className='all-stores-side-section-and-map'>
        <div className='all-stores-side-section'>

          <div className='all-stores-search-and-location-bar'>
            <div className='all-store-search-bar-container'>
              <div className='all-store-search-bar'>
                <input type='text' placeholder='Enter Zip Code' className='all-store-search-input' />
                <button className='all-store-search-button'>
                  <img src={searchIcon} alt='search' />
                </button>
              </div>
            </div>
            <div className='all-store-location-button-div'>
              <button className='all-store-location-button'>
                <img src={locationIcon} alt='location' />
                Current Location
              </button>
            </div>
          </div>

          <div className='all-stores-cards'>
            {storesApiData && storesApiData.map((item, index) => (
              <div key={index} className='store-single-card'>
                <div className='single-store-head'>
                  <h3>{item.name}</h3>
                  {/* <p>{item.distance}</p> */}
                </div>
                <div className='single-card-address-and-contact'>
                  <span className='single-card-address-and-contact-span'>
                    <p className='single-card-span-heading'>Address</p>
                    <p className='single-card-details'>{item.address_1}</p>
                  </span>
                  <span className='single-card-address-and-contact-span'>
                    <p className='single-card-span-heading'>Contact</p>
                    <p className='single-card-details'>{item.phone}</p>
                  </span>
                </div>
                <div className='single-card-view-details-button-div'>
                  <button className='single-card-view-details-button' onClick={() => handleLocationDetails(index)}>
                    <img src={eyeIcon} alt='eye' />
                    View Location
                  </button>
                </div>
              </div>
            ))}

          </div>

          <div className={`single-location-full-details ${showLocationDetails === currentIndex ? 'show-single-location-details' : ''}`}>

            <div className='single-location-details-bar-slider'>
              <div className="single-location-slider">
                <div className="single-location-slider-wrapper">
                  <div
                    className="slider-track"
                    style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <div className="single-location-slide" key={index}>
                        <img src={image} alt="stores" />
                        {/* <p>...</p> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${sliderIndex === index ? "active" : ""}`}
                      onClick={() => handleDotClick(index)}
                    ></button>
                  ))}
                </div>
              </div>

            </div>

            <div className='single-location-details-bar-heading-and-direction-button'>
              <div className='single-store-bar-heading-and-rating'>
                <h3>{storesData?.[currentIndex]?.storeName}</h3>
                <div className='single-location-bar-rating'>
                  {[0, 1, 2, 3, 4].map((item, index) => (
                    <FaStar size={15} color='#F0AD4E' />
                  ))}
                </div>
              </div>
              <button className='single-location-direction-button'>
                <img src={directionArrow} alt='direction arrow' />
              </button>
            </div>

            <div className='single-location-address-and-contact-details'>
              <h3>{storesData?.[currentIndex]?.address}</h3>
              <p>{storesData?.[currentIndex]?.contact}</p>
              <p>09:30 AM - 06:30 PM</p>
              <p>Mon, Tues, Wed, Thur, Fri, Sat, Sun</p>
            </div>
            <h3 className='comments-top-heading'>Reviews & Ratings:</h3>
            {
              commentData.map((item, index) => (
                <div className='single-location-comment-card'>
                  <div className='comment-user-section'>
                    <img src={item.profile} alt='profile' className='user-profile-picture' />
                    <div className='comment-user-name-and-rating'>
                      <h3>{item.useName}</h3>
                      <div className='user-rating'>
                        {[0, 1, 2, 3, 4].map((star, index) => (
                          <FaStar size={15} color='#F0AD4E' />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className='comment-user-feedback'>{item.comment}</p>
                </div>
              ))
            }
          </div >
        </div >
        <div className="all-store-map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <div className="loading-map-container">
              <p>Loading map...</p>
            </div>
          )}

        </div>
      </div >

      {/* Mobile view */}
      <div className='mobile-view-store-and-map'>
        <div className='mobile-view-list-and-map-toggler-button'>
          <button className={`mobile-view-store-list-button ${storeSelected === 'store-list' ? 'selected-store-list-map-button' : ''}`} onClick={() => handleShowTab('store-list')}>Store List</button>
          <button className={`mobile-view-map-button ${storeSelected === 'map' ? 'selected-store-list-map-button' : ''}`} onClick={() => handleShowTab('map')} >Map</button>
        </div>
        {storeSelected === 'map' ? (
          <div className='mobile-view-single-store-map'>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <div className="loading-map-container">
                <p>Loading map...</p>
              </div>
            )}
          </div>
        ) : (
          <div className='mobile-view-stores-list'>
            {storesApiData && storesApiData.map((item, index) => (
              <div
                key={index}
                className='mobile-view-single-store-card'
              >
                <button
                  onClick={() => handleShowTab('map', item.longitude, item.latitude)}
                  className='mobile-view-store-direction-button'
                >
                  <img src={directionIcon} alt='direction-icon' />
                </button>
                <div className='mobile-view-single-store-image-div'>
                  <img src={`https://fm.skyhub.pk${item.images[0].image_url}`} alt='store profile' className='mobile-view-single-store-image' />
                </div>
                <div className='mobile-view-single-store-details'>
                  <p>{item.address_1}</p>
                  <p>{item.phone}</p>
                  <p>{item.timings[0].time}</p>
                  <div className='mobile-view-single-card-days'>
                    {item.timings.map((day, dayIndex) => (
                      <p>{day.day},</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`mobile-view-bottom-modal ${showBottomModal ? 'show-bottom-modal' : ''}`} onClick={handleCloseBottomModal}>
        <div className='mobile-view-bottom-modal-inner-container' onClick={(e) => e.stopPropagation()}>
          <div className='mobile-view-bottom-modal-header'>
            <div className='mobile-view-bottom-modal-top-header-line'>
              <hr className='horizontal-line' />
            </div>
            <button className='mobile-view-bottom-modal-close-button' onClick={handleCloseBottomModal}>
              <img src={closeBtn} alt='close btn' />
            </button>
          </div>

          <div className="single-location-slider">
            <div className="single-location-slider-wrapper">
              <div
                className="mobile-view-slider-track"
                style={{ transform: `translateX(-${sliderIndex * 140}px)` }}
              >
                {images.map((image, index) => (
                  <div className="mobile-view-single-location-slide" key={index}>
                    <img src={image} alt="stores" />
                    {/* <p>...</p> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="mobile-view-slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${sliderIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>

          <div className='mobile-view-bottom-modal-delivery-options'>
            <h3 className='mobile-heading-comments-top-heading'>Delivery Options:</h3>
            <span>
              <img src={blueTick} alt='blue-tick' />
              In-store pickup
            </span>
            <span>
              <img src={blueTick} alt='blue-tick' />
              Delivery
            </span>
          </div>

          <h3 className='mobile-heading-comments-top-heading'>Reviews & Ratings:</h3>
          <div className='mobile-view-rating-and-reviews-of-product'>
            <p>4.1</p>
            <div>
              {[0, 1, 2, 3, 4].map((item, index) => (
                <FaStar size={15} color='#50BED3' />
              ))}
            </div>
            <p>(1707 Reviews)</p>
          </div>
          {
            commentData.map((item, index) => (
              <div className='single-location-comment-card'>
                <div className='comment-user-section'>
                  <img src={item.profile} alt='profile' className='user-profile-picture' />
                  <div className='comment-user-name-and-rating'>
                    <h3>{item.useName}</h3>
                    <div className='user-rating'>
                      {[0, 1, 2, 3, 4].map((star, index) => (
                        <FaStar size={15} color='#F0AD4E' />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='comment-user-feedback'>{item.comment}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default StoreLocator
