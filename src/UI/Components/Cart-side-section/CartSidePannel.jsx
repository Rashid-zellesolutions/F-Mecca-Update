import React from 'react'
import './CartSidePannel.css';
import closeBtn from '../../../Assets/icons/close-btn.png'
import CartSideSection from './CartSideSection';
import cartBlack from '../../../Assets/icons/cart-bag-new.png';
import minusBtn from '../../../Assets/icons/minus-white.png';
import plusBtn from '../../../Assets/icons/plus-white.png';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/cartContext/cartContext';

const CartSidePannel = (
  { 
    cartData, 
    addToCartClicked, 
    setAddToCartClick, 
    handleCartSectionClose, 
    removeFromCart, 
    decreamentQuantity, 
    increamentQuantity 
  }) => {

  const { 
    isCartProtected,
    isProfessionalAssembly,
    handleCartProtected,
    handleCartAssembly, 
  } = useCart()

  // const [singleCart, setSingleCart] = useState(cartData)
  const navigate = useNavigate()
  const handleCLoseCartPanel = () => {
    setAddToCartClick(false)
    navigate(`/add-to-cart`)

  }
  // const [isCheck, setIsCheck] = useState({});

  // const handleCheckboxCheck = (index) => {
  //   setIsCheck((prev) => ({
  //     ...prev,
  //     [index]: !prev[index], // Toggle the checked state
  //   }));
  //   // setIsCheck(index);
  //   console.log("checked value", isCheck)
  // }
  // const cartSummeryCheckData = [
  //   { type: 'checkbox', label: 'Professional Assembly (+ $210)', detail: 'Use professional assembly for all products and save up to $80' },
  //   { type: 'checkbox', label: 'Elite Platinum Furniture Protection(+ $199)', detail: 'Use professional assembly for all products and save up to $80' }
  // ]


  // console.log("single cart state: ", singleCart)
  return (
    <div
      className={`cart-side-main-section ${addToCartClicked ? 'show-side-cart' : ''} `}
      onClick={handleCartSectionClose}
    >
      <button className='cart-section-close-btn' onClick={handleCartSectionClose}>
        <img src={closeBtn} alt='close btn' />
      </button>
      <div
        className={`cart-side-section-containt-div ${addToCartClicked ? 'show-side-cart-containt' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='cart-section-heading-div'>
          <div className='cart-side-section-cart-bag-div'>
            <img src={cartBlack} alt='cart icon' />
            <p className='cart-side-panel-item-count'>{(cartData?.products?.length)}</p>
          </div>
          <p>Your Cart </p>
        </div>
        <div className='cart-section-products'>
          {cartData && cartData?.products?.map((items, index) => {
            return <CartSideSection

              key={items.product_uid}
              attributes={items.attributes}
              handleItemRemove={() => removeFromCart(items.isVariable === 1 ? items.variation_uid : items.product_uid, items.isVariable === 1)}
              closeBtn={closeBtn}
              productTitle={items.name}
              mainImage={items.image}
              priceTag={items.regular_price}
              decreamentQuantity={() => decreamentQuantity(items.isVariable === 1 ? items.variation_uid : items.product_uid, items.isVariable === 1)}
              minusBtn={minusBtn}
              quantity={items.quantity}
              increamentQuantity={() => increamentQuantity(items.isVariable === 1 ? items.variation_uid : items.product_uid, items.isVariable === 1)}
              plusBtn={plusBtn}
              sale_price={items.sale_price}
              regular_price={items.regular_price}
              type={items.type}
              isProtected={items.is_protected}
            />
          })}
        </div>
        <div className='proffesional-assembly-check-sec'>
          <label className='order-summary-proffesional-check-item-label'>
            <input
              type="checkbox"
              className='order-summary-checkbox'
              checked={isProfessionalAssembly}
              onChange={() => handleCartAssembly()}
            />
            Professional Assembly (+ $210)
          </label>
          <p className='order-summary-proffesional-check-item-detail'>Use professional assembly for all products and save up to $80</p>
        </div>
        <div className='proffesional-assembly-check-sec'>
          <label className='order-summary-proffesional-check-item-label'>
            <input
              type="checkbox"
              className='order-summary-checkbox'
              checked={isCartProtected}
              onChange={() => handleCartProtected()}
            />
            Elite Platinum Furniture Protection(+ $210)
          </label>
          <p className='order-summary-proffesional-check-item-detail'>Use professional assembly for all products and save up to $80</p>
        </div>
        <div className='cart-side-section-buttons'>
          <div className='cart-section-view-cart-and-checkout-btn'>
            <button className='cart-side-section-view-cart' onClick={handleCLoseCartPanel}>
              View Cart
            </button>
            <button className='cart-side-section-checkout'>
              Checkout
            </button>
          </div>
          <button className='cart-side-section-continue-shopping'>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSidePannel
