import React,{useEffect} from 'react'
import './CartSideSection.css';
import { url } from '../../../utils/api';
import { useCart } from '../../../context/cartContext/cartContext';

const CartSideSection = ({attributes,
    handleItemRemove, closeBtn, productTitle, mainImage, priceTag,sale_price,regular_price, decreamentQuantity, 
    minusBtn, quantity, increamentQuantity, plusBtn,type,isProtected}) => {
        const { eachProtectionValue,isCartProtected } = useCart();

        const productTotalPrice = sale_price!=="0"? (sale_price * quantity)+ (isCartProtected? 0 : (isProtected===1?eachProtectionValue:0)): (regular_price * quantity) + (isCartProtected? 0 : (isProtected===1?eachProtectionValue:0)) ;
        const formatedSinglePrice = Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(priceTag)
        const formatedSalePrice = Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(sale_price)
        const formatedRegularPrice = Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(regular_price)

        const formatedTotalPrice = Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(productTotalPrice)
        // console.log("cart side section product image", mainImage.image_url)
        // const singlePrice = priceTag.toLocaleString('en-US', {
        //     style: 'currency',
        //     currency: 'USD'
        // }); 
        // const formatedProductTotalPrice = productTotalPrice.toLocaleString('en-US', {
        //     style: 'currency',
        //     currency: 'USD'
        // });
        // console.log("this is main image",mainImage)

  return (
    <div className='cart-side-section-product'>
        <button className='cart-side-section-remove-btn' onClick={handleItemRemove}>
            <img src={closeBtn} alt='close btn' />
        </button>
        <div className='cart-side-section-product-item-name'>
            <h3>{productTitle}</h3>
        </div>
        <div className='cart-side-section-product-containt'>
            <div className='cart-side-section-item-image'>
                <img src={`${url}${mainImage?.image_url}`} alt='product image' />
            </div>
            <div className='cart-side-section-product-details'>
                <div className="attributes_list">
                    {attributes && attributes.map((item,index)=>{
                        return(
                            <p>{item?.options[0].name}</p>
                        )
                    })}
                     <div className='cart-side-section-price-and-count'>
                    <p><del style={{
                        color:"#989898"
                    }} >{formatedRegularPrice}</del></p>
                    <p>{formatedSalePrice}</p>
                   
                    
                </div>
                {
                        isCartProtected?
                        <></>
                        :
                        isProtected===1?
                        <p style={{fontStyle:"italic"}}>(+${eachProtectionValue}) Protection Plan</p>:<></>
                    }
                </div>
               
                <div className='cart-side-section--item-actual-price'>
                <div className='cart-side-section-product-count'>
                        <button onClick={quantity===1? handleItemRemove : decreamentQuantity}>
                            <img src={minusBtn} alt='minus' />
                        </button>
                        <p>{quantity}</p>
                        <button onClick={increamentQuantity}>
                            <img src={plusBtn} alt='plus' />
                        </button>
                    </div>
                    <p className='cart-side-section-product-total'>{formatedTotalPrice} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartSideSection
