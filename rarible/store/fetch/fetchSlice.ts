import ItemMetadata from "../../types/itemMetadata";
import {createSlice} from "@reduxjs/toolkit";

let nullDataArr:ItemMetadata[] = []

const initialState = {
    data: {
        attributes: nullDataArr,
        id: '',
        image: '',
        name: '',
        uri: '',
    },
    loading: false,
    error: null,
};

const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        fetchItemsStart: (state) => {
            state.loading = true;
            state.data = nullDataArr; // 로딩 시작시 데이터 초기화
            state.error = null; // 로딩 시작시 에러 초기화
        },
        fetchItemsSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchItemsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure } = fetchSlice.actions;
export default fetchSlice.reducer;