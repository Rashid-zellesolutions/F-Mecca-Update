import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorIndex: 0
}

const colorIndexSlice = createSlice({
    name: 'colorIndex',
    initialState,
    reducers: {
        setColorIndex: (state, action) => {
            state.colorIndex = action.payload;
        }
    }
})

export const {setColorIndex} = colorIndexSlice.actions;
export default colorIndexSlice.reducer;