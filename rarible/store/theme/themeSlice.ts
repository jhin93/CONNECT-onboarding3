
import {createSlice} from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false, // 초기 테마: 밝은 모드
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;