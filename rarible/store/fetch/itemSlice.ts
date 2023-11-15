// store/item/itemSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ItemMetadata from "../../types/itemMetadata";

interface ItemState {
    items: ItemMetadata[];
    loading: boolean;
    error: string | null;
}

const initialState: ItemState = {
    items: [],
    loading: false,
    error: null,
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        fetchItemsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchItemsSuccess(state, action: PayloadAction<[]>) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchItemsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure } = itemSlice.actions;

export default itemSlice.reducer;
