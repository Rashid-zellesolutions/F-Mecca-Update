import React, {useState} from 'react'
import './InstaTwoImageGallery.css';
import instaIcon from '../../../Assets/Furniture Mecca/Landing Page/instagram images/insta-icon.png'
import instaOne from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 874.png'
import instaTwo from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 875.png'

const InstaTwoImageGallery = () => {
    const [animateMouse, setAnimateMouse] = useState(false);
    const handleMouseMove = () => {
        setAnimateMouse(true)

        setTimeout(() => {
            setAnimateMouse(false);
        }, 1500)
    }
  return (
    <div className={`insta-two-image-gallery ${animateMouse ? 'animate' : ''}`} onMouseMove={handleMouseMove}>
        <img src={instaIcon} alt='icon' className={`${animateMouse ? 'animate' : ''}`}/>
        {/* <div className='insta-image-one'>
            <img src={instaOne} alt='img one' />
        </div> */}
        {/* <div className='insta-image-one'>
            <img src={instaTwo} alt='img one' />
        </div> */}
    </div>
  )
}

export default InstaTwoImageGallery
