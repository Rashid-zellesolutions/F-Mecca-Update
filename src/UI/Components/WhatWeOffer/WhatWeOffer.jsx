import React, {useState} from 'react';
import './WhatWeOffer.css';
import paymentIcon from '../../../Assets/icons/payment-icon.png';
import protectionIcon from '../../../Assets/icons/protection-icon.png';
import toolIcon from '../../../Assets/icons/tools.png';

const WhatWeOffer = ({isProtected, setIsProtected}) => {
    const [isSingleProtectionChecked, setIsSingleProtectionChecked] = useState(false);
    const servisesData = [
        // {key: 'professional-assembly', serviseName: 'Professional Assembly for $109.99', howItWOrk: 'How It Work', icon: toolIcon, style: '' },
        { key: 'single-protection', serviseName: '5 Year Protection Plan for $100.99', howItWOrk: `What's Covered`, icon: protectionIcon },
        // {serviseName: 'Flexible Payment Options', howItWOrk: 'Pay in full or carry a balance. Pay in full or carry a balance.', icon: paymentIcon },
    ]

    const handleCheckboxChange = (key, isChecked) => {
        if (key === 'single-protection') {
            setIsSingleProtectionChecked(isChecked);
            console.log("is protected on first", isSingleProtectionChecked)
            setIsProtected(isSingleProtectionChecked)
            console.log("is protected after value change", isProtected)
        }
    };

  return (
    <div className='what-we-offer-container'>
        <h3>What we Offer</h3>
        <div className='offer-cards-div'>
            {servisesData.map((item, index) => {
                return <div className='servise-card'>
                    {/* <input type="checkbox" className="customCheckbox" /> */}
                    <div class="checkbox-wrapper-1">
                        <input 
                            id={`example-${index}`} 
                            class="substituted" 
                            type="checkbox" 
                            aria-hidden="true" 
                            onChange={(e) => handleCheckboxChange(item.key, e.target.checked)}
                        />
                        <label for={`example-${index}`}></label>
                    </div>
                    <img src={item.icon} alt='payment-icon' />
                    <div className='servise-card-details-section'>
                        <h3>{item.serviseName}</h3>
                        <p className={`${item.serviseName === 'Flexible Payment Options' ? 'payment-way' : 'how-it-work' }`}>{item.howItWOrk}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default WhatWeOffer