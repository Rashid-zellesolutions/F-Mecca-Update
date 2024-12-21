import React from 'react'
import './FinancingOptions.css';

import paypalLarge from '../../../Assets/Furniture Mecca/product page/payment-options/paypal-card-large.png';
import acimaLarge from '../../../Assets/Furniture Mecca/product page/payment-options/acima-large.png';
import payOptions from '../../../Assets/Furniture Mecca/product page/payment-options/looking-for-finance-large.png';

const FinancingOptions = () => {
    const payOptionObj = [acimaLarge, payOptions, paypalLarge]
    return (
        <div className='financing-options-main-container'>
            <div className='payment-method-cards-container'>
                {payOptionObj.map((item, index) => (
                    <img src={item} alt='pay option' />
                ))}

            </div>
            <button className='no-credit-button'>
                No Credit need Financing
            </button>
        </div>
    )
}

export default FinancingOptions
