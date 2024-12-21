import React, {useState, useEffect} from 'react'
import './MobileFinancingSlider.css'
import payFour from '../../../Assets/Furniture Mecca/Landing Page/sale banner/payFour.png';
import monthCountBanner from '../../../Assets/Furniture Mecca/Landing Page/sale banner/12Month.png';
import noCredit from '../../../Assets/Furniture Mecca/Landing Page/sale banner/noCreditNeed.png'

const MobileFinancingSlider = () => {
    const mobileSlider = [
        payFour,
        monthCountBanner,
        noCredit,
    ]
    const [mobIndex, setMobIndex] = useState(0);
    useEffect(() => {
        const intervel = setInterval(() => {
            setMobIndex((prevIndex) => (prevIndex + 1) % mobileSlider.length);
        }, 5000);
        return () => clearInterval(intervel)
    }, [mobileSlider.length]);
  
  return (
    <div className="mobile-carousel-container">
        <div className="mobile-carousel" style={{transform: `translateX(-${mobIndex * 100}%)`}}>
            {mobileSlider.map((img, index) => (
                <div className="mobile-carousel-slide" key={index}>
                    <img src={img} alt={`slide ${index + 1}`} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default MobileFinancingSlider
