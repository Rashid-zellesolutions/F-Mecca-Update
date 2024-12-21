import React, { useState } from 'react'
import './MobileViewProductFilters.css'
import crossBtn from '../../../Assets/icons/close-btn.png'
import mainLogo from '../../../Assets/Logo/m_logo_360 2.png';

const MobileViewProductFilters = ({ showMobileFilters, setMobileFilters, filtersData }) => {
    const handleFiltersClose = () => {
        setMobileFilters(false)
    }
    const [filterOpen, setFilterOpen] = useState(null);
    const handleFilterType = (index) => {
        setFilterOpen((prev) => (prev === index ? null : index));
    }
    const [showAllFilters, setShowAllFilters] = useState(false)
    const handleShowAllFilters = () => {
        setShowAllFilters(!showAllFilters)
    }
    return (
        <div className={`mobile-view-flters-popup ${showMobileFilters ? 'show-mobile-filter-popup' : ''}`}>
            <button className='close-mobile-filters' onClick={handleFiltersClose}>
                <img src={crossBtn} alt='close btn' />
            </button>
            <div className='mobile-view-filters-head'>
                <a href='/'>
                    <img src={mainLogo} alt='logo' />
                </a>
            </div>
            <div className='mobile-view-filters-body'>
                <div className='mobile-view-filters-body-head'>
                    <h3>Filters</h3>
                    <a>Clear Filters</a>
                </div>
                <div className='mobile-view-filters-div'>
                    {filtersData.slice(0, showAllFilters ? filtersData.length : 5).map((items, index) => (
                        <div className='mobile-view-single-filter-dropdown'>
                            <div className='mobile-view-single-type' onClick={() => handleFilterType(index)}>
                                <p>{items.name}</p>
                                <img src={items.icon} alt='add btn' className={`show-filter-add-button ${filterOpen === index ? 'mobile-filter-section-button-rotate' : ''}`} />
                            </div>
                            <div className={`mobile-single-type-filters ${filterOpen === index ? 'show-filter-type' : ''}`}>
                                {items.filters.map((filter, ind) => (
                                    <label className='single-filter-label'>
                                        <input className='custom-checkbox' type={filter.type} name={filter.type} />
                                        {filter.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mobile-view-filters-togle-button'>
                    <button className='mobile-view-more-filters-button' onClick={handleShowAllFilters}>
                        {showAllFilters ? 'View Less Filters' : 'View All Filters'}
                    </button>
                </div>
                <div className='mobile-view-filters-togle-button'>
                    <button className='mobile-view-result-button'>
                        View Result
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MobileViewProductFilters
