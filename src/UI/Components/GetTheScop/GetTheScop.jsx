import React, { useState, useEffect } from 'react'
import './GetTheScop.css';
import banner from '../../../Assets/global-images/flyre-image.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import checked from "../../../Assets/checked.png"
import LoaderAnimation from '../../../Assets/Loader-animations/loader-check-two.gif';
import { url } from '../../../utils/api';

const GetTheScop = () => {

  // State for email input and form submission status
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Reset error when the user types
  };
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      // Send data to API
      const response = await axios.post(`${url}/api/v1/activate-scoop/add`, {
        email,
      });

      console.log(response);

      // Handle success
      if (response.status === 201) {
        setIsSubscribed(true);
      }
      else if (response.status === 409) {
        setError('Email already exists');
      }
      else {
        setError(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);

      // Check if the error is due to the API response or a network issue
      if (error.response) {
        // If the error has a response (API returned an error)
        setError(error.response.data.message || 'Something went wrong, please try again later.');
      } else {
        // If there was a network error or no response
        setError('Network error, please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <div className='get-the-scop-main-container'>
        <div className='get-the-scop-form-container'>
          {!isSubscribed ? <div className='get-the-scop-form'>
            <h3>Get the scoop</h3>
            <span className='get-the-scop-offers'>
              <Link> Discounts</Link> |
              <Link> Offers</Link> |
              <Link> Best Price</Link>
            </span>
            <form onSubmit={handleSubmit}>
              <div className='get-the-scop-input'>
                <input
                  type='text'
                  placeholder='Email Address'
                  value={email}
                  onChange={handleEmailChange}
                />

                {isSubmitting ? <img className='scoop_loader' src={LoaderAnimation} alt="" /> : <button type='submit' disabled={isSubmitting}>
                  Sign me up
                </button>}
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
            <p>By Signing Up you agree to our <Link to={'/terms-condition'} className='desktop-get-the-scoop-terms'> Terms of Use </Link> and <Link to={'/privacy-policy'} className='desktop-get-the-scoop-terms'> Privacy Policy </Link></p>

          </div> :
            <div className="subscription_done">
              <img src={checked} />
              <p className='done_message'>Congratulations!</p>
              <p className='done_message_2'>Your Subscription Has Been Done Successfully.</p>
              <p className='done_message_3'>Check your email</p>
            </div>}
        </div>
        <div className='get-the-scop-banner'>
          <h3>Furniture Mecca Promotions</h3>
          <p>Get Exclusive Promotions For The Year 2024</p>
          <button> <Link to={`https://flyer.myfurnituremecca.com/`} target='_blank'> Click To See FLyer </Link> </button>
        </div>
      </div>

      {/* Mobile view */}
      <div className='mobile-view-scop-main-container'>
        <div className='mobile-view-get0the-scoop-overlay'>
          <div className='mobile-view-get-scoop-heading'>
            <h3>Get The Scoop</h3>
            <span>
              <Link>Offer</Link> |
              <Link>Discounts</Link> |
              <Link>Best Prices</Link>
            </span>
          </div>
          {!isSubscribed ?
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>

              <div className='mobile-view-get-scoop-input-and-button'>
                <input
                  type='text'
                  placeholder='Email Address'
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p style={{ color: 'red', fontSize: "13px", margin: "0", padding: "0", lineHeight: "10px" }}>{error}</p>}
                {isSubmitting ? <img className='scoop_loader' src={LoaderAnimation} alt="" /> : <button type='submit' disabled={isSubmitting}>
                  Sign me up
                </button>}
              </div>

            </form>
            :
            <div className="subscription_done">
              <img src={checked} />
              <p className='done_message'>Congratulations!</p>
              <p className='done_message_2'>Your Subscription Has Been Done Successfully.</p>
              <p className='done_message_3'>Check your email</p>
            </div>}
          <p className='mobile-view-conditions'>By signing up, you agree to our <Link to={'/privacy-policy'} className='mobile-view-get-the-scoop-conditions'> Privacy Policy </Link> and <Link to={'/terms-condition'} className='mobile-view-get-the-scoop-conditions'> Terms of Use </Link>.</p>
          <div className='mobile-view-flyre-view'>
            <h3>Furniture Mecca Promotions</h3>
            <p>Get exclusive promotions for the year 2024</p>
            <button>
              <a href='https://flyer.myfurnituremecca.com/'>
                Click to see flyer
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetTheScop
