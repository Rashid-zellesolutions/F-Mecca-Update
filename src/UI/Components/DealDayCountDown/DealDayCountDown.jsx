import React, { useState, useEffect } from 'react';
import './DealDayCountDown.css';
import dealDayImage from '../../../Assets/Furniture Mecca/Landing Page/deal of the day/Rectangle 874 (1).png';

const DealDayCountDown = () => {

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-06T21:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const padZero = (num) => String(num).padStart(2, '0')

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: padZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: padZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: padZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: padZero(Math.floor((difference / 1000) % 60)),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countDownTimer = [
    { count: timeLeft.days, name: 'Days' },
    { count: timeLeft.hours, name: 'Hours' },
    { count: timeLeft.minutes, name: 'Mins' },
    { count: timeLeft.seconds, name: 'Sec' },
  ];

  return (
    <div className='deal-of-day-countdown-main-container'>
      <div className='count-down-container'>
        <div className='deal-of-day-product-name'>
          <h3>Deal of the Day</h3>
          <p>Stevie Charcoal 87" Sofa & Chair</p>
          <span>
            <del>$1,999.00</del>
            <p>$1,599.00</p>
          </span>
        </div>
        <div className='deal-of-day-count-down'>
          {countDownTimer.map((item, index) => (
            <span key={index}>
              <div className='countdown-box'>{item.count}</div>
              <p>{item.name}</p>
            </span>
          ))}
        </div>
      </div>
      <div className='deal-of-the-day-image-div'>
        <img src={dealDayImage} alt='Deal of the Day' />
      </div>
    </div>
  );
};

export default DealDayCountDown;
