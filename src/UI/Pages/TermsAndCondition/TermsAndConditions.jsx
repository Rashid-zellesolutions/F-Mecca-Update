import React from 'react'
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    const termsConditionData = [
        {
            title: 'What happens when an order is placed',
            details: [
                `Allow for 24-48 hours for your order to process and for Furniture Mecca to contact you with a delivery date.`,
                `Online transactions are not available for same day pickup.`,
                `All online orders require cardholder to be present with valid government issued identification and credit card used in transaction.`,
                `Any damages must be reported to the driver at time of delivery, if not reported before driver leaves, we are not responsible.`,
                `All picked up merchandise from our 101 E. Venango St. warehouse can only be exchanged within 24 hours and must be in original package un-opened.`,
                `Feel free to e-mail meccacares@myfurnituremecca.com if you have any questions or call us at 215-352-1600.`,
            ]
        },
        {
            title: 'INTRODUCTION',
            details: [
                `Welcome to MyFurnitureMecca.com. The Site (the “Site”) is provided by Furniture Mecca as a service to our loyal customers. The following basic rules (the “Terms of Use”) govern your use of the Site. Your use of the Site constitutes your unconditional agreement to be bound by the Terms of Use. Furniture Mecca reserves the right, at its discretion, to change, modify, add or remove portions of the Terms of Use at any time and without notice to you by posting such changes to this page. Furniture Mecca recommends you review the Terms of Use whenever you use the Site. Your continued use of the Site following the posting of these changes to the Terms of Use will constitute your acceptance of those changes.
                Furniture Mecca may disclose or alter any aspect of the Site, remove content from the Site, restrict the time the Site is available or restrict the amount of use permitted at Furniture Meccas sole discretion and without prior notice or liability to you. You agree that Furniture Mecca may, in its sole discretion, immediately suspend and or terminate your access to the Site without any liability to you or any third party.
                The Terms of Use were last updated on August 9, 2017.`
            ]
        },
        {
            title: 'SITE USE',
            details: [
                `By accepting the Terms of Use through use of the Site, you certify that you are 18 years of age or older. If you are under the age of 18 but at least 13 years of age you may use the Site only under the supervision of a parent or legal guardian who agrees to be bound by the Terms of Use. It is not Furniture Mecca’s policy to knowingly collect personal information of children under the age of 13 without prior parental or legal guardian consent. Children under the age of 13 may not use the Site other than for browsing, and parents or legal guardians may not agree to the Terms of Use on their behalf. If you are a parent or legal guardian and agree to the Terms of Use for the benefit of a child between the ages of 13 and 18, you agree to be fully responsible for such child’s use of the Site, including any financial charges and/or legal liability that may be incurred. If you do not agree to (or cannot comply with) any of the Terms of Use, do not use the Site.
                All materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials that are part of the Site (collectively, the “Contents”) are intended solely for personal,
                non-commercial use. You may download or copy the Contents and other downloadable materials displayed on the Site for your personal use only. No right, title or interest in any downloaded Content is transferred to you as a result of any such downloading or copying.
                You may not reproduce (except for personal use as noted above), publish, transmit, distribute, display, modify,
                create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, any of the Contents, the Site or any related software. All software used on the Site is the property of Furniture Mecca or its suppliers and/or
                manufacturers and protected by U.S. and international copyright laws. The Contents and software on the Site may be used only as a shopping resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance, of the Contents on the Site is strictly prohibited.`
            ]
        }
    ]
  return (
    <div className='terms-and-conditions-main-container'>
        <h3 className='terms-and-conditions-main-heading'>Terms & Conditions</h3>
        <div className='term-and-condition-detail-container'>
            {termsConditionData.map((item, index) => (
                <div className='term-condition-title-and-list'>
                    <h3 className='term-and-condition-title'>{item.title}</h3>
                    <ul className='term-condition-list'>
                        {item.details.map((detail, detailIndex) => (
                            <p className='term-condition-list-item' key={detailIndex}>{detail}</p>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TermsAndConditions
