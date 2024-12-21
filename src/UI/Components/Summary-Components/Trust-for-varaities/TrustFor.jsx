import React from 'react'
import './TrustFor.css';
import blueTick from '../../../../Assets/icons/blue-tick.png';

const TrustFor = () => {
    const trustedBy = [
        '100% Money Back Guarantee',
        'No Hassle Returns',
        'Secure Transactions',
        '24/7 Customer Support',
      ]
  return (
    <div className='shop-with-confidence'>
        <h3>Shop with comfidence</h3>
        <p>Trusted by more than 5000+ customers</p>
        <div className='trusted-by'>
            {trustedBy.map((items, index) => (
                <div className='trust-options'>
                    <img src={blueTick} alt='tick' />
                    <p>{items}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TrustFor
