// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        resetCount: (state) => state = 0
    },
});


export const { increment, decrement, resetCount } = counterSlice.actions;
export default counterSlice.reducer;
