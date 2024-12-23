import React, { useState } from 'react'
import './WishList.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useList } from '../../../context/wishListContext/wishListContext';
import ProductCardShimmer from '../../Components/Loaders/productCardShimmer/productCardShimmer';
import star from '../../../Assets/icons/Star 19.png'
import ProductCard from '../../Components/ProductCard/ProductCard';
import heart from '../../../Assets/icons/heart-vector.png'
import { toast } from 'react-toastify';


const WishList = () => {
  const navigate = useNavigate()
  const { wishList } = useList();
  console.log("wish listed products", wishList)
  const [quickViewClicked, setQuickView] = useState(false);

  const maxLength = 50;
  const truncateTitle = (title, maxLength) => {
    if (!title) return '';
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
  };

  const [quickViewProduct, setQuickViewProduct] = useState({})
  const handleQuickViewOpen = (item) => {
    setQuickView(true);
    setQuickViewProduct(item)

  }
  const handleQuickViewClose = () => { setQuickView(false) }
  const handleProductClick = (item) => {
    navigate(`/single-product/${item.slug}`, { state: item });
  };

  // wish list
  const { addToList, removeFromList, isInWishList } = useList()
  const notify = (str) => toast.success(str);
  const notifyRemove = (str) => toast.error(str)
  const handleWishList = (item) => {
    if (isInWishList(item.uid)) {
      removeFromList(item.uid);
      notifyRemove('Removed from wish list', {
        autoClose: 10000,
        className: "toast-message",
      })
    } else {
      addToList(item)
      notify("added to wish list", {
        autoClose: 10000,
      })
    }
  }

  const [activeGrid, setActiveGrid] = useState('single-col')
  const [selectedGrid, setSelectedGrid] = useState('');
  const handleActiveGrid = (grid) => {
    setActiveGrid(grid)
    setSelectedGrid(grid)
  }

  return (
    <div className='wish-list-main-container'>
      <div className='wish-list-heading-container'>
        <h3 className='wish-list-main-heading'>Favorite Products</h3>
        <div className='heading-line'></div>

        <div className='mobile-view-wishlist-card-grid-select'>
          <div className={`mobile-view-wishlist-card-grid-single-col ${activeGrid === 'single-col' ? 'grid-active' : ''}`} onClick={() => handleActiveGrid('single-col')}></div>
          <div className='mobile-view-wishlist-card-grid-dual-col' onClick={() => handleActiveGrid('dual-col')}>
            <div className={`mobile-view-wishlist-card-grid-dual-col-inner ${activeGrid !== 'single-col' ? 'active-dual-col' : ''}`}></div>
            <div className={`mobile-view-wishlist-card-grid-dual-col-inner ${activeGrid !== 'single-col' ? 'active-dual-col' : ''}`}></div>
          </div>
        </div>

      </div>

      <div className='wish-listed-products'>
        {wishList && wishList.length > 0 ? (
          wishList.map((item, index) => {
            return <ProductCard
              key={index}
              slug={item.slug}
              singleProductData={item}
              maxWidthAccordingToComp={"100%"}
              // justWidth={'100%'}
              tagIcon={item.productTag ? item.productTag : heart}
              tagClass={item.productTag ? 'tag-img' : 'heart-icon'}
              mainImage={`${item.image.image_url}`}
              productCardContainerClass="product-card"
              ProductSku={item.sku}
              tags={item.tags}
              ProductTitle={truncateTitle(item.name, maxLength)}
              stars={[
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
              ]}
              reviewCount={item.reviewCount}
              lowPriceAddvertisement={item.lowPriceAddvertisement}
              priceTag={item.regular_price}
              sale_price={item.sale_price}
              financingAdd={item.financingAdd}
              learnMore={item.learnMore}
              mainIndex={index}
              deliveryTime={item.deliveryTime}
              stock={item.manage_stock}
              attributes={item.attributes}
              handleCardClick={() => handleProductClick(item)}
              handleQuickView={() => handleQuickViewOpen(item)}
              handleWishListclick={() => handleWishList(item)}
            />
          })
        ) : (
          Array.from({ length: 4 }).map((item) => (
            <ProductCardShimmer />
          ))
        )}
      </div>

      <div className={`wishlist-mobile-cards ${selectedGrid === 'single-col' ? 'single-col' : 'two-col'}`}>
        {wishList && wishList.length > 0 ? (
          wishList.map((item, index) => {
            return <ProductCard
              key={index}
              slug={item.slug}
              singleProductData={item}
              maxWidthAccordingToComp={"100%"}
              // justWidth={'100%'}
              tagIcon={item.productTag ? item.productTag : heart}
              tagClass={item.productTag ? 'tag-img' : 'heart-icon'}
              mainImage={`${item.image.image_url}`}
              productCardContainerClass="product-card"
              ProductSku={item.sku}
              tags={item.tags}
              ProductTitle={truncateTitle(item.name, maxLength)}
              stars={[
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
                { icon: star, title: 'filled' },
              ]}
              reviewCount={item.reviewCount}
              lowPriceAddvertisement={item.lowPriceAddvertisement}
              priceTag={item.regular_price}
              sale_price={item.sale_price}
              financingAdd={item.financingAdd}
              learnMore={item.learnMore}
              mainIndex={index}
              deliveryTime={item.deliveryTime}
              stock={item.manage_stock}
              attributes={item.attributes}
              handleCardClick={() => handleProductClick(item)}
              handleQuickView={() => handleQuickViewOpen(item)}
              handleWishListclick={() => handleWishList(item)}
            />
          })
        ) : (
          Array.from({ length: 4 }).map((item) => (
            <ProductCardShimmer />
          ))
        )}
      </div>
    </div>
  )
}

export default WishList
