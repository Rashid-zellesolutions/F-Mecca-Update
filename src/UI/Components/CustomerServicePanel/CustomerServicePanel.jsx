import React, { useState } from 'react'
import './CustomerServicePanel.css';
import CustomerSupportFeatureCard from './CustomerSupportFeatures/CustomerSupportFeatureCard';

import cart from '../../../Assets/icons/cart.png';
import delivery from '../../../Assets/icons/delivery.png';
import finance from '../../../Assets/icons/finance.png';
import tools from '../../../Assets/icons/tools.png';
import help from '../../../Assets/icons/help.png';

const CustomerServicePanel = ({ currentPath }) => {

  const [expendedCard, setExpendedCard] = useState(null)
  const featuresData = [
    { img: cart, heading: 'Place an order', link: '#', desc: 'Shop or place order via chat view your in-store cart check on availability of a' },
    { img: delivery, heading: 'Get Delivery & Pickup', link: '#', desc: 'Schedule or reschedule delivery Check order status Track your delivery' },
    { img: finance, heading: 'Finance Your Furniture', link: '#', desc: 'Check if you pre-qualify Explore financing options See your available credit' },
    { img: tools, heading: 'Fix a product issue', link: '#', desc: 'Report a product issue Reschedule a service appointment' },
    { img: help, heading: 'Contact Support', link: '#', desc: 'Chat with an agent Call an agent at 860 474-1000 Check status of support ticket' },
  ]

  return (
    <div className={`customer-services-panel-main-container`}>
      <div className='customer-services-container'>
        <h3>My Team is Here to Help </h3>
        <p>Reach out by chat  or phone (215 352 1600)</p>
        <div className='customer-support-features'>
          {featuresData.map((item, index) => {
            return <CustomerSupportFeatureCard
              key={index}
              img={item.img}
              heading={item.heading}
              link={item.link}
              desc={item.desc}
              isExtended={expendedCard === index}
              onToggle={() => setExpendedCard(expendedCard === index ? null : index)}
              className={index === 1 ? 'third-card' : ''}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomerServicePanel
