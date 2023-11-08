
import {put, take, takeLatest} from "@redux-saga/core/effects";
import { toggleDarkMode } from "./themeSlice";

function* toggleDarkModeSaga () {
    yield put(toggleDarkMode());
}

export function* watchThemeSagas() {
    yield takeLatest('THEME/TOGGLE_DARK_MODE', toggleDarkModeSaga);
}