import React, { useState } from 'react'
import './Contact.css'
import telephoneIcon from '../../../Assets/icons/telephone-reciever-icon.png';
import costumerCareIcon from '../../../Assets/icons/costumer-care.png';
import onlineSupport from '../../../Assets/icons/online-support.png';
import billingQueryIcon from '../../../Assets/icons/billing-queries.png';
import warrantyIcon from '../../../Assets/icons/warranty-assurance.png';
import makePaymentIcon from '../../../Assets/icons/make-payment.png';
import faqIcon from '../../../Assets/icons/faq.png';
import sendIcon from '../../../Assets/icons/send.png'
import { BsSend } from "react-icons/bs";

const Contact = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        contact: '',
        email: '',
        zipCode: '',
        state: '',
        city: '',
        message: ''
    })
    const servicesDetail = [
        {
            img: costumerCareIcon,
            name: 'Customer Care',
            slogan: 'Our customer care team is available to assist your needs',
            timing: 'Monday - Sunday: 8am - 6pm'
        },
        {
            img: onlineSupport,
            name: 'Online Shopping Assistance',
            slogan: 'Need help with online shopping? Our phones now open until Midnight',
            timng: 'Monday – Sunday: 8am – Midnight',
        },
        {
            img: billingQueryIcon,
            name: 'Billing Questions',
            slogan: 'Have questions about financing or paying bills? We are here to help via phone or web page Pay your bills',
            timing: 'Monday – Sunday: 8am – 6pm',
        },
        {
            img: warrantyIcon,
            name: 'Warranty Assistance',
            slogan: 'Have questions about financing or paying bills? We are here to help via phone or web page Pay your bills',
            timing: 'Monday – Sunday: 8am – 6pm'
        }
    ]
    const payAndFAQProcess = [
        { img: makePaymentIcon, name: 'Make a Payment', details: 'Now it is easier to make a payment online. Follow this page and it will provide guidance to achieve your goal!' },
        { img: faqIcon, name: `FAQ's`, details: 'Please check out our frequently asked questions page for additional information!' },
    ]
    return (
        <div className='contact-us-main-container'>
            <div className='contact-us-head'>
                <h3 className='contact-us-main-heading'>Contact Us</h3>
                <div className='contact-para'>
                    <p>
                        Our team can answer any questions that you might have, to reach the desired department
                        please call the number and choose one of our extensions listed below.
                    </p>
                </div>
                <div className='contact-head-phone-number-sec'>
                    <img src={telephoneIcon} alt='telephone' />
                    <p>215 352 1600</p>
                </div>
            </div>
            <div className='contact-us-body'>
                <div className='contact-us-services'>
                    {servicesDetail.map((item, index) => (
                        <div className='contact-us-service-card'>
                            <img src={item.img} alt='costumer-care' className='costumer-care-service-icon' />
                            <div className='costumer-care-service-details'>
                                <h3>{item.name}</h3>
                                <p>{item.slogan}</p>
                                <p>{item.timing}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='contact-us-contact-form'>
                    <div className='contact-form-head'>
                        <h3>Didn't find what you're looking for?</h3>
                        <p>If it is after hours or you had another type of inquiry, please contact our care team with the mentioned form:</p>
                    </div>
                    <div className='contact-form-input'>
                        <div className='contact-form-combined-inputs'>
                            <label>
                                Name
                                <input type='text' placeholder='alex john' />
                            </label>
                            <label>
                                Contact
                                <input type='text' placeholder='090078601' />
                            </label>
                        </div>
                        <label>
                            Email
                            <input type='text' placeholder='example@gmail.com' />
                        </label>
                        <div className='contact-form-combined-inputs'>
                            <label>
                                Zip Code
                                <input type='text' placeholder='10001' />
                            </label>
                            <label>
                                State
                                <input type='text' placeholder='Nw York' />
                            </label>
                        </div>
                        <label>
                            Your Message
                            <textarea
                                rows={4}
                                placeholder='write your message here'
                                style={{
                                    width: '100%',
                                    backgroundColor: '#FDFDFD',
                                    border: '1px solid #d7d7d7',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    fontWeight: '400',
                                    borderRadius: '5px',
                                    color: '#595959',
                                    padding: '8px 10px',
                                    outline: 'none'

                                }}
                            />
                        </label>
                    </div>
                    <div className='form-submit-button-div'>
                        <button>
                            {/* <img src={sendIcon} alt='send' /> */}
                            <BsSend size={25} className='send-file-icon' />
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <div className='contact-us-payment-and-FAQ'>
                {payAndFAQProcess.map((item, index) => (
                    <div className='contact-us-pay-and-faq-details'>
                        <img src={item.img} alt='make payment' />
                        <h3>{item.name}</h3>
                        <p>{item.details}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Contact
