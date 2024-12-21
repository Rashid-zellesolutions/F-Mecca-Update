import React ,{useState,useEffect} from "react";
import "./ActiveCategoryPage.css"
import { url } from "../../../utils/api";
import { useActiveSalePage } from "../../../context/ActiveSalePageContext/ActiveSalePageContext";
import Sliderr from "../../../Global-Components/Slider/Slider";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useList } from "../../../context/wishListContext/wishListContext";
import ProductCardShimmer from "../../Components/Loaders/productCardShimmer/productCardShimmer";
import heart from "../../../Assets/icons/heart-vector.png"
import star from "../../../Assets/icons/Star 19.png"
import CartSidePannel from "../../Components/Cart-side-section/CartSidePannel";
import { useCart } from "../../../context/cartContext/cartContext";
import QuickView from "../../Components/QuickView/QuickView";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

export default function ActiveCategoryPage() {
    const navigate = useNavigate();
    const { salesData,products  } = useActiveSalePage();
    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        if(!title) return '';
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
    };
    const handleProductClick = (item) => {
        navigate(`/single-product/${item.slug}`, {state:  item});
    };

    const moveToProductArchive = () => {
        navigate(`/outlet/${salesData?.data?.categoryData?.slug}`, {state:  salesData?.data?.categoryData});
    };

    const [quickViewProduct, setQuickViewProduct] = useState({})
    const [quickViewClicked, setQuickView] = useState(false);
    const [addToCartClicked, setAddToCartClicked] = useState(false)
    const handleQuickViewOpen = (item) => {
        setQuickView(true);
        setQuickViewProduct(item)

    }
        // wish list 
        const {addToList, removeFromList, isInWishList} = useList()
        const notify = (str) => toast.success(str);
        const notifyRemove = (str) => toast.error(str)
        const handleWishList = (item) => {
            if(isInWishList(item.uid)){
                removeFromList(item.uid);
                notifyRemove('Removed from wish list', {
                    autoClose: 10000,
                    className: "toast-message",
                })
            }else{
                addToList(item)
                 notify("added to wish list", {
                    autoClose: 10000,
                })
            }
        }
    
        const {
            cartProducts,
            increamentQuantity, 
            decreamentQuantity, 
            removeFromCart
        } = useCart();


        const handleCartSectionClose = () => {
            setAddToCartClicked(false)
        }
        const handleQuickViewClose = () => {setQuickView(false)}
    
    return(
        <div className="activeCategoryPage">
             <Sliderr  images={ salesData ? salesData?.data?.mainSlider?.desktop_view : []} />
             
             <div className="section_1_ASP">
             <h3 className='category-heading'>{ salesData ? salesData?.data?.categoryData?.name : ""}</h3>
             <div className="product-main increase-columns">

             {products && products.length > 0 ? (
                        products.map((item, index) => {
                        return  <ProductCard
                        key={index}
                        slug={item.slug}
                        singleProductData={item}
                        maxWidthAccordingToComp={"100%"}
                        justWidth={'100%'}
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
                        Array.from({ length: 12 }).map((_, index) => (
                            <ProductCardShimmer />
                        ))
                    )}
                
             </div>
             <div className='view-more-products-button-div'>
                    <button onClick={moveToProductArchive} className='view-more-btn'>View more products</button>
                </div>
             </div>
             
             <Sliderr height={"auto"} images={ salesData ? salesData?.data?.banner1?.desktop_view : []} />
             <div className="content_1_section">
                <div className="left_side_cont">
                <div dangerouslySetInnerHTML={{ __html: salesData?.data?.content1 || "" }} />
                </div>
                <div className="right_side_cont">
                    <img src={ salesData ? url+salesData?.data?.banner2[0]?.image_url : ""} alt="" srcset="" />
                </div>
             </div>
             <Sliderr height={"auto"} images={ salesData ? salesData?.data?.banner3?.desktop_view : []} />
             <div className="section_3_ASP" dangerouslySetInnerHTML={{ __html: salesData?.data?.content2 || "" }} />
             <CartSidePannel 
            cartData={cartProducts}
            addToCartClicked={addToCartClicked}
            handleCartSectionClose={handleCartSectionClose} 
            removeFromCart={removeFromCart}
            decreamentQuantity={decreamentQuantity}
            increamentQuantity={increamentQuantity}
        />
        <div className={`quick-view-section ${quickViewClicked ? 'show-quick-view-section' : ''}`} onClick={handleQuickViewClose}>
            <button className={`quick-view-close`} onClick={handleQuickViewClose}>
                {/* <img src={closeBtn} alt='close' /> */}
                <IoMdClose size={25} style={{color: '#595959'}} />
            </button> 
            <div className={`quickview-containt ${quickViewClicked ? 'show-quick-view-containt' : ''}`} onClick={(e) => e.stopPropagation()}>
                <QuickView setQuickViewProduct={quickViewProduct} />
            </div>
        </div>
        </div>
    )
}