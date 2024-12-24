import React, { useEffect, useState } from 'react'
import './AllStores.css';
import { Link } from 'react-router-dom';
import venangoStoreImage from '../../../Assets/all-stores-location-images/venango-store.jpg';
import huntingParkStoreImage from '../../../Assets/all-stores-location-images/hunting-park-store.jpg';
import upperDarbyStoreImage from '../../../Assets/all-stores-location-images/darby-store.jpg';
import baltimoreStoreImage from '../../../Assets/all-stores-location-images/baltimore-store.jpg';
import delmarStoreImage from '../../../Assets/all-stores-location-images/delmar-store.jpg';
import oldenStoreImage from '../../../Assets/all-stores-location-images/oldeng-store.jpg'
import pennStoreImage from '../../../Assets/all-stores-location-images/penn-st-store.jpg';
import lancasterStoreImage from '../../../Assets/all-stores-location-images/lancaster-store.jpg'
import brookdaleStoreImage from '../../../Assets/all-stores-location-images/brookdale-store.jpg';
import addBtn from '../../../Assets/icons/add-icon.png';


const AllStores = () => {
    const [hovered, setHovered] = useState(false);
    const [cardClicked, setCardClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [modalIndex, setModalIndex] = useState(0);
    const stores = [
        {img: venangoStoreImage, address: '101 E. Venango St, Philadelphia', number: '+121 5352 1600', direction: 'Direction', directionLink: '#'},
        {img: huntingParkStoreImage, address: '1430 W Hunting Park Ave Philadelphia ', number: '+126 7297 8558', direction: 'Direction', directionLink: '#'},
        {img: upperDarbyStoreImage, address: '501 S. 69th Street Upper Darby', number: '+161 0352 3500', direction: 'Direction', directionLink: '#'},
        {img: baltimoreStoreImage, address: '130 E Baltimore Ave, Lansdowne PA', number: '+148 4462 0281', direction: 'Direction', directionLink: '#'},
        {img: delmarStoreImage, address: '1830 Delmar Drive, Folcroft PA', number: '+121 5422 3883', direction: 'Direction', directionLink: '#'},
        {img: oldenStoreImage, address: '1600 N Olden Ave. Ewing', number: '+160 9392 2800', direction: 'Direction', directionLink: '#'},
        {img: pennStoreImage, address: '408 Penn St Reading', number: '+148 4869 5337', direction: 'Direction', directionLink: '#'},
        {img: lancasterStoreImage, address: '5648 Lancaster Ave Philadelphia,', number: '+121 5877 1200', direction: 'Direction', directionLink: '#'},
        {img: brookdaleStoreImage, address: '611 W Brookdale St, Allentown', number: '+148 4221 8230', direction: 'Direction', directionLink: '#'},
    ]

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stores.length)
    }

    useEffect(() => {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval) 
    }, [])

    const handleModalPopUp = (index) => {

      if(window.innerWidth <= 900){
        setModalIndex(index);
        setCardClicked(true)
      }
    }
    const closeModal = () => {
      setCardClicked(false);
    }

  return (
    <div className='all-stores-main-container'>
      <div className='store-cards-container'>
            {stores.map((item, index) => {
                return <div className='stores-card' key={index}>
                    <div className='image-container'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => handleModalPopUp(index)}
                    >
                        <img src={item.img} alt='img' />
                    </div>
                    <p>{item.address}</p>
                </div>
            })}
      </div>
      <div className='find-stores'>
        <div className={`find ${hovered ? 'hide' : ''}`}>
            <h3>Celebrate the FM's way</h3>
            <p>Enjoy everyday low prices, free coffee and treats, <br /> and never any phony sales.</p>
            <button>Find Your Store</button>
        </div>
        <div className={`stores-slider-container ${hovered ? 'show' : ''}`}>
            <div className='all-stores-slider' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
              {stores.map((item, index) => {
                return <div className='slides' key={index}>
                  <div className="image-wrapper">
                    <img src={item.img} alt='store img' />
                    <p className="address-text">{item.address}</p>
                  </div>
                </div>
              })}
            </div>
        </div>
      </div>
      <div className={`mobile-view-location-card-container ${cardClicked ? 'show-modal' : ''}`}>
        <div className='mobile-view-card'>
          <button className='modal-close-btn'>
            <img src={addBtn} alt='add btn' onClick={closeModal}/>
          </button>
          <img src={stores[modalIndex].img} alt='store' className='modal-main-image' />
          <div className='store-modal-buttons'>
            <button> {stores[modalIndex].number} </button>
            <button> <Link to={stores[modalIndex].directionLink}>{stores[modalIndex].direction}</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllStores
