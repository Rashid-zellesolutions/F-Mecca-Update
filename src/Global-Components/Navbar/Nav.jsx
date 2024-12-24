import React, { useEffect, useState } from 'react'
import './Nav.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = ({ navLinks, sale_data }) => {

    // States and variables
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null)
    const location = useLocation()

    // Functions
    const handleMouseEnter = (index) => {
        setDropdownOpen(index)
    }

    const handleMouseLeave = () => {
        setDropdownOpen(null);
    }

    useEffect(() => {
        setDropdownOpen(null)
        setActiveIndex(location.pathname)
    }, [location])

    return (
        <div className='navbar'>
            <nav className='navar-links-container'>
                {navLinks.map((item, index) => {
                    return <h3 key={index} onMouseEnter={() => item.subCategories.length > 0 && handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
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
                    >
                        {sale_data.category}
                    </Link>
                </h3>

            </nav>
            <div className='mobile-navbar'>

                {navLinks.map((item, index) => {
                    return <h3 key={index} onMouseEnter={() => item.subCategories.length > 0 && handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
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
