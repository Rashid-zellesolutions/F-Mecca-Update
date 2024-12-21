import React, { useEffect, useState } from 'react'
import './AlsoNeed.css';
import imageOne from '../../../Assets/Furniture Mecca/product page/comment images/default_name 7.png';
import imageTwo from '../../../Assets/Furniture Mecca/product page/comment images/default_name 8.png';
import imageThree from '../../../Assets/Furniture Mecca/product page/comment images/default_name 9.png';
import filledStar from '../../../Assets/icons/Star 19.png';
import axios from 'axios';
import { url } from '../../../utils/api';

const AlsoNeed = ({productsUid}) => {
    // const mightNeedData = [
    //     {
    //         name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
    //             filledStar,filledStar,filledStar,filledStar, filledStar
    //         ], reviewCount: '(200)', img: imageOne 
    //     },
    //     {
    //         name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
    //             filledStar,filledStar,filledStar,filledStar, filledStar
    //         ], reviewCount: '(200)', img: imageTwo 
    //     },
    //     {
    //         name: "Lola Spa Blue 89'' Sofa, Chair & Storage Ottoman", colorAndCategory: 'White, Quen', price: '$59,99', filledStars: [
    //             filledStar,filledStar,filledStar,filledStar, filledStar
    //         ], reviewCount: '(200)', img: imageThree 
    //     }
    // ]
    console.log("also neewuid", productsUid)

    const filledStars = [filledStar, filledStar, filledStar, filledStar]

    const relatedProduct = productsUid.map((item) => item)
    // console.log("also needed products", relatedProduct)
    // console.log("transfered valued", relatedProduct)

    const [data, setData] = useState();
    const getFromApi = async () => {
        const api = `/api/v1/products/get/`
        try {
            const requests = relatedProduct.map(async (item) => {
                const response = await axios.get(`${url}${api}${item}`);
                return response.data.products; // You can modify this depending on what data you need from the response.
            });
            const alsoNeedProducts = await Promise.all(requests); // Wait for all requests to resolve
            const flattenedProducts = alsoNeedProducts.flat();
            return flattenedProducts;
        } catch (error) {
            console.error("error geting data", error)
        }
    }
    const fetchRelatedProducts = async () => {
        const products = await getFromApi();
        setData(products); // Update the state with the fetched products
    };

    useEffect(() => {
        fetchRelatedProducts();
    }, [])

    const maxLength = 25;
    const truncateTitle = (title, maxLength) => {
        if(!title) return '';
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    };
    const formatedPrice = (price) => {
        return Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }
  return (
    <div className={`might-need-main-container`}>
        <h3>You Might Also Need</h3>
        <div className='might-need-cards-main-container'>
            {data && data.map((item) => (
                <div key={item.uid} className='might-need-product-card'>
                    <img src={`${url}${item.image.image_url}`} alt='img' className='also-need-product-image' />
                    <div className='you-might-need-product-contant'>
                        <h3>{truncateTitle(item.name, maxLength)}</h3>
                        <p>White, Queen</p>
                        <div className='also-need-prices-div'>
                            {item.sale_price ? <del className='might-need-product-price'>{formatedPrice(item.regular_price)}</del> : <></>}
                            <p className='might-need-product-price'>{item.sale_price ? formatedPrice(item.sale_price) : formatedPrice(item.regular_price)}</p>
                        </div>
                        <span className='might-need-product-rating'>
                            {filledStars.map((star) => (
                                <img src={star} alt='star' />
                            ))}
                            <p>(200)</p>
                        </span>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default AlsoNeed
