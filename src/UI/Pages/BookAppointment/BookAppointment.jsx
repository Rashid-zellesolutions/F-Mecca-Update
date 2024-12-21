import React, { useState } from 'react'
import './BookAppointment.css'
import tabHome from '../../../Assets/icons/home-icon.png';
import storeIcon from '../../../Assets/icons/home.png'
import outlinedHome from '../../../Assets/icons/home-black-outlined.png'
import DateAndTime from '../../Components/BookAppointmentComponents/DateAndTime/DateAndTime';
import SelectStore from '../../Components/BookAppointmentComponents/SelectStores/SelectStore';
import BasicDetails from '../../Components/BookAppointmentComponents/BasicDetails/BasicDetails';
import AppointmentSummary from '../../Components/BookAppointmentComponents/Summary/AppointmentSummary';

const BookAppointment = () => {
    const appointmentTabs = [
        { img: outlinedHome, title: 'Store' },
        { img: outlinedHome, title: 'Date & Time' },
        { img: outlinedHome, title: 'Basic Details' },
        { img: outlinedHome, title: 'Summary' },

    ]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleCardSelect = (index) => {
        setSelectedIndex(index)
    }
    return (
        <div className='book-an-appointment-main-container'>
            <div className='book-appointment-head'>
                <h3 className='book-appointment-main-container'>Book an Appointment</h3>
                <p className='book-appointment-slogan'>Do You Want Our Expert To Give Your The Advice, Book An Appointment Now</p>
            </div>
            <div className='book-appointments-body'>
                <div className='book-appointment-select-tab-container'>
                    {appointmentTabs.map((item, index) => (
                        <div className={`tab-select-card ${selectedIndex === index ? 'selected-tab' : ''}`} onClick={() => handleCardSelect(index)}>
                            <div className='tab-sect-card-icon'></div>
                            {/* <img src={item.img} alt='tab icon' /> */}
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='content-according-to-selected-tab'>
                    {
                        selectedIndex === 0 ? <SelectStore />
                        : selectedIndex === 1 ? <DateAndTime />
                        : selectedIndex === 2 ? <BasicDetails />
                        : <AppointmentSummary />
                    }
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
