import React, { useEffect, useState } from "react";
import "./FurnitureAtEveryBudget.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import star from '../../../Assets/icons/blue-star.png'
import { url } from "../../../utils/api";
import { useLocation, useNavigate } from 'react-router-dom';
import heart from '../../../Assets/icons/heart-vector.png'
import QuickView from "../../Components/QuickView/QuickView";
import { IoMdClose } from "react-icons/io";
import ProductCardShimmer from "../../Components/Loaders/productCardShimmer/productCardShimmer";
import { useList } from "../../../context/wishListContext/wishListContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { type } from "@testing-library/user-event/dist/type";


export default function FurnitureAtEveryBudget() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('categoryUid');
    const max_price = queryParams.get('max_price');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/api/v1/products/by-category?categoryUid=${category}&max_price=${max_price}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const maxLength = 50;
    const truncateTitle = (title, maxLength) => {
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    };

    const [quickViewProduct, setQuickViewProduct] = useState({})
    const [quickViewClicked, setQuickView] = useState(false);
    const handleQuickViewOpen = (item) => {
        setQuickView(true);
        setQuickViewProduct(item)

    }
    const handleQuickViewClose = () => { setQuickView(false) }

    const handleProductClick = (item) => {
        navigate(`/single-product/${item.slug}`, { state: item })
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





    // variation price

    const [variationPayload, setVariationPayload] = useState();
    const getVariationMatch = () => {
        const selectedAttr = data?.variations?.find(variation =>
            variation.attributes.some(attribute =>
                attribute.type === 'select' &&
                attribute.options.some(option => option.value === selectVariation)
            ) &&
            variation.attributes.some(attribute =>
                attribute.type === 'color' &&
                attribute.options.some(option => option.value === selectedColor)
            )
        );

        setVariationPayload(selectedAttr)

        // console.log("selected payload according to variatons on parent", variationPayload)
    }

    const [selectVariation, setSelectVariation] = useState(0);
    const handleSelectVariation = (value) => {
        setSelectVariation(value);
        // console.log("selected value on parend ", selectVariation)
        getVariationMatch()
    }

    const [selectedColor, setSelectedColor] = useState();
    const handleSelectColor = (value) => {
        setSelectedColor(value)
        // console.log("selected color on parent", selectedColor)
        getVariationMatch()
    }

    const getInitialDefaultValues = () => {
        const defAttImage = data?.variations?.find(attr =>
            attr.uid === data.default_variation
        )
        // console.log("defould attribute on size variant", defAttImage)
        const defAttrColor = defAttImage?.attributes?.find(attribute =>
            attribute?.type === 'color' &&
            attribute?.options?.some(option => option?.value)
        )

        const defAttrSelect = defAttImage?.attributes?.find(attribute =>
            attribute?.type === 'select' &&
            attribute?.options?.some(option => option?.value)
        )

        const defoultColor = defAttrColor?.options?.[0]?.value;
        const defoultValue = defAttrSelect?.options?.[0]?.value;
        // console.log("on parent color", defoultColor);
        // console.log("on parent label", defoultValue)
        setSelectVariation(defoultValue);
        setSelectedColor(defoultColor)
        getVariationMatch()
    };

    useEffect(() => {
        getInitialDefaultValues()
    }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;
    const [activeGrid, setActiveGrid] = useState('single-col')
    const [selectedGrid, setSelectedGrid] = useState('single-col');
    const handleActiveGrid = (grid) => {
        setActiveGrid(grid)
        setSelectedGrid('single-col');
    }



    return (
        <>

            <div className="cover_photo">
                <img src="https://fm.skyhub.pk/uploads/media/Pages/home/slider/1731385502484_209_Main-Desktop-Banner-2-2048x545.webp" alt="Furniture Cover" />
            </div>
            <div className="furniture_at_every_budget">


                <h3 className="furniture-for-every-budget-main-heading">Furniture At Every Budget</h3>

                <div className="product-grid">
                    {data ? (
                        data.products.map((item, index) => (
                            <ProductCard
                                key={index}
                                slug={item.slug}
                                singleProductData={item}
                                maxWidthAccordingToComp="100%"
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
                                priceTag={item.variationPayload?.regular_price ? item.variationPayload?.regular_price : item.regular_price}
                                sale_price={item.variationPayload?.sale_price ? item.variationPayload?.sale_price : item.regular_price}
                                financingAdd={item.financingAdd}
                                learnMore={item.learnMore}
                                mainIndex={index}
                                deliveryTime={item.deliveryTime}
                                stock={item.manage_stock}
                                attributes={item.attributes}
                                handleCardClick={() => handleProductClick(item)}
                                handleQuickView={() => handleQuickViewOpen(item)}
                                handleWishListclick={() => handleWishList(item)}
                                type={item.type}
                                variation={item.variations}
                            />
                        ))
                    ) : (
                        Array.from({ length: 4 }).map((_, index) => (
                            <ProductCardShimmer />
                        ))
                    )}
                    {/* data && data.products.map((item, index) => (
                        <ProductCard
                            key={index}
                            slug={item.slug}
                            singleProductData={item}
                            maxWidthAccordingToComp="100%"
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
                            type={item.type}
                            variation={item.variations}
                        />
                    )) */}
                </div>
                
                <div className={`mobile-view-furniture-for-every-budget ${selectedGrid === 'single-col' ? 'single-col' : 'two-col'} `}>
                    {data ? (
                        data.products.map((item, index) => (
                            <ProductCard
                                key={index}
                                slug={item.slug}
                                singleProductData={item}
                                maxWidthAccordingToComp="100%"
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
                                priceTag={item.variationPayload?.regular_price ? item.variationPayload?.regular_price : item.regular_price}
                                sale_price={item.variationPayload?.sale_price ? item.variationPayload?.sale_price : item.regular_price}
                                financingAdd={item.financingAdd}
                                learnMore={item.learnMore}
                                mainIndex={index}
                                deliveryTime={item.deliveryTime}
                                stock={item.manage_stock}
                                attributes={item.attributes}
                                handleCardClick={() => handleProductClick(item)}
                                handleQuickView={() => handleQuickViewOpen(item)}
                                handleWishListclick={() => handleWishList(item)}
                                type={item.type}
                                variation={item.variations}
                            />
                        ))
                    ) : (
                        Array.from({ length: 4 }).map((_, index) => (
                            <ProductCardShimmer />
                        ))
                    )}
                    {/* data && data.products.map((item, index) => (
                        <ProductCard
                            key={index}
                            slug={item.slug}
                            singleProductData={item}
                            maxWidthAccordingToComp="100%"
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
                            type={item.type}
                            variation={item.variations}
                        />
                    )) */}
                </div>


                <div className={`quick-view-section ${quickViewClicked ? 'show-quick-view-section' : ''}`}>
                    <button className={`quick-view-close`} onClick={handleQuickViewClose}>
                        {/* <img src={closeBtn} alt='close' /> */}
                        <IoMdClose size={25} />
                    </button>
                    <div className={`quickview-containt ${quickViewClicked ? 'show-quick-view-containt' : ''}`}>
                        <QuickView
                            setQuickViewProduct={quickViewProduct}
                            quickViewClose={handleQuickViewClose}
                            stars={[
                                { icon: star, title: 'filled' },
                                { icon: star, title: 'filled' },
                                { icon: star, title: 'filled' },
                                { icon: star, title: 'filled' },
                                { icon: star, title: 'filled' },
                            ]}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}
