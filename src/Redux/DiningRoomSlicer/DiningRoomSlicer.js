import { createSlice } from "@reduxjs/toolkit";
import heartImg from '../../Assets/icons/like.png'
import muellerSofa from '../../Assets/images/Mueller-Sofa-and-Loveseat-01-300x200 1.png';
import dakotaSet from '../../Assets/Furniture Mecca/product archive page/product images/Dakota-Dining-Set-01-600x400 1.png';
import goldDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Dining-Room-Set-in-Gold-01-600x400 1.png';
import webImage from '../../Assets/Furniture Mecca/product archive page/product images/web-image-600x400 1.png';
import everDeen from '../../Assets/Furniture Mecca/product archive page/product images/everdeen-2-600x400 1.png';
import blackDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/4-3-1-600x400 1.png';
import whiteDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/web-image-4-600x400 1.png';
import brownDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/1-4-600x400 1.png';
import knightDaleSet from '../../Assets/Furniture Mecca/product archive page/product images/Knightdale-Dining-Room-Set-01-600x400 1.png'
import zoraDiningSet from '../../Assets/Furniture Mecca/product archive page/product images/Zora-600x400 1.png'
import sherryImage from '../../Assets/images/Sherry-Set-01-300x200 1.png';
import filledStar from '../../Assets/icons/Star 19.png';
import productTag from '../../Assets/images/product-tag.png';

const productsSlicer = createSlice({
    name: 'products',
    initialState: {
        data: [
            {id: 1, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90" Manual Reclining Sofa & 79" Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(200)', priceTag: '$1,198.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {productTag: productTag,  mainImage: zoraDiningSet, productTitle: `Laurel Beige 85'' Sofa & 65'' Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(100)', priceTag: '$999.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 2, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Avenger Black 89'' Power Reclining Sofa & 78'' Reclining Console Loveseat with USB`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(197)', priceTag: '$1,998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 3, heart: heartImg, mainImage: webImage, productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(218)', priceTag: '$998.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
                },
            {id: 4, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(150)', priceTag: '$4,598.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 5, heart: heartImg, mainImage: blackDiningSet, hoverImage: whiteDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 6, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
                {icon: filledStar, title: 'filled'},
            ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
            reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                {color: '#FF0000'},
                {color: '#B78953'},
            ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 7, heart: heartImg, mainImage: brownDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 8, heart: heartImg, mainImage: dakotaSet, hoverImage: goldDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 9, heart: heartImg, mainImage: goldDiningSet, hoverImage: dakotaSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 10, heart: heartImg, mainImage: everDeen, hoverImage: webImage , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 11, heart: heartImg, mainImage: whiteDiningSet, hoverImage: blackDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                        {icon: filledStar, title: 'filled'},
                    ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                    reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                        {color: '#FF0000'},
                        {color: '#B78953'},
                    ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 12, heart: heartImg, mainImage: zoraDiningSet, hoverImage: knightDaleSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
            {id: 13, heart: heartImg, mainImage: knightDaleSet, hoverImage: zoraDiningSet , productTitle: `Trevor Brown 90'' Manual Reclining Sofa & 79'' Console Loveseat`, ratingStars: [
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                    {icon: filledStar, title: 'filled'},
                ], lowPriceAddvertisement: 'Bobs Every day Low Prices',
                reviewCount: '(180)', priceTag: '$1,398.00', financingAdd: '12 most special financing', learnMore: 'Learn more', colorVariation: [
                    {color: '#FF0000'},
                    {color: '#B78953'},
                ], deliveryTime: 'Get it in 3 to 4 days'
            },
        ]
    },
    reducers: {
        setProductData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const {setProductData} = productsSlicer.actions;
export default productsSlicer.reducer;