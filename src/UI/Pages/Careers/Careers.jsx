import React from 'react'
import './Careers.css';
import careersMainBanner from '../../../Assets/Furniture Mecca/Careers/careers-main-banner.png'
import StartWithUs from '../../Components/Carrers-Components/StartWith/StartWithUs';


const Careers = () => {
  return (
    <div className='careers-main-page'>
        <div className='careers-main-baneer'>
            <img src={careersMainBanner} alt='carrer main banner' />
        </div>
        <StartWithUs />
    </div>
  )
}

export default Careers
