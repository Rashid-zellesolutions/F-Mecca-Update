import React from 'react'
import './furnitureDropDown.css';
import imageOne from '../../../Assets/menu-images/furniture-menu-image.avif';
import imageTwo from '../../../Assets/menu-images/furniture-menu-image-two.jpg';
import { Link } from 'react-router-dom';

const FurnitureDropdown = () => {

    const livingRoomLinks = [
        { name: 'Living Room Sets', link: '#' },
        { name: 'Sofa & Couches', link: '#' },
        { name: 'Sectionals', link: '#' },
        { name: 'Love Seats', link: '#' },
        { name: 'Reclining Furniture', link: '#' },
        { name: 'Sleaper Sofa & Futons', link: '#' },
        { name: 'Chairs', link: '#' },
        { name: 'Recliner', link: '#' },
        { name: 'Coffe & Tea Table', link: '#' },
        { name: 'TV Stand & Media Center', link: '#' },
        { name: 'Electric Fireplaces', link: '#' },
        { name: 'Ottomans & Benches', link: '#' },
        { name: 'Living Room Collection', link: '#' },
        { name: 'Shop All Living Room', link: '#' },
    ]
    const bedroomLinks = [
        { name: 'Living Room Sets', link: '#' },
        { name: 'Sofa & Couches', link: '#' },
        { name: 'Sectionals', link: '#' },
        { name: 'Love Seats', link: '#' },
        { name: 'Reclining Furniture', link: '#' },
        { name: 'Sleaper Sofa & Futons', link: '#' },
        { name: 'Chairs', link: '#' },
        { name: 'Recliner', link: '#' },
        { name: 'Coffe & Tea Table', link: '#' },
        { name: 'TV Stand & Media Center', link: '#' },
        { name: 'Electric Fireplaces', link: '#' }

    ]
    const diningLinks = [
        { name: 'Living Room Sets', link: '#' },
        { name: 'Sofa & Couches', link: '#' },
        { name: 'Sectionals', link: '#' },
        { name: 'Love Seats', link: '#' },
        { name: 'Reclining Furniture', link: '#' },
        { name: 'Sleaper Sofa & Futons', link: '#' },
        { name: 'Chairs', link: '#' },
        { name: 'Recliner', link: '#' },
        { name: 'Coffe & Tea Table', link: '#' },
        { name: 'TV Stand & Media Center', link: '#' }

    ]
    const entrywayLinks = [
        { name: 'Living Room Sets', link: '#' },
        { name: 'Sofa & Couches', link: '#' },
        { name: 'Sectionals', link: '#' },
        { name: 'Love Seats', link: '#' },
        { name: 'Reclining Furniture', link: '#' },
        { name: 'Sleaper Sofa & Futons', link: '#' }

    ]
    const smallSpacesLinks = [
        { name: 'Living Room Sets', link: '#' },
        { name: 'Sofa & Couches', link: '#' },
        { name: 'Sectionals', link: '#' }

    ]

    return (
        <div className='furniture-main-container'>
            <div className='links-container'>
                <div>
                    <h3 className='furniture-heading'>Living Room</h3>
                    <div className='living-room-links'>
                        {livingRoomLinks.map((livingRoomItems, index) => {
                            return <Link to={livingRoomItems.link}>{livingRoomItems.name}</Link>
                        })}
                    </div>
                    <h3 className='furniture-heading shop-via-chat-option'>Shop via Chat</h3>
                </div>
                <div>
                    <h3 className='furniture-heading'>Bedroom</h3>
                    <div className='living-room-links'>
                        {bedroomLinks.map((bedroomLinksItems, index) => {
                            return <Link to={bedroomLinksItems.link}>{bedroomLinksItems.name}</Link>
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='furniture-heading'>Dining</h3>
                    <div className='living-room-links'>
                        {diningLinks.map((diningItems, index) => {
                            return <Link to={diningItems.link}>{diningItems.name}</Link>
                        })}
                    </div>
                </div>
                <div>
                    <h3 className='furniture-heading'>Entryway Furniture</h3>
                    <div className='living-room-links'>
                        {entrywayLinks.map((entrywayItems, index) => {
                            return <Link to={entrywayItems.link}>{entrywayItems.name}</Link>
                        })}
                    </div>
                    <h3 className='furniture-heading'>Small spaces</h3>
                    <div className='living-room-links '>
                        {smallSpacesLinks.map((smallspacesItems, index) => {
                            return <Link to={smallspacesItems.link}>{smallspacesItems.name}</Link>
                        })}
                    </div>
                </div>
            </div>
            <div className='furniture-menu-images-div'>
                <div className='furniture-menu-image'>
                    <img src={imageOne} alt="img one" />
                    <h3 className=''>Introducing my NEW Moduler bob</h3>
                </div>
                <div className='furniture-menu-image'>
                    <img src={imageTwo} alt="img two" />
                    <h3 className=''>Flexible Financing</h3>
                </div>
            </div>
        </div>
    )
}

export default FurnitureDropdown;
