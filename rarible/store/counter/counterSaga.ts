
import {put, takeEvery} from "@redux-saga/core/effects";
import { increment, decrement, resetCount } from "./counterSlice";

// Saga의 시작 지점
function* handleIncrement () {
    yield put(increment());
}

function* handleDecrement() {
    yield put(decrement());
}

function* handleReset() {
    yield put(resetCount());
}

// 'counterSaga' 함수를 호출하는 사가 워쳐
export function* watchCounterSagas() {
    yield takeEvery('COUNTER/INCREMENT', handleIncrement)
    yield takeEvery('COUNTER/DECREMENT', handleDecrement)
    yield takeEvery('COUNTER/RESET', handleReset)
}