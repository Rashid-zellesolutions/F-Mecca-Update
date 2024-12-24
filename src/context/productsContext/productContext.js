import { createContext, useState, useContext, useEffect } from "react";

import heartImg from '../../Assets/icons/like.png'
import dakotaSet from '../../Assets/Furniture Mecca/product archive page/product images/Dakota-Dining-Set-01-600x400 1.png';
import goldDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Dining-Room-Set-in-Gold-01-600x400 1.png';
import webImage from '../../Assets/Furniture Mecca/product archive page/product images/web-image-600x400 1.png';
import everDeen from '../../Assets/Furniture Mecca/product archive page/product images/everdeen-2-600x400 1.png';
import blackDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/4-3-1-600x400 1.png';
import whiteDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/web-image-4-600x400 1.png';
import brownDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/1-4-600x400 1.png';
import knightDaleSet from '../../Assets/Furniture Mecca/product archive page/product images/Knightdale-Dining-Room-Set-01-600x400 1.png'
import zoraDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Zora-600x400 1.png'

import star from '../../Assets/icons/blue-star.png'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {id: 1, slug: `trevor-brown-90-manual-reclining-sofa-&-79-console-loveseat-1`, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90" Manual Reclining Sofa & 79" Console Loveseat 01`, ratingStars: [
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
        ], productAllImages: [
            dakotaSet, dakotaSet, dakotaSet, dakotaSet, dakotaSet
        ], lowPriceAddvertisement: 'FM Every day Low Prices', color: 'Black', productItems: '2 PC Sofa & Loveseat',
        reviewCount: '200', priceTag: 1198, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: 'brown', hexa: '#FF0000'},
            {color: 'black', hexa: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 2, slug: `avenger-black-89''-power-reclining-sofa-&-78''-reclining-console-loveseat-with-usb-2`, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Avenger Black 89'' Power Reclining Sofa & 78'' Reclining Console Loveseat with USB 02`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                goldDiningSet, goldDiningSet, goldDiningSet, goldDiningSet, goldDiningSet
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', color: 'Black', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '197', priceTag: 1998, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
                {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'Out Of Stock'
        },
        {id: 3, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-03`, heart: heartImg, mainImage: webImage, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 03`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], productAllImages: [
                    webImage, webImage, webImage, webImage, webImage
                ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
                reviewCount: '218', priceTag: 998, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: 'brown', hexa: '#FF0000'},
                    {color: 'black', hexa: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 4, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-04`, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 4`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], productAllImages: [
                    everDeen, everDeen, everDeen,everDeen, everDeen
                ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
                reviewCount: '150', priceTag: 4598, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: 'brown', hexa: '#FF0000'},
                    {color: 'black', hexa: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 5, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-05`, heart: heartImg, mainImage: blackDiningSet, hoverImage: whiteDiningSet , productTitle: `Trever Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 5`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], productAllImages: [
                    blackDiningSet, blackDiningSet, blackDiningSet, blackDiningSet, blackDiningSet
                ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
                reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: 'brown', hexa: '#FF0000'},
                    {color: 'black', hexa: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 6, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-06`, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 6`, ratingStars: [
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
            {icon: star, title: 'filled'},
        ], productAllImages: [
            whiteDiningSet, whiteDiningSet, whiteDiningSet, whiteDiningSet, whiteDiningSet
        ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
        reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
            {color: 'brown', hexa: '#FF0000'},
            {color: 'black', hexa: '#B78953'},
        ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 7, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-07`, heart: heartImg, mainImage: brownDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 7`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], productAllImages: [
                    brownDiningSet, brownDiningSet, brownDiningSet, brownDiningSet, brownDiningSet 
                ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
                reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: 'brown', hexa: '#FF0000'},
                    {color: 'black', hexa: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 8, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-08`, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 8`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                dakotaSet, dakotaSet, dakotaSet, dakotaSet, dakotaSet 
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
                {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 9, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-09`, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 9`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                goldDiningSet, goldDiningSet, goldDiningSet, goldDiningSet, goldDiningSet 
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
                {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 10, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-10`, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 10`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                everDeen, everDeen, everDeen, everDeen, everDeen
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
            {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 11, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-11`, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 11`, ratingStars: [
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                    {icon: star, title: 'filled'},
                ], productAllImages: [
                    whiteDiningSet, whiteDiningSet, whiteDiningSet, whiteDiningSet, whiteDiningSet
                ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
                reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: 'brown', hexa: '#FF0000'},
                    {color: 'black', hexa: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 12, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-12`, heart: heartImg, mainImage: zoraDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 12`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                zoraDiningSet, zoraDiningSet, zoraDiningSet, zoraDiningSet, zoraDiningSet 
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
                {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
        {id: 13, slug: `trevor-brown 90''-manual-reclining-sofa-&-79''-console-loveseat-13`, heart: heartImg, mainImage: knightDaleSet, hoverImage: zoraDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat 13`, ratingStars: [
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
                {icon: star, title: 'filled'},
            ], productAllImages: [
                knightDaleSet, knightDaleSet, knightDaleSet, knightDaleSet, knightDaleSet 
            ],  lowPriceAddvertisement: 'FM Every day Low Prices', productItems: '2 PC Sofa & Loveseat',
            reviewCount: '180', priceTag: 1398, totalPrice: 0 , financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: 'brown', hexa: '#FF0000'},
                {color: 'black', hexa: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days', stock: 'In Stock'
        },
    ]);

    const [allProducts, setAllProducts] = useState([]);

    return (
        <ProductContext.Provider value={{ products, allProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext);