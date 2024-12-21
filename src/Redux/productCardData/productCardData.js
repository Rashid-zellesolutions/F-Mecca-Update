import { createSlice } from "@reduxjs/toolkit";
import heartIcon from '../../Assets/icons/like.png';
import productImageOne from '../../Assets/Furniture Mecca/Landing Page/best seller products/Monaco-5-PC-Modular-Sectional-01-600x400 1.png';
import productImageTwo from '../../Assets/Furniture Mecca/Landing Page/best seller products/images-3-2-2 1.png';
import productImageThree from '../../Assets/Furniture Mecca/Landing Page/best seller products/Morgan-7pc-Modular-Sectional-web-image-2-600x400 1.png';
import productImageFour from '../../Assets/Furniture Mecca/Landing Page/best seller products/New-Jersey-images-1-600x400 1.png';
import productImageFive from '../../Assets/Furniture Mecca/Landing Page/best seller products/sectional-1-600x400 1.png';
import productImageSix from '../../Assets/Furniture Mecca/Landing Page/best seller products/Sherry-Set-01-300x200 1.png';
import starIcon from '../../Assets/icons/Star 19.png';
import { IoStar } from "react-icons/io5";
// import heartIcon from '../../Assets/icons/like.png'

const productCardSlicer = createSlice({
    name : 'productCard',
    initialState: {
        data: [
            {id: 1, productTitle: "Stevie Charcoal", defaultPrice: '$ 188.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageOne, ratingStars: Array(5).fill({starIcon: IoStar }), reviews: '(200)', category: 'living-room' },
            {id: 2, productTitle: "Stevie Charcoal 87'' Sofa & Chair 2 sdfsdf sdfsdffd", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageTwo, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'living-room'  },
            {id: 3, productTitle: "Stevie Charcoal 87'' Sofa & Chair 3", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageThree, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'living-room'  },
            {id: 4, productTitle: "Stevie Charcoal 87'' Sofa & Chair 4", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFour, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'living-room'  },
            {id: 5, productTitle: "Stevie Charcoal 87'' Sofa & Chair 5", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFive, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'living-room'  },
            {id: 6, productTitle: "Stevie Charcoal 87'' Sofa & Chair 6", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageSix, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'living-room'  },
            {id: 7, productTitle: "Stevie Charcoal 88'' Sofa & Chair 7", defaultPrice: '$ 188.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageOne, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 8, productTitle: "Stevie Charcoal 87'' Sofa & Chair 8", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageTwo, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 9, productTitle: "Stevie Charcoal 87'' Sofa & Chair 9", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageThree, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 10, productTitle: "Stevie Charcoal 87'' Sofa & Chair 10", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFour, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 11, productTitle: "Stevie Charcoal 87'' Sofa & Chair 11", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFive, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 12, productTitle: "Stevie Charcoal 87'' Sofa & Chair 12", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageSix, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'bedroom'  },
            {id: 13, productTitle: "Stevie Charcoal 89'' Sofa & Chair 13", defaultPrice: '$ 188.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageOne, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
            {id: 14, productTitle: "Stevie Charcoal 87'' Sofa & Chair 14", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageTwo, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
            {id: 15, productTitle: "Stevie Charcoal 87'' Sofa & Chair15", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageThree, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
            {id: 16, productTitle: "Stevie Charcoal 87'' Sofa & Chair 16", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFour, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
            {id: 17, productTitle: "Stevie Charcoal 87'' Sofa & Chair 17", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageFive, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
            {id: 18, productTitle: "Stevie Charcoal 87'' Sofa & Chair 18", defaultPrice: '$ 199.00', priceTag: '$ 1,599.00', heartIcon: heartIcon, mainImage: productImageSix, ratingStars: Array(5).fill({starIcon: IoStar}), reviews: '(200)', category: 'dining-room'  },
        ]
    },
    reducers: {
        setProductCardData: (state, action) => {
            state.data = action.payload;
        },
    },
})

export const {setProductCardData} = productCardSlicer.actions;
export default productCardSlicer.reducer;