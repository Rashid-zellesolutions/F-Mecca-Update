import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../DiningRoomSlicer/DiningRoomSlicer';
import colorIndexReducer from '../ColorIndex/ColorINdexSlicer';
import productCardDataReducer from '../productCardData/productCardData';

const store = configureStore({
    reducer: {
        products: productReducer,
        colorIndex: colorIndexReducer,
        productCard: productCardDataReducer,
    },
});

export default store;