import React, { useEffect, useState } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

// Assets
import ownerTag from '../../Assets/Logo/owner-tag.png';
import facebook from '../../Assets/icons/facebook-white.png'
import tiktok from '../../Assets/icons/tiktok-white.png'
import insta from '../../Assets/icons/insta-white.png'
import youtube from '../../Assets/icons/youtube-white.png'
import location from '../../Assets/icons/location.png'
import call from '../../Assets/icons/call.png'
import mail from '../../Assets/icons/mail.png'
import clock from '../../Assets/icons/white-clock.png'
import calander from '../../Assets/icons/white-calander.png'
import filledStart from '../../Assets/icons/Star 3.png';
import unfilledStart from '../../Assets/icons/Star 5.png';
import nearStore from '../../Assets/Footer/venango-store-image.png';
import checked from "../../Assets/checked.png"
import checked_white from "../../Assets/checked_white.png"
import LoaderAnimation from "../../Assets/Loader-animations/loader-check-two.gif"
import { url } from '../../utils/api';

// Components
import MobileFooter from '../TabAndMobileFooter/MobileFooter';
import FooterNav from './FooterNav/FooterNav';

// Functions and Utils
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';

const Footer = ({ notLandingPage }) => {

    // State for email input and form submission status
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(''); // Reset error when the user types
    };
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission

        if (!email) {
            setError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        try {
            // Send data to API
            const response = await axios.post(`${url}/api/v1/activate-scoop/add`, {
                email,
            });

            console.log(response);

            // Handle success
            if (response.status === 201) {
                setIsSubscribed(true);
            }
            else if (response.status === 409) {
                setError('Email already exists');
            }
            else {
                setError(response.data.message || 'Something went wrong');
            }
        } catch (error) {
            // Handle error
            console.error('Error signing up:', error);

            // Check if the error is due to the API response or a network issue
            if (error.response) {
                // If the error has a response (API returned an error)
                setError(error.response.data.message || 'Something went wrong, please try again later.');
            } else {
                // If there was a network error or no response
                setError('Network error, please try again later.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };


    const footerNavLinks = [
        {
            heading: "Living Room", navItems: [
                { name: 'Living Room Sets', link: '/product-category/living-room/living-room-sets' },
                { name: 'Sofa & Lovaseat Sets', link: '/product-category/living-room/sofa-loveseat-sets' },
                { name: 'Sectionals', link: '/product-category/living-room/sectionals' },
                { name: 'Reclining Furniture', link: '/product-category/living-room/reclining-sets' },
                { name: 'Sofas', link: '/product-category/living-room/sofas' },
                { name: 'Sleeper Sofas', link: '/product-category/living-room/sleeper-sofas' },
                { name: 'LoveSeats', link: '/product-category/living-room/loveseats' },
                { name: 'Small Space Living Room', link: '/product-category/living-room/small-space-living-rooms' },
                { name: 'Outlets', link: '/product-category/living-room/living-room-outlet' },
            ]
        },
        {
            heading: "Bedroom", navItems: [
                { name: 'Bedroom Sets', link: '/product-category/bedroom/bedroom-sets' },
                { name: 'Beds & Headboards', link: '/product-category/bedroom/beds-headboards' },
                { name: 'Dresser & Mirror Set', link: '/product-category/bedroom/dresser-mirror-sets' },
                { name: 'Dressers', link: '/product-category/bedroom/dressers' },
                { name: 'Chests', link: '/product-category/bedroom/chests' },
                { name: 'NightStands', link: '/product-category/bedroom/nightstands' },
                { name: 'Mirrors', link: '/product-category/bedroom/mirrors' },
                { name: 'Twin Beds', link: '/product-category/bedroom/twin-beds' },
                { name: 'Quen Beds', link: '/product-category/bedroom/queen-beds-fm' },
                { name: 'Full Beds', link: '/product-category/bedroom/full-beds' },
                { name: 'King Beds', link: '/product-category/bedroom/king-beds' },
                { name: 'Small Spaces Bedrooms', link: '/product-category/bedroom/small-space-bedrooms' },
                { name: 'Outlets', link: '/product-category/bedroom/bedroom-outlet' },
            ]
        },
        {
            heading: "Dining Rooms", navItems: [
                { name: 'Dining Room Sets', link: '/product-category/dining-room/dining-room-sets' },
                { name: 'Pub Heights Dining Sets', link: '/product-category/dining-room/pub-heights-dining-sets' },
                { name: 'Dining Chairs & Benches', link: '/product-category/dining-room/dining-chairs-benches' },
                { name: 'Dining Tables', link: '/product-category/dining-room/dining-tables' },
                { name: 'Bar Stools', link: '/product-category/dining-room/bar-pub-stools' },
                { name: 'Servers, Buffets & China Cabinets', link: '/product-category/dining-room/servers-buffets-china-cabinets' },
            ]
        },
        {
            heading: "Mattresses", navItems: [
                { name: 'Twin Size', link: '/product-category/mattresses/twin-size' },
                { name: 'Quen Size', link: '/product-category/mattresses/queen-size' },
                { name: 'Full Size', link: '/product-category/mattresses/full-size' },
                { name: 'King Size', link: '/product-category/mattresses/king-size' },
                { name: 'Bed Frames', link: '/product-category/mattresses/bed-frames' },
                { name: 'Pillows', link: '/product-category/mattresses/pillows' },
                { name: 'Memory Foam Mattresses', link: '/product-category/mattresses/memory-foam-mattresses' },
                { name: 'box Spring', link: '/product-category/mattresses/box-springs' },
                { name: 'Mattresses Protection', link: '/product-category/mattresses/mattress-protection' },
                { name: 'Outlet', link: '/product-category/mattresses/sale-mattresses' },
            ]
        },
        {
            heading: "Kids", navItems: [
                { name: 'Kids Bedroom Sets', link: '/product-category/kids/kids-bedroom-sets' },
                { name: 'Kids Room', link: '/product-category/kids/kids-room' },
                { name: 'Kids Beds & Headboards', link: '/product-category/kids/kids-beds-headboards' },
                { name: 'Kids Bedroom Storage', link: '/product-category/kids/kids-bedroom-storage' },
                { name: 'Outlet', link: '/product-category/kids/sale-kids-room' },
            ]
        },
        {
            heading: "Accent", navItems: [
                { name: 'Accent Tables', link: '/product-category/accent-furniture/accent-tables' },
                { name: 'Accent Chest & Storage', link: '/product-category/accent-furniture/accent-chests-storage' },
                { name: 'Coffee & End Tables', link: '/product-category/accent-furniture/coffee-end-tables' },
                { name: 'Lampes & Lighting', link: '/product-category/accent-furniture/lamps-lighting' },
                { name: 'Entertainment Centers & TV Stands', link: '/product-category/accent-furniture/entertainment-centers-tv-stands' },
                { name: 'Home Office', link: '/product-category/accent-furniture/home-office' },
                { name: 'Benches', link: '/product-category/accent-furniture/benches' },
                { name: 'Outlets', link: '/product-category/accent-furniture/sale-accent-furniture' },
            ]
        },
        {
            heading: "Home Decor", navItems: [
                { name: 'Lampes & Lighting', link: '/product-category/accent-furniture/lamps-lighting' },
                { name: 'Home Office', link: '/product-category/home-decor/home-office' },
                { name: 'Mirrored Furniture', link: '/product-category/home-decor/mirrored-furniture' },
                { name: 'Vanities & Mirror', link: '/product-category/bedroom/vanities-mirror' },
                { name: 'Wall Art', link: '/product-category/home-decor/wall-art' },
                { name: 'Audio & Speaker', link: '/product-category/home-decor/audio-speakers' },
                { name: 'Throw Pillows', link: '/product-category/home-decor/throw-pillows' },
                { name: 'Jhula Swings', link: '/product-category/home-decor/jhula-swings' },
                { name: 'Outlets', link: '/product-category/home-decor/sale-home-decor' },
            ]
        },
        {
            heading: "Rugs", navItems: [
                { name: 'Machine Washable', link: '/product-category/rugs-main/machine-washable' },
                { name: 'Indoor/Outdoor Rugs', link: '/product-category/rugs-main/indoor-outdoor-rugs' },
                { name: 'Runners', link: '/product-category/rugs-main/runners' },
                { name: 'Small Area Rugs', link: '/product-category/rugs-main/small-area-rugs' },
                { name: 'Large Area Rugs', link: '/product-category/rugs-main/large-area-rugs' },
                { name: 'All Area Rugs', link: '/product-category/rugs-main/all-area-rugs' },
                { name: 'Outlets', link: '/product-category/rugs-main/sale-rugs' },
            ]
        },
        {
            heading: "Outlet", navItems: [
                { name: 'Bed Room Sets', link: '#' },
                { name: 'Bed & HeadBoards', link: '#' },
                { name: 'Dressers', link: '#' },
                { name: 'Chest', link: '#' },
                { name: 'Dresser & Mirror Sets', link: '#' },
                { name: 'Night Stands', link: '#' },
                { name: 'Mirrors', link: '#' },
                { name: 'Twin Beds', link: '#' },
                { name: 'Queen Beds', link: '#' },
                { name: 'King Beds', link: '#' },
                { name: 'Full Bed', link: '#' },
                { name: 'Small Space Bed Room', link: '#' },
                { name: 'Outlets', link: '#' },
            ]
        },
    ]

    const socialIcons = [
        { name: 'facebook', icon: facebook, link: 'https://www.facebook.com/myfurnituremecca' },
        { name: 'tiktok', icon: tiktok, link: 'https://www.tiktok.com/@myfurnituremecca?_t=8gcQvVGSaGI&_r=1' },
        { name: 'youtube', icon: youtube, link: 'https://www.youtube.com/@FurnitureMecca1' },
        { name: 'insta', icon: insta, link: 'https://www.instagram.com/myfurnituremecca/?igshid=MzRlODBiNWFlZA%3D%3D' }
    ]

    const locationPhoneMail = [
        { name: 'Philadelphia', icon: location, link: '#' },
        { name: '215 352 1600', icon: call, link: '#' },
        { name: 'meccacustomercare@gmail.com', icon: mail, link: '#' }
    ]

    const footerCustomerCareAndAbout = [
        {
            heading: 'Customer Care', navLinks: [
                { name: 'Contact Us', link: '/contact-us' },
                { name: 'Financing', link: '/financing-option' },
                { name: 'Shipping & Delivery', link: '/shipping-and-delivery' },
                { name: 'Terms & Conditions', link: '/terms-condition' },
            ]
        },
        {
            heading: 'About Furniture Mecca', navLinks: [
                { name: 'About Us', link: '/about-us' },
                { name: 'Career', link: '/careers' },
                { name: 'Store Locations', link: '/our-locations' },
                { name: 'Reference', link: '#' },
                { name: 'My Account', link: '/user-dashboard' },
                { name: 'Blogs', link: '/blogs' },
            ]
        },
    ]

    const stars = [
        { icon: filledStart },
        { icon: filledStart },
        { icon: filledStart },
        { icon: filledStart },
        { icon: unfilledStart },
    ]

    const nearStoreDetails = [
        { icon: location, details: 'E Venango St, Philadelphia, PA 19134 Philadelphia, Pennsylvania, 101' },
        { icon: call, details: '267 639 6801' },
        { icon: clock, details: '9:30 AM - 6:30 PM' },
        { icon: calander, details: 'Monday - Sunday' },
    ]

    // const [storesLongitudesAndLatitudes, setStoresLongitudesAndLatitudes] = useState()
    // const [storesData, setStoresData] = useState([])
    // const [placeId, setPlaceId] = useState(`ChIJawhh3PS3xokRDDJlO7IrVCA`)
    // useEffect(() => {
    //     const fetchStores = async () => {
    //         const api = `https://fm.skyhub.pk/api/v1/stores/get`;
    //         try {
    //             const response = await axios.get(api);
    //             console.log("stores response", response.data.data)
    //             setStoresData(response.data.data)
    //         } catch (error) {
    //             console.error("error fetching stores", error);
    //         }
    //     }
    //     fetchStores()
    //     const fetchPlaceId = async () => {
    //         const API_KEY = `AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry`
    //         const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${storesData?.[1]?.latitude},${storesData?.[1]?.longitude}&key=${API_KEY}&result_type=furniture_store`;
    //         const detailsApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`;
    //         try {
    //             const response = await axios.get(googleApi);
    //             if (response.data.status === "OK") {
    //                 const placeId = response.data.results[0]?.place_id;
    //                 // setPlaceId(placeId)
    //                 console.log("google response", response.data.results[0].place_id)
    //                 // fetchReviews()
    //                 // const responseId = await axios.get(detailsApiUrl);
    //                 // console.log("reviews", responseId)
    //                 // if (responseId.data.status === "OK") {
    //                 //     const fetchedReviews = responseId.data.result.reviews || [];
    //                 //     // setReviews(fetchedReviews);
    //                 // } else {
    //                 //     console.log(responseId.data.error_message || "Failed to fetch reviews");
    //                 // }
    //                 // setPlaceId(placeId || "No place_id found");
    //             } else {
    //                 // setError(response.data.error_message || "Failed to fetch place_id");
    //                 console.log("error")
    //             }
    //         } catch (error) {
    //             console.error("error geting place id", error);
    //         }
    //     }
    //     fetchPlaceId()



    // }, [])


    // const fetchReviews = async (placeId) => {
    //     console.log("reviews funct call")
    //     const API_KEY = `AIzaSyB9nW_l7Dw8WnnSCOJyJSGjtTYyF9ct3qk&amp;libraries=maps,marker,places,geometry`
    //     const detailsApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`;
    //     try {
    //         console.log("try block call")
    //         const response = await axios.get(detailsApiUrl);
    //         console.log("reviews", response)
    //         console.log("after fetch")
    //         if (response.data.status === "OK") {
    //             const fetchedReviews = response.data.result.reviews || [];
    //             // setReviews(fetchedReviews);
    //         } else {
    //             console.log(response.data.error_message || "Failed to fetch reviews");
    //         }
    //     } catch (error) {
    //         console.error("error geting reviews", error);
    //         console.log("error")
    //     }
    // }
    // useEffect(() => {
    //     fetchReviews(placeId)
    //     console.log("place id in fetch", placeId)
    // }, [placeId])

    // console.log("store latitudes", storesData)
    // console.log("place id", placeId)

    // useState(() => {
    //     fetchReviews(placeId)
    // }, [placeId])


    return (
        <>
            <div className='footer-main-container'>
                <div className='footer-nav'>
                    {footerNavLinks.map((items, index) => {
                        return <div key={index} className='footer-nav-links'>
                            <h3 className='footer-nav-link-heading'>{items.heading}</h3>
                            {items.navItems.map((item, innerIndex) => {
                                return <FooterNav key={innerIndex} link={item.link} linkName={item.name} />
                            })}
                        </div>
                    })}
                </div>
                <div className='footer-second-contant-section'>
                    <div className='footer-left-section'>
                        <div className='left-section-contact'>
                            <div className='left-section-social-icons-div'>
                                {socialIcons.map((items, index) => (
                                    <a key={index} href={items.link}>
                                        <img src={items.icon} alt='icon' />
                                    </a>
                                ))}
                            </div>
                            <div className='footer-owner-tag'>
                                <img src={ownerTag} alt='owner tag' />
                                <div className='owner-tag-info'>
                                    <p className='owner-tag-name'>FURNITURE MECCA</p>
                                    <div className='tag-rating-stars'>
                                        {stars.map((item, index) => (
                                            <img key={index} src={item.icon} alt='star' />
                                        ))}
                                    </div>
                                    <p className='owner-tag-review'>847 Google Review</p>
                                </div>
                            </div>
                            <div className='footer-left-contact-section'>
                                {locationPhoneMail.map((item, index) => (
                                    <span key={index}>
                                        <img src={item.icon} alt='icon' />
                                        <p>{item.name}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='left-section-location-section'>
                            <h3 className='footer-location-section'>Nearest Store</h3>
                            <div className='near-store-containt-section'>
                                <div className='near-store-image-div'>
                                    <LazyLoadImage src={nearStore} alt='near store image' effect='blur' />
                                </div>
                                <div className='near-store-details-section'>
                                    {nearStoreDetails.map((item, index) => (
                                        <span key={index}>
                                            <img src={item.icon} alt='icon' />
                                            <p>{item.details}</p>
                                        </span>
                                    ))}
                                </div>
                                <div className='appointment-and-outlet-div'>
                                    <Link to={'#'}>
                                        <p>Outlet</p>
                                    </Link>
                                    <Link to={'#'}>
                                        <p>Directions</p>
                                    </Link>
                                    <Link to={'/book-an-appointment'}>
                                        <p>Book an Appointment</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right-section'>
                        <div className={`footer-right-get-scoop ${notLandingPage ? 'show-footer-get-the-scoop' : ''}`}>
                            <h3>Get The Scoop</h3>
                            {!isSubscribed ? <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                                <div className='footer-get-scoop-and-conditions'>
                                    <div className='footer-get-scoop-input-search'>
                                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start"}}>
                                        <input type='text'
                                            placeholder='Email Address'
                                            value={email}
                                            onChange={handleEmailChange} />
                                        {error && <p style={{ color: 'red', fontSize: "13px", margin: "10px 0 0 0 ", padding: "0", lineHeight: "10px" }}>{error}</p>}
                                        </div>
                                        {isSubmitting ? <img className='scoop_loader' src={LoaderAnimation} alt="" /> : <button type='submit' disabled={isSubmitting}>
                                            Sign me up
                                        </button>}
                                    </div>
                                    <p>By signing up, you agree to our <Link to={'/privacy-policy'}> Privacy Policy  and  Terms of Use. </Link></p>
                                </div>
                            </form>
                                :
                                <div className="subscribtion_done_1">
                                    <img src={checked_white} />
                                    <p className=''>Your Subscription Has Been Done Successfully.</p>
                                </div>}
                        </div>
                        <div className='right-section-care-and-about'>
                            {footerCustomerCareAndAbout.map((item, index) => (
                                <div key={index} className='footer-costumer-care-and-about'>
                                    <h3>{item.heading}</h3>
                                    {item.navLinks.map((navItem, inn) => (
                                        <Link key={inn} to={navItem.link} className='about-and-care-link'>
                                            {navItem.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='footer-rights-reserved-container'>
                    <p>2020 - 2024 Furniture Mecca. All Rights Reserved</p>
                    <p>
                        <Link to={'https://zellesolutions.com/'}>Designed & Managed By Zelle Solutions</Link>
                    </p>
                </div>
            </div>
            <div className='mobile-view-footer-main-div'>
                {/* <div className='mobile-footer-top-section'>
                <div className='mobile-footer-owner-logo'>
                    <div>
                        <img src={ownerTag} alt='owner tag' />
                    </div>
                    <div>
                        <h3>Furniture Mecca</h3>
                        <div>
                            {stars.map((items, indes) => (
                                <img ssrc={items} alt='star' />
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
                <MobileFooter />
            </div>
        </>
    )
}

export default Footer
