import React, { useState } from 'react'
import './TabMenuTab.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import furnitureMenuImage from '../../../../Assets/menu-images/furniture-menu-image.avif'
import furnitureMenuImageTwo from '../../../../Assets/menu-images/furniture-menu-image-two.jpg';
import TabMenuTabLinks from './TabMenuTabLinks/TabMenuTabLinks';
import { Link } from 'react-router-dom';

const TabMenuTab = ({name, ind, closeMenu, headingLink}) => {

    const [isSubNavOpen, setIsSubNavOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
    const [isTabClicked, setIsTabClicked] = useState(null);
    const [activeInnerIndex, setActiveInnerIndex] = useState(null)
    
    const handleTabSubNavLinkOpen = (index) => {
        setIsTabClicked(index)
        setActiveIndex(index);
        setIsSubNavOpen(true);
    }

    const handleActiveIndex = (index) => {
        setActiveInnerIndex(index)
    }

    const tabSubMenu = [
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '/product-category/dining-room/dining-room-sets'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Rooms',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Room',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        },
        {name: 'Furniture', 
            furnitureSubData : [
                {
                    subDataName: 'Living Room',
                    furnitureLinks: [
                        {name: 'Living thsi Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'},
                        {name: 'Ottomans & Benches', link: '#'},
                        {name: 'Living Room Collection', link: '#'},
                        {name: 'Shop All Living Room', link: '#'},
                    ]
                },
                {
                    subDataName: 'Bedroom',
                    furnitureLinks: [
                        {name: 'Bed Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'},
                        {name: 'Electric Fireplaces', link: '#'}
                    ]
                },
                {
                    subDataName: 'Dining',
                    furnitureLinks: [
                        {name: 'Dining Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'},
                        {name: 'Chairs', link: '#'},
                        {name: 'Recliner', link: '#'},
                        {name: 'Coffe & Tea Table', link: '#'},
                        {name: 'TV Stand & Media Center', link: '#'}
                    ]
                },
                {
                    subDataName: 'Entry-way Furniture',
                    furnitureLinks: [
                        {name: 'Entry-way Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'},
                        {name: 'Love Seats', link: '#'},
                        {name: 'Reclining Furniture', link: '#'},
                        {name: 'Sleaper Sofa & Futons', link: '#'}
                    ]
                },
                {
                    subDataName: 'Small Spaces',
                    furnitureLinks: [
                        {name: 'Small Spaces Room Sets', link: '#'},
                        {name: 'Sofa & Couches', link: '#'},
                        {name: 'Sectionals', link: '#'}
                    ]
                }
            ]  
        }
    ]

    const handleSubMenuLinksClose = () => {
        setActiveInnerIndex(null)
        setIsSubNavOpen(false)
    }

    
    
  return (
    <div className='tab-sub-menu'>
      <div className={`sub-nav-header ${isSubNavOpen ? 'hide-sub-nav-header' : ''}`}>
        <span className='back-to-main-menu'><FaChevronLeft size={17} onClick={closeMenu}  /></span>
        <div className='sub-menu-heading-container'>
            <h3> <Link to={headingLink}>{name}</Link></h3>
            <span><Link> Shop all</Link> | <Link> Shop via Chat</Link></span>
        </div>
      </div>
      <div className={`tab-sub-menu-link ${isSubNavOpen ? 'hide-sub-menu-link' : ''}`}>
        {tabSubMenu[ind] && tabSubMenu.map((item, index) => {
            return <div key={index}  onClick={() => {
                handleTabSubNavLinkOpen(index)
            }}
            >
                <span className='sub-menu-link-items-container'>
                    {item.furnitureSubData.map((innerItem, innerIndex) => {
                        return <h3  onClick={() => {
                            handleActiveIndex(innerIndex);
                        }} 
                        key={innerIndex} className='tab-sub-menu-link-item' > {innerItem.subDataName} 
                        <span> <FaChevronRight size={17} /> </span>
                        </h3>
                    })}
                    
                 </span>
            </div>
        })}
        <div className='tab-sub-menu-images-container'>
            <div className='tab-sub-menu-image-and-title'>
                <img src={furnitureMenuImage} alt='img' />
                <span>Introducing my <Link>New Modular Bob</Link></span>
            </div>
            <div className='tab-sub-menu-image-and-title'>
                <img src={furnitureMenuImageTwo} alt='img two' />
                <span>Flexible financing</span>
            </div>
        </div>
      </div>
      {activeIndex !== null && activeInnerIndex !== null && (
        <div className="sub-menu-sub-links">
          <TabMenuTabLinks closeSubMenuLinks={handleSubMenuLinksClose} 
          tabSublinksData={tabSubMenu} ind={activeIndex} innerInd={activeInnerIndex} name={tabSubMenu[activeIndex].furnitureSubData[activeInnerIndex].subDataName} />
        </div>
      )}
    </div>
  )
}

export default TabMenuTab
