
import {put, takeLatest} from "@redux-saga/core/effects";
import { toggleDarkMode } from "./themeSlice";

// Saga의 시작 지점
function* toggleDarkModeSaga () {
    yield put(toggleDarkMode()); // 'toggleDarkMode' 액션을 디스패치하여 다크 모드를 토글
}

// 'toggleDarkModeSaga' 함수를 호출하는 사가 워쳐
export function* watchThemeSagas() {
    // THEME/TOGGLE_DARK_MODE' 액션을 감시하고, 해당 액션이 발생하면 `toggleDarkModeSaga` 함수를 호출
    yield toggleDarkModeSaga;
}