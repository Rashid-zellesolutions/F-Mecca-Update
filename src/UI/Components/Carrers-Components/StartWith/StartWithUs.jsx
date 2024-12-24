import React from 'react'
import './StartWithUs.css'
import ApplyFor from '../ApplyFor/ApplyFor'
import { Link } from 'react-alice-carousel'

const StartWithUs = () => {
  return (
    <div className='start-with-us-main-container'>
        <div className='career-start-with-us'>
            <h3>Start your career with us</h3>
            <p>We Are Lot More Than Just A Furniture Store</p>
        </div>
        <div className='career-apply-now'>
            <Link to={'#'}>Apply Now</Link>
            <p>
                Furniture Mecca stands as the preeminent home furnishings retailer in the Northeast, 
                distinguished by its unwavering commitment to delivering an exceptional shopping experience.
                 With a network of 156 strategically located establishments, a cadre of top-tier Home 
                 Furnishing Consultants, and a streamlined and convenient delivery service, Furniture 
                 Mecca has cultivated a reputation for prioritizing what truly counts.
            </p>
        </div>
        <div className='looking-to-start-and-apply-now'>
            <div className='looking-to-start'>
                <h3>Looking to start your career?</h3>
                <p>Join our team of innovators and make your mark in a dynamic and collaborative work environment</p>
            </div>
            <div className='aplpy-for-form'>
                <ApplyFor />
            </div>
        </div>
    </div>
  )
}

export default StartWithUs
