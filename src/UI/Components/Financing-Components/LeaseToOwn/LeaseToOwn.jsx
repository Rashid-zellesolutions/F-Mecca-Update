import React from 'react'
import './LeaseToOwn.css';
import LeaseToOwnCard from '../LeaseToOwnCard/LeaseToOwnCard';
import progressiveLeasing from '../../../../Assets/Furniture Mecca/Financing/progressive-leasing.png';
import acima from '../../../../Assets/Furniture Mecca/Financing/acima.png';
import snapFinance from '../../../../Assets/Furniture Mecca/Financing/snap-financing.png';

const LeaseToOwn = () => {
    const leaseToOwnCardsData = [
        {
            img: progressiveLeasing, 
            heading: 'Progressive Leasing', 
            creditNeeded: 'No Credit needed', 
            creditDetailsOne: 'No credit required', 
            creditDetailsTwo: 'Approved upto $5000', 
            applyLink: '#', 
            learnMoreLink: '#',
            imgWidth: '100px',
            imgHeight: '100px',
        },
        {
            img: acima, 
            heading: 'Acima', 
            creditNeeded: 'Lease To Own', 
            creditDetailsOne: 'No credit required', 
            creditDetailsTwo: 'Approved upto $5000', 
            applyLink: '#', 
            learnMoreLink: '#',
            imgWidth: '100px',
            imgHeight: '100px',
        },
        {
            img: snapFinance, 
            heading: 'Snap Finance', 
            creditNeeded: 'Apply in minutes Get approval in seconds', 
            creditDetailsOne: 'No effect to your FICO score', 
            creditDetailsTwo: 'flexible payment plans', 
            applyLink: '#', 
            learnMoreLink: '#',
            imgWidth: '100px',
            imgHeight: '100px',
        },
    ]
    return (
        <div className='lease-to-own-main-container'>
            <h3>Lease to Own</h3>
            <div className='leasing-options'>
                {leaseToOwnCardsData.map((items, index) => (
                    <LeaseToOwnCard 
                        height={'390px'}
                        imgWidth={items.imgWidth}
                        imgHeight={items.imgHeight}
                        cardImg={items.img}
                        cardHeading={items.heading}
                        creditNeeded={items.creditNeeded}
                        creditDetailsOne={items.creditDetailsOne}
                        creditDetailsTwo={items.creditDetailsTwo}
                        applyNowLink={items.applyLink}
                        learnMoreLink={items.learnMoreLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default LeaseToOwn
