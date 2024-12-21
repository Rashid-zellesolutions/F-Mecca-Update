import React, { useState, useEffect } from 'react'
import './NearStorePopUp.css';
import NearStore from '../../../Assets/icons/home.png';
import { IoCloseOutline } from "react-icons/io5";
import searchIcon from '../../../Assets/icons/search.png';
import { TbCurrentLocation } from "react-icons/tb";
import AddBtn from '../../../Assets/icons/add-icon.png';
import { MdOutlineStars } from "react-icons/md";
import closeBtn from '../../../Assets/icons/close-btn-black.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context/GlobalContext/globalContext';


const NearStorePopUp = ({ isOpen, setIsOpen, handleCloseNearBy }) => {

    const { savedInfo, fetchAllstores, stores ,info} = useGlobalContext();

    const [storeOpenIndex, setOpenStoreIndex] = useState(-1);
    const handleStoreHoursDetails = (index) => {
        setOpenStoreIndex(storeOpenIndex === index ? -1 : index)
    };
    useEffect(() => {
        fetchAllstores("");
    }, [])

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target.value,"here is ter,s")
        setSearchQuery(event.target.value); // Update state with the input value
    };


    async function fetchAllStoresUsingZip() {
        if (searchQuery !== "") {
            try {
                console.log("workoi")
                // Await the fetchAllstores function to complete
                const stores = await fetchAllstores("code", searchQuery);

                // Handle the fetched stores data here if needed
                console.log('Fetched stores:', stores);
            } catch (error) {
                // Handle errors if fetchAllstores fails
                console.error('Error fetching stores:', error);
            }
        } else {
            console.log('Search query is empty');
        }
    }

    async function fetchAllStoresUsingDelZip() {
        if ( info?.locationData?.zipCode !== undefined ||  info?.locationData?.zipCode !== "" ) {
            try {
                console.log("workoi")
                // Await the fetchAllstores function to complete
                const stores = await fetchAllstores("code", info?.locationData?.zipCode);

                // Handle the fetched stores data here if needed
                console.log('Fetched stores:', stores);
            } catch (error) {
                // Handle errors if fetchAllstores fails
                console.error('Error fetching stores:', error);
            }
        } else {
            console.log('Search query is empty');
        }
    }

    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const getCurrentLocation = async () => {
        console.log("working lan")
        if (!navigator.geolocation) {
          setError("Geolocation is not supported by this browser.");
          return;
        }
      
        try {
          // Wait for the position using a Promise wrapper
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
      
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
      
          setLocation({ latitude, longitude });
          console.log("Here is lat lng", latitude, longitude);
      
          // Call your async function after getting the location
          await fetchAllstores("latlng", "",latitude,longitude);
      
          setError(null); // Clear any previous errors
        } catch (err) {
          setError(err.message);
          setLocation(null); // Clear any previous location
        }
      };
      



    return (
        <div
            className={`near-store-pop-up ${isOpen ? 'show' : ''}`}
            onClick={handleCloseNearBy}
        >
            <div
                className={`near-store-container ${isOpen ? 'show-near-store-inner-container' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='pop-up-header'>
                    <span onClick={handleCloseNearBy}>
                        {/* <IoCloseOutline size={20} />  */}
                        <img src={closeBtn} alt='btn' />
                    </span>
                    <i>
                        <img src={NearStore} alt='near' />
                    </i>
                    <h3>Find a Store</h3>
                    <div className='pop-up-header-search'>
                        <input
                            type='search'
                            placeholder='Search by Zip Code or City & State'
                            value={searchQuery} // Bind the value to the state
                            onChange={handleInputChange} // Update state on input change
                        />
                        <img src={searchIcon} onClick={() => { fetchAllStoresUsingZip() }} alt='search' />
                    </div>
                    <div className='pop-up-header-location'>
                        <p onClick={() => { getCurrentLocation() }}>
                            <TbCurrentLocation size={16} />
                            <Link>Use Current Location</Link>
                        </p>
                        <p onClick={() => { fetchAllStoresUsingDelZip() }}>
                            <Link >Use My Delivery Zip</Link>
                        </p>
                    </div>
                </div>
                <div className='pop-up-single-city-card'>
                    <div className='pop-up-single-city-cart'>
                        <img src={NearStore} alt='near' />
                        <h3>Your Store {stores.length}</h3>
                    </div>
                    {stores?.map((items, index) => {
                        return <div key={index}  >
                            <div className={`pop-up-city-and-distance ${storeOpenIndex === index ? 'rotate-btn' : ''}`}>
                                <span>
                                    <img src={AddBtn} alt='add' onClick={() => handleStoreHoursDetails(index)} />
                                    <h3>{items.city}</h3>
                                </span>
                                <p> {items.distance} </p>
                            </div>
                            <div className='pop-up-store-open-time'>
                                <p>{items.openUntil}</p>
                                <span>
                                    {items.openUntilIcon}
                                </span>
                            </div>
                            <div className='pop-up-complete-address'>
                                <p>{items.address_1}</p>
                                <p><span>Call</span> {items.phone}</p>
                                {/* <Link to={items.outletLink}>{items.outlet}</Link>
                    <Link to={items.directionLink}>{items.direction}</Link>  */}
                            </div>
                            <div className={`pop-up-store-open-days-and-time ${storeOpenIndex === index ? 'open-store' : ''}`}>
                                <Link to={items.appointmentLink}>{items.appointment}</Link>
                                <div className='store-hours-detail'>
                                    <p>{items.openHours}</p>
                                    <div className='store-hours'>
                                        {items.timings && items.timings.map((hoursItem, index) => {
                                            return <p key={index}> <span>{hoursItem.day}</span> <span>{hoursItem.time}</span> </p>
                                        })}
                                    </div>
                                    <Link to={items.virtualTourLink}>{items.virtualTour}</Link>
                                    <Link to={items.storeDetailsLink}>{items.storeDetails}</Link>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default NearStorePopUp