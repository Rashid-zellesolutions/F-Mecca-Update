import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    const policyData = [
        {
            title: 'Store Policies',
            details: [
                `There will be absolutely no cash refunds or credit card charge reversal. All sales are FINAL.`,
                `There will be a 25% cancellation fee on ALL orders. Store credit will be issued.`,
                `Special orders/Catalog orders are subject to manufacturer’s availability, which can take up to 2-6 weeks.`,
                `Mattresses are covered under manufacturer warranty. However, any stain or rip on the mattress during customer’s possession will void the warranty. Redelivery fee isn’t included in the warranty.`,
                `All Floor model furniture is sold “As is Condition”`
            ]
        },
        {
            title: 'Delivery Policy',
            details: [
                `All orders must be paid in full prior to scheduling a delivery.`,
                `Someone 18 years or over must be home to accept delivery.`,
                `Finance/Lease customers must be present at time of delivery with valid picture 1.D. If customer isn’t available, then they must email meccacustomercare@gmail.com with their Full Name, invoice number and Copy of receiver’s picture 1.D. 48 hours to prior to scheduled delivery.`,
                `We’ll remind you via phone call and text 2 days before delivery with a 4 hour time frame, scheduled between 7am and 8pm. Delivery can be tracked the day of delivery on myfurnituremecca.com This time frame cannot be changed.`,
                `Please remove snow and other obstacles that might hinder our delivery team.`,
                `Please clear the room(s) in which your new furniture will be placed. Our delivery team cannot move or remove existing furniture. If the doorways are too small for delivery, our driver will not be responsible for pending damage. If the customer still insists to deliver furniture under these circumstances, they will have to sign a waiver. Without the waiver, the furniture will not be delivered. The customer will be charged a 25% restocking fee and delivery charge will be forfeited.`,
                `Deliveries on 3rd floor and higher will be extra. See sales associate for free. If a deliver requires the removal of a window or door, please make necessary arrangements before the arrival of delivery.`,
                `Please call Furniture Mecca Delivery Department at least 48 hours in advance of your scheduled delivery to make changes. If conflicts arise, we will assess a handling fee in addition to the delivery charge. If delivery is cancelled within 48 hours of the scheduled date, the delivery department phone is number 215-352-1600 ext.2 or send us an email to meccacustomercare@gmail.com.`,
                `If customer isn’t home, delivers have a 15 minute window. If customer misses a delivery, they will have to pay another deliver fee. Furniture mecca will re-schedule the delivery in 5-7 business days.`,
                `All delivery charges are for drop off only. Additional charges apply for setup. If customer paid for setup, the driver will do accordingly. If the customer doesn’t need assembly, they will have to email meccacustomercare@gmail.com 48 hours prior to delivery.`,
                `Any issue with delivery on hand, the customer should reach out to the team via email or phone to address their issue BEFORE the Driver leaves their property. Any damage to customer’s property due to tight corners and openings our delivery team will not be responsible. Prior to delivery, customer will be responsible for acquiring proper measurements.`,
                `There is a 25% restocking fee for all returns and no fit merchandise.`,
                `Carton (trash) from the merchandise is customer’s responsibility. We do not bring trash back.`,
                `During the delivery process, if there any wear and tear to the furniture our team will ONLY replace the part or provide service to repair damage. Furniture Mecca will not replace the merchandise with a new piece.`,
                `Please Note: To ensure the safety of our delivery team, we reserve the right to cancel or delay deliveries during hazardous weather conditions.`,
                `All items marked “RTA” will not be assembled.`,
            ]
        },
        {
            title: 'Pickup Policy',
            details: [
                `Pickup is only available at warehouse location: 101 E. Venango St., Philadelphia, PA 19134.`,
                `No pick up allowed for finance/lease customers.`,
                `For security purposes, we photograph license plates and loaded vehicles. We reserve the right to refuse to load merchandise into or onto vehicles that are deemed unsafe for transport. You must notify us beforehand if someone other than the person is picking up on your behalf. For security purposes, you must present a valid license to pick up.`,
                `All picked-up merchandise may only be exchanged within 24 hours of pickup. It must be in original packing materials.`,
            ]
        },
        {
            title: 'Layaway Policy',
            details: [
                `Customer may pay layaway on an item for up to 1 year (12 months).`,
                `Customer is expected to make at least 1 payment per month to keep layaway active.`,
                `If no payment has been made for 3 months, your layaway will cancel, and you will forfeit all monies.`,
                `If during layaway time, the merchandise is discontinued by the manufacture, the customer gets store credit to be used towards other merchandise.`,
                `When layaway is paid off, the customer must allow up to 4 weeks for delivery.`
            ]
        }
    ]
    return (
        <div className='privacy-policy-main-container'>
            <h3 className='privacy-policy-main-heading'>Policies</h3>
            <div className='policy-container'>
                {policyData.map((item, index) => (
                    <div className='policy-details-container'>
                        <h3 className='policy-title'>{item.title}</h3>
                        <ul className='policy-full-details-list'>
                            {item.details.map((detail, detailIndex) => (
                                <li className='policy-list-item' key={detailIndex}>{ detail }</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrivacyPolicy
