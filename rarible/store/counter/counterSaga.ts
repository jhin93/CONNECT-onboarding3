
import { put } from "@redux-saga/core/effects";
import { increment, decrement, resetCount } from "./counterSlice";

// Saga의 시작 지점
function* counterSaga () {
    yield put(increment());
    yield put(decrement());
    yield put(resetCount());
}

// 'toggleDarkModeSaga' 함수를 호출하는 사가 워쳐
export function* watchCounterSagas() {
    yield counterSaga;
}