import React, { useEffect, useState } from 'react'
import './Nav.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import FurnitureDropdown from './FurnitureMenu/FurnitureDropdown';
import { GiHamburgerMenu, GiHumanCannonball } from "react-icons/gi";
import cashtonImage from '../../Assets/menu-images/Cashton.jpg'
import cyrilkImage from '../../Assets/menu-images/Cyrilk-.jpg'
import medellinImage from '../../Assets/menu-images/medellin.jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = ({ navLinks, sale_data }) => {
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null)
    const location = useLocation()

    const handleMouseEnter = (index) => {
        setDropdownOpen(index)
    }
    const handleMouseLeave = () => {
        setDropdownOpen(null);
    }
    const handleActiveItemIndex = (index, item) => {
        setActiveIndex(index)
        console.log(item, "here is data")
        navigate(`/${item.category_slug}`)
    }
    useEffect(() => {
        setDropdownOpen(null)
        setActiveIndex(location.pathname)
    }, [location])

    // drop Down Data
    const livingroomLinks = [
        {
            heading: 'Living Room',
            links: [
                { name: 'Living Room Sets', link: '/product-category/living-room/living-room-sets' },
                { name: 'Sofa & LoveSeat Sets', link: '/product-category/living-room/sofa-loveseat-sets' },
                { name: 'Sectionals', link: '/product-category/living-room/sectionals' },
                { name: 'Reclining Furniture', link: '/product-category/living-room/reclining-sets' },
                { name: 'Sofas', link: '/product-category/living-room/sofas' },
                { name: 'Sleeper Sofas', link: '/product-category/living-room/sleeper-sofas' },
                { name: 'LoveSeats', link: '/product-category/living-room/loveseats' },
                { name: 'Small Space Living Room', link: '/product-category/living-room/small-space-living-rooms' },
                { name: 'Outlets', link: '/product-category/living-room/living-room-outlet' },
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]

    const bedroomLinks = [
        {
            heading: 'Bedroom',
            links: [
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
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }


    ]

    const diningroomLinks = [
        {
            heading: 'Dining Room', link: '/dining-room',
            links: [
                { name: 'Dining Room Sets', link: '/product-category/dining-room/dining-room-sets' },
                { name: 'Pub Heights Dining Sets', link: '/product-category/dining-room/pub-heights-dining-sets' },
                { name: 'Dining Chairs & Benches', link: '/product-category/dining-room/dining-chairs-benches' },
                { name: 'Dining Tables', link: '/product-category/dining-room/dining-tables' },
                { name: 'Bar Stools', link: '/product-category/dining-room/bar-pub-stools' },
                { name: 'Servers, Buffets & China Cabinets', link: '/product-category/dining-room/servers-buffets-china-cabinets' },
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]

    const mattressesLinks = [
        {
            heading: 'Mattresses',
            links: [
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
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]

    const kidsLinks = [
        {
            heading: 'Kids',
            links: [
                { name: 'Kids Bedroom Sets', link: '/product-category/kids/kids-bedroom-sets' },
                { name: 'Kids Room', link: '/product-category/kids/kids-room' },
                { name: 'Kids Beds & Headboards', link: '/product-category/kids/kids-beds-headboards' },
                { name: 'Kids Bedroom Storage', link: '/product-category/kids/kids-bedroom-storage' },
                { name: 'Outlet', link: '/product-category/kids/sale-kids-room' },
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]

    const accentFurnitureLinks = [
        {
            heading: 'Accent Furniture',
            links: [
                {
                    headingOne: 'Accent Furniture', innerLinks: [
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
                    headingOne: 'Rugs', innerLinks: [
                        { name: 'Machine Washable', link: '/product-category/rugs-main/machine-washable' },
                        { name: 'Indoor/Outdoor Rugs', link: '/product-category/rugs-main/indoor-outdoor-rugs' },
                        { name: 'Runners', link: '/product-category/rugs-main/runners' },
                        { name: 'Small Area Rugs', link: '/product-category/rugs-main/small-area-rugs' },
                        { name: 'Large Area Rugs', link: '/product-category/rugs-main/large-area-rugs' },
                        { name: 'All Area Rugs', link: '/product-category/rugs-main/all-area-rugs' },
                        { name: 'Outlets', link: '/product-category/rugs-main/sale-rugs' },
                    ]
                },

            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
            ]
        }
    ]

    const smallSpacesLinks = [
        {
            heading: 'Kids',
            links: [
                { name: 'Small Spaces Bedrooms', link: '/product-category/small-space-furniture/small-space-bedrooms' },
                { name: 'Small Spaces Living Rooms', link: '/product-category/small-space-furniture/small-space-living-rooms' },
                { name: 'Small Spaces Dining Rooms', link: '/product-category/small-space-furniture/small-space-dining-rooms' },
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]

    const outletLinks = [
        {
            heading: 'Outlet',
            links: [
                { name: 'Steal Deal', link: '/steal-deal' },
                { name: 'Fall Sale', link: '/product-category/fall-sale-2024' },
                { name: 'Package Deals', link: '/product-category/sale/package-deals' },
                { name: '50% OFF', link: '/product-category/sale/50-off-sale' },
                { name: 'Last Call', link: '/product-category/sale/last-call' },
            ],
            Images: [
                { title: "Cashton Sofa and Loveseat", price: '$799', link: '#', img: cashtonImage },
                { title: "Cyrilk Sectional with Pull Out Bed", price: '$799', link: '#', img: cyrilkImage },
                { title: "Medellin Sofa and Loveseat", price: '$1299', link: '#', img: medellinImage },
            ]
        }
    ]


    return (
        <div className='navbar'>
            <nav className='navar-links-container'>
                {navLinks.map((item, index) => {
                    return <h3 key={index} onMouseEnter={() => item.subCategories.length > 0 && handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave} 
                        // onClick={() => handleActiveItemIndex(index, item)}
                        className={`nav-item ${activeIndex === item.link ? 'active' : ''}`}>
                        <Link to={`/${item.category_slug}`} className='nav-link'> {item.category} </Link>

                        {dropdownOpen === index && (
                            <div className='dropdown'>
                                <DropdownMenu 
                                    parentCategorySlug={item.category_slug}
                                    navHeading={item.category}
                                    dropDownNavData={item.subCategories}
                                    products={item.products}
                                />
                            </div>
                        )}
                    </h3>
                })}


                <h3
                    className={`nav-item ${activeIndex === sale_data.link ? 'active' : ''}`}>
                    <Link
                        to={{
                            pathname: `/${sale_data.category_slug}`,
                            state: { sale_data } // Passing data via state
                        }}
                        className='nav-link'
                        // onClick={() => handleActiveItemIndex(100, sale_data)} // Keeps the click logic intact
                    >
                        {sale_data.category}
                    </Link>
                </h3>


            </nav>
            <div className='mobile-navbar'>
                {/* {navLinks.map((item, index) => {
                    return <h3 key={index} className='mobile-nav-link'>
                        <Link to={item.link}>{item.name}</Link>
                    </h3>
                })} */}
                {navLinks.map((item, index) => {
                    return <h3 key={index}  onMouseEnter={() => item.subCategories.length > 0 && handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave} 
                        // onClick={() => handleActiveItemIndex(index, item)}
                        className={`mobile-nav-link ${activeIndex === item.link ? 'active' : ''}`}>
                        <Link to={`/${item.category_slug}`} > {item.category} </Link>

                        {dropdownOpen === index && (
                            <div className='dropdown'>
                                <DropdownMenu 
                                    parentCategorySlug={item.category_slug}
                                    navHeading={item.category}
                                    dropDownNavData={item.subCategories}
                                    products={item.products}
                                />
                            </div>
                        )}
                    </h3>
                })}
            </div>

        </div>
    )
}

export default Nav
