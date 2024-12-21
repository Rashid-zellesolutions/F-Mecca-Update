import React from 'react'
import './NextUp.css'
import { FaArrowRight } from "react-icons/fa6";

const NextUp = () => {

  return (
    <div className='next-up-main-container'>
      <h3 className='next-up-main-heading'>Next Up</h3>
      <div className='next-up-items-container'>
        {Array.from({length: 6}).map((item) => (
            <div className='next-up-single-item'>
                <FaArrowRight size={20} />
                <p className='next-up-single-item-para'>Bob’s Supports Operation Homefront Transitional Housing (Apartments)</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default NextUp
