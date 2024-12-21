import React, {useState, useRef} from 'react'
import './ProductSlider.css';
import ProductCard from './ProductCard/ProductCard';
import { url } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useSingleProductContext } from '../../../context/singleProductContext/singleProductContext';
import { useCart } from '../../../context/cartContext/cartContext';

const ProductSlider = ({cardData}) => {  

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const navigate = useNavigate();

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const dragStart = (event) => {
    setIsDragging(true); 
    setStartPos(getPositionX(event));
    if (sliderRef.current) {
      setScrollPos(sliderRef.current.scrollLeft);
      sliderRef.current.classList.add('dragging');
    }
  };

  const dragEnd = () => {
    setIsDragging(false); 
    if (sliderRef.current) {
      sliderRef.current.classList.remove('dragging');
    }
  };

  const drag = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const distance = currentPosition - startPos;
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = scrollPos - distance; 
      }
    }
  };
  const {addSingleProduct} = useSingleProductContext();
  const {addToCart} = useCart()

  const handleCardClicked = (item) => {
    // console.log("item clicked", item)
    // addSingleProduct(item)
    addSingleProduct(item)
    addToCart(item)
    navigate(`/single-product/${item.slug}`, {state: item})
    // addQuantityIntoProduct(item.uid, setAllProducts, allProducts)
    // console.log("product uid", item.uid)
    // console.log("added quantity into payload", allProducts)

}

    return (
      <div className="products-slider-main-container">
        <h3 className='feature-product-heading'>Featured Products</h3>
        <div className='products-slider'
          ref={sliderRef}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          onMouseLeave={dragEnd}
          onMouseMove={drag}
          onTouchStart={dragStart}
          onTouchEnd={dragEnd}
          onTouchMove={drag}
        >
        {cardData.map((item, index) => {
            return <ProductCard key={index}
                      productData={item} 
                      img={url+item.images[1].image_url} 
                      heading={item.name} 
                      para={item.para} 
                      btnTxt={"Purchase Now"} 
                      productImageHeading={item.categories[0] !== undefined ? item.categories[0].name : "" }
                      productImagePrice={"$"+ item.sale_price}
                      productImageAbout={""}
                      productLink={""}
                      index={index}
                      handleCardClicked={() => handleCardClicked(item)}
                    />
        })}
        </div>
      </div>
    );
  };
  
  export default ProductSlider;
  
