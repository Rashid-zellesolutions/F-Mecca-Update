import React, { useState } from 'react'
import './DateAndTime.css'
import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import 'react-calendar/dist/Calendar.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DateAndTime = () => {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  const timeSlots = [
    { time: '08:30 am - 09:00 am' },
    { time: '09:00 am - 09:30 am' },
    { time: '09:30 am - 10:00 am' },
    { time: '10:00 am - 10:30 am' },
    { time: '11:00 am - 11:30 am' },
    { time: '11:30 am - 12:00 am' },
  ]
  const [timeStamp, setTimeStamp] = useState()
  const handleTimeStamp = (index, time) => {
    setTimeStamp((prevState) => prevState === time ? null : timeStamp);
  }

  return (
    <div className='date-and-time-main-container'>
      <h3 className='date-and-time-main-heading'>Select Store</h3>
      <div className='date-and-time-container'>
        <div className='date-container'>
          <Calendar
            value={dateState}
            onChange={changeDate}
            prevLabel={<MdKeyboardArrowLeft size={20} />}
            nextLabel={<MdKeyboardArrowRight size={20} />}
            navigationLabel={({ date }) => {
              // Show full month name and year
              return `${date.toLocaleString('default', { month: 'long' })}`;
            }}
            showNavigation={true}
          />
        </div>

        <div className='time-container'>
          <h3 className='time-slot-heading'>Time Slots</h3>
          <span className='time-zone-span'>
            <p>Time Zone : </p>
            <p>Eastern Standard Time</p>
          </span>
          <div className='time-stamps-buttons'>
            {timeSlots.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTimeStamp(index, item)}
              >
                {item.time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateAndTime
