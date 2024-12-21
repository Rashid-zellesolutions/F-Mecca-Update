import React from 'react'
import './Financing.css'
import LatestModulerBanner from '../../Components/LatestModuler/LatestModulerBanner'

import financingBanner from '../../../Assets/Furniture Mecca/Financing/Financing-Desktop-Banner-2048x545 1.png'
import mobileFinancingBanner from '../../../Assets/Furniture Mecca/Financing/download 145.png';
import mobileSecondBanner from '../../../Assets/Furniture Mecca/Financing/download 146.png';

import LeaseToOwn from '../../Components/Financing-Components/LeaseToOwn/LeaseToOwn'
import LeaseToOwnCard from '../../Components/Financing-Components/LeaseToOwnCard/LeaseToOwnCard'
import americanFirst from '../../../Assets/Furniture Mecca/Financing/american-first.png';
import wellFargo from '../../../Assets/Furniture Mecca/Financing/wellsfargo.png'
import FinanceServiceCategoryCard from '../../Components/Financing-Components/FinanceServiceCategoryCard/FinanceServiceCategoryCard'

import storeIcon from '../../../Assets/Furniture Mecca/Financing/store.png'
import quickDelivery from '../../../Assets/Furniture Mecca/Financing/quick-delivery.png'
import FinancingForEveryOne from '../../../Assets/Furniture Mecca/Financing/discount.png'
import trackOrder from '../../../Assets/Furniture Mecca/Financing/order-track.png'
import ecoFriendly from '../../../Assets/Furniture Mecca/Financing/eco-friendly.png'
import knowledgeAssociate from '../../../Assets/Furniture Mecca/Financing/knowledge-accociate.png'

const Financing = () => {
    const paymentOptions = [
        {
            img: americanFirst, 
            topHeading: 'Payment Solutions', 
            heading: 'Americas First Finance', 
            creditNeeded: 'Americas First Finance', 
            creditDetailsOne: 
                `Approval is possible without a credit score, but credit will be checked.`, 
            applyNowLink: '#', 
            learnMoreLink: '#',
            imgWidth: '100px',
            imgHeight: '100px',
        },
        {
            img: wellFargo, 
            topHeading: 'Traditional Financing', 
            heading: 'Wells Fargo', 
            creditNeeded: 'Lease to own', 
            creditDetailsOne: `No credit required`,
            creditDetailsTwo: 'Approved upto $5000', 
            applyNowLink: '#', 
            learnMoreLink: '#',
            imgWidth: '220px',
            imgHeight: '100px'
        },
    ]
    const financingServiceCategoryData = [
        {img: storeIcon, heading: 'Shop in-store or online', desc: `Thousands of items in stock and even more on our endless aisle.`},
        {img: quickDelivery, heading: 'Quick Delivery', marginTop: 'marginTop', desc: `our order is fully inspected and placed exactly where you want.`},
        {img: FinancingForEveryOne, heading: 'Financing for Everyone', desc: `Pay your way. No matter your budget.`},
        {img: trackOrder, heading: 'Online Order Tracking', desc: `Track the status of your order every step of the way.`},
        {img: ecoFriendly, heading: 'Eco-Friendly', marginTop: 'marginTop', desc: `We recycle nearly 20 million pounds of materials every year.`},
        {img: knowledgeAssociate, heading: 'Knowledgeable Associates', desc: `We’re here to help you make the most informed purchase possible.`},
    ]
  return (
    <div className='financing-main-container'>
        <LatestModulerBanner 
            customWidth={false} 
            // showBanners={financingBanner} 
            mainImgShow={true} 
            mobileMainImage={mobileFinancingBanner} 
            mainImage={financingBanner} 
        />
        <div className='mobile-finance-secondBanner'>
            <img src={mobileSecondBanner} alt='mobile-second-banner' />
        </div>
        <LeaseToOwn />
        <div className='payment-solutions'>
            {paymentOptions.map((items, index) => (
                <div className='payment-solution-single-card'>
                    <h3>{items.topHeading}</h3>
                    <LeaseToOwnCard 
                        height={'480px'}
                        imgWidth={items.imgWidth}
                        imgHeight={items.imgHeight}
                        cardImg={items.img}
                        cardHeading={items.heading}
                        creditNeeded={items.creditNeeded}
                        creditDetailsOne={items.creditDetailsOne}
                        creditDetailsTwo={items.creditDetailsTwo}
                        applyNowLink={items.applyNowLink}
                        learnMoreLink={items.learnMoreLink}
                    />
                </div>
            ))}
        </div>
        <div className='financing-services-categories'>
            {financingServiceCategoryData.map((items, index) => (
                <FinanceServiceCategoryCard 
                    marginTop={items.marginTop}
                    cardIcon={items.img}
                    cardTitle={items.heading}
                    cardDesc={items.desc}
                />
            ))}
        </div>
    </div>
  )
}

export default Financing
