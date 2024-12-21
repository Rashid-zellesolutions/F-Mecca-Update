import React, {useState, useRef} from "react"
import './SliderWithThumb.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import imgOne from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 874.png';
import imgTwo from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 875.png';
import imgThree from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 876.png';
import imgFour from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 877.png';
import imgFive from '../../../Assets/Furniture Mecca/Landing Page/instagram images/Rectangle 878.png';

const SliderWithThumb = () => {
    const images = [imgTwo, imgThree, imgFour, imgFive];
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
        carouselRef.current.slideTo(index); // Slide to the selected thumbnail
    };

    // Calculate the visible thumbnails
    const visibleThumbnails = () => {
        const totalImages = images.length;
        const startIndex = Math.max(0, activeIndex > totalImages - 4 ? totalImages - 4 : activeIndex);
        return images.slice(startIndex, startIndex + 4);
    };

    return(
        <div>
        <AliceCarousel
            ref={carouselRef} // Attach the ref
            activeIndex={activeIndex}
            disableDotsControls
            disableButtonsControls
            items={images.map((img, index) => (
                <img key={index} src={img} className="sliderimg" alt={`Slide ${index}`} />
            ))}
            responsive={{
                0: { items: 1 },
                1024: { items: 1 }
            }}
        />
        <div className="thumbnails">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`thumbnail ${activeIndex === index ? '' : 'inactive'}`}
                    onClick={() => handleThumbnailClick(index)}
                >
                    <img src={img} alt={`Thumbnail ${index}`} />
                </div>
            ))}
        </div>
    </div>
    )
}

export default SliderWithThumb
