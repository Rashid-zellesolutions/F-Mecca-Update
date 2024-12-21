import React from 'react'
import './MobileSubNav.css'
import crossBtn from '../../../../Assets/icons/close-btn.png';
import mainLogo from '../../../../Assets/Logo/m_logo_360 2.png'
import ordersIcon from '../../../../Assets/icons/order.png';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const MobileSubNav = ({ 
    openSubNav, 
    setOpenSubNav, 
    setMobileNavVisible, 
    subNavHeading, 
    navImg, 
    selectedIndex 
}) => {
    const handleCloseSubNav = () => {
        setOpenSubNav(false)
    }
    const navSubItems = [
        {
            heading: 'Living Room', subItems: [
                { name: 'Living Room Sets', icon: ordersIcon, link: '/product-category/living-room/living-room-sets' },
                { name: 'Sofa & LoveSeat Sets', icon: ordersIcon, link: '/product-category/living-room/sofa-loveseat-sets' },
                { name: 'Sectionals', icon: ordersIcon, link: '/product-category/living-room/sectionals' },
                { name: 'Reclining Furniture', icon: ordersIcon, link: '/product-category/living-room/reclining-sets' },
                { name: 'Sofas', icon: ordersIcon, link: '/product-category/living-room/sofas' },
                { name: 'Sleeper Sofas', icon: ordersIcon, link: '/product-category/living-room/sleeper-sofas' },
                { name: 'LoveSeats', icon: ordersIcon, link: '/product-category/living-room/loveseats' },
                { name: 'Small Space Living Room', icon: ordersIcon, link: '/product-category/living-room/small-space-living-rooms' },
                { name: 'Outlets', icon: ordersIcon, link: '/product-category/living-room/living-room-outlet' },
            ]
        },
        {
            heading: 'Bed Room', subItems: [
                { name: 'Bedroom Sets', icon: ordersIcon, link: '/product-category/bedroom/bedroom-sets' },
                { name: 'Beds & Headboards', icon: ordersIcon, link: '/product-category/bedroom/beds-headboards' },
                { name: 'Dresser & Mirror Set', icon: ordersIcon, link: '/product-category/bedroom/dresser-mirror-sets' },
                { name: 'Dressers', icon: ordersIcon, link: '/product-category/bedroom/dressers' },
                { name: 'Chests', icon: ordersIcon, link: '/product-category/bedroom/chests' },
                { name: 'NightStands', icon: ordersIcon, link: '/product-category/bedroom/nightstands' },
                { name: 'Mirrors', icon: ordersIcon, link: '/product-category/bedroom/mirrors' },
                { name: 'Twin Beds', icon: ordersIcon, link: '/product-category/bedroom/twin-beds' },
                { name: 'Quen Beds', icon: ordersIcon, link: '/product-category/bedroom/queen-beds-fm' },
                { name: 'Full Beds', icon: ordersIcon, link: '/product-category/bedroom/full-beds' },
                { name: 'King Beds', icon: ordersIcon, link: '/product-category/bedroom/king-beds' },
                { name: 'Small Spaces Bedrooms', icon: ordersIcon, link: '/product-category/bedroom/small-space-bedrooms' },
                { name: 'Outlets', icon: ordersIcon, link: '/product-category/bedroom/bedroom-outlet' },
            ],
        },
        {
            heading: 'Dining Room', subItems: [
                { name: 'Dining Room Sets', icon: ordersIcon, link: '/product-category/dining-room/dining-room-sets' },
                { name: 'Pub Heights Dining Sets', icon: ordersIcon, link: '/product-category/dining-room/pub-heights-dining-sets' },
                { name: 'Dining Chairs & Benches', icon: ordersIcon, link: '/product-category/dining-room/dining-chairs-benches' },
                { name: 'Dining Tables', icon: ordersIcon, link: '/product-category/dining-room/dining-tables' },
                { name: 'Bar Stools', icon: ordersIcon, link: '/product-category/dining-room/bar-pub-stools' },
                { name: 'Servers, Buffets & China Cabinets', icon: ordersIcon, link: '/product-category/dining-room/servers-buffets-china-cabinets' },
            ],
        },
        {
            heading: 'Mattresses', subItems: [
                { name: 'Twin Size', icon: ordersIcon, link: '/product-category/mattresses/twin-size' },
                { name: 'Quen Size', icon: ordersIcon, link: '/product-category/mattresses/queen-size' },
                { name: 'Full Size', icon: ordersIcon, link: '/product-category/mattresses/full-size' },
                { name: 'King Size', icon: ordersIcon, link: '/product-category/mattresses/king-size' },
                { name: 'Bed Frames', icon: ordersIcon, link: '/product-category/mattresses/bed-frames' },
                { name: 'Pillows', icon: ordersIcon, link: '/product-category/mattresses/pillows' },
                { name: 'Memory Foam Mattresses', icon: ordersIcon, link: '/product-category/mattresses/memory-foam-mattresses' },
                { name: 'box Spring', icon: ordersIcon, link: '/product-category/mattresses/box-springs' },
                { name: 'Mattresses Protection', icon: ordersIcon, link: '/product-category/mattresses/mattress-protection' },
                { name: 'Outlet', icon: ordersIcon, link: '/product-category/mattresses/sale-mattresses' },
            ],
        },
        {
            heading: 'Kids', subItems: [
                { name: 'Kids Bedroom Sets', icon: ordersIcon, link: '/product-category/kids/kids-bedroom-sets' },
                { name: 'Kids Room', icon: ordersIcon, link: '/product-category/kids/kids-room' },
                { name: 'Kids Beds & Headboards', icon: ordersIcon, link: '/product-category/kids/kids-beds-headboards' },
                { name: 'Kids Bedroom Storage', icon: ordersIcon, link: '/product-category/kids/kids-bedroom-storage' },
                { name: 'Outlet', icon: ordersIcon, link: '/product-category/kids/sale-kids-room' },
            ],
        },
        {
            heading: 'Accent Furniture / Rugs', subItems: [
                { name: 'Accent Tables', icon: ordersIcon, link: '/product-category/accent-furniture/accent-tables' },
                { name: 'Accent Chest & Storage', icon: ordersIcon, link: '/product-category/accent-furniture/accent-chests-storage' },
                { name: 'Coffee & End Tables', icon: ordersIcon, link: '/product-category/accent-furniture/coffee-end-tables' },
                { name: 'Lampes & Lighting', icon: ordersIcon, link: '/product-category/accent-furniture/lamps-lighting' },
                { name: 'Entertainment Centers & TV Stands', icon: ordersIcon, link: '/product-category/accent-furniture/entertainment-centers-tv-stands' },
                { name: 'Home Office', icon: ordersIcon, link: '/product-category/accent-furniture/home-office' },
                { name: 'Benches', icon: ordersIcon, link: '/product-category/accent-furniture/benches' },
                { name: 'Outlets', icon: ordersIcon, link: '/product-category/accent-furniture/sale-accent-furniture' },
                { name: 'Machine Washable', icon: ordersIcon, link: '/product-category/rugs-main/machine-washable' },
                { name: 'Indoor/Outdoor Rugs', icon: ordersIcon, link: '/product-category/rugs-main/indoor-outdoor-rugs' },
                { name: 'Runners', icon: ordersIcon, link: '/product-category/rugs-main/runners' },
                { name: 'Small Area Rugs', icon: ordersIcon, link: '/product-category/rugs-main/small-area-rugs' },
                { name: 'Large Area Rugs', icon: ordersIcon, link: '/product-category/rugs-main/large-area-rugs' },
                { name: 'All Area Rugs', icon: ordersIcon, link: '/product-category/rugs-main/all-area-rugs' },
                { name: 'Outlets', icon: ordersIcon, link: '/product-category/rugs-main/sale-rugs' },
            ]
        },
        {
            heading: 'Small Spaces', subItems: [
                { name: 'Small Spaces Bedrooms', icon: ordersIcon, link: '/product-category/small-space-furniture/small-space-bedrooms' },
                { name: 'Small Spaces Living Rooms', icon: ordersIcon, link: '/product-category/small-space-furniture/small-space-living-rooms' },
                { name: 'Small Spaces Dining Rooms', icon: ordersIcon, link: '/product-category/small-space-furniture/small-space-dining-rooms' },
            ],
        },
        {
            heading: 'Outlets', subItems: [
                { name: 'Steal Deal', icon: ordersIcon, link: '/steal-deal' },
                { name: 'Fall Sale', icon: ordersIcon, link: '/product-category/fall-sale-2024' },
                { name: 'Package Deals', icon: ordersIcon, link: '/product-category/sale/package-deals' },
                { name: '50% OFF', icon: ordersIcon, link: '/product-category/sale/50-off-sale' },
                { name: 'Last Call', icon: ordersIcon, link: '/product-category/sale/last-call' },
            ],
        },
    ]

    const handleCloseAllNav = () => {
        setMobileNavVisible(false);
        setOpenSubNav(false);
    }
    return (
        <div className={`mobile-sub-navbar ${openSubNav ? 'show-sub-nav' : ''}`}>
            <button className='close-sub-nav' onClick={handleCloseSubNav}>
                {/* <img src={crossBtn} alt='close btn' /> */}
                <Link>
                    <IoMdArrowBack size={25} />
                </Link>
            </button>
            <div className='mobile-sub-nav-head'>
                <img src={mainLogo} alt='main-logo' />
            </div>
            <div className='mobile-sub-nav-body'>
                <div className='mobile-sub-nav-title-div'>
                    <img src={navImg} alt='title-image' className='mobile-sub-nav-title-image' />
                    <h3 className='mobile-nav-category-heading'>{subNavHeading}</h3>
                </div>
                <div className='mobile-sub-nav-items'>
                    {navSubItems[selectedIndex].subItems && navSubItems[selectedIndex].subItems.map((items, index) => (
                        <Link to={items.link} key={index} className='mobile-sub-nav-single-item' onClick={handleCloseAllNav}>
                            <img src={items.icon} alt='sub-nav-icon' />
                            <p >{items.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileSubNav
