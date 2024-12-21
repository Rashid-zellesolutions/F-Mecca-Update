import React from 'react';
import './HappyCustomers.css';
import userProfile from '../../../../Assets/Furniture Mecca/Cart Page/comment-profile.png';
import { FaStar } from "react-icons/fa";

const HappyCustomers = () => {
    const happyCustomerComment = [
        {name: 'Nana Adwoa Serwah', profile: userProfile, comment: 'Owner was Amazing. He had the time to talk with us concerning the couch we bought. We even got a deal. Come here for sure for my next furniture shopping.'},
        {name: 'Elizabeth Johnson', profile: userProfile, comment: 'Owner was Amazing. He had the time to talk with us concerning the couch we bought. We even got a deal. Come here for sure for my next furniture shopping.'},
        {name: 'Nana Adwoa Serwah', profile: userProfile, comment: 'Owner was Amazing. He had the time to talk with us concerning the couch we bought. We even got a deal. Come here for sure for my next furniture shopping.'},
      ]
  return (
    <div className='happy-customers'>
            <h3>5000+ Happy Customers</h3>
            {happyCustomerComment.map((items, index) => (
              <div className='happy-customer-comment'>
                <div className='customer-frofile-and-rating'>
                  <div className='customer-profile-and-name'>
                    <img src={items.profile} alt='frofile' />
                    <h3>{items.name}</h3>
                  </div>
                  <div className='customer-rating'>
                    {[0,1,2,3,4].map((item) => (
                      <FaStar size={18} />
                    ))}
                  </div>
                </div>
                <p>{items.comment}</p>
              </div>
            ))}
            
          </div>
  )
}

export default HappyCustomers
