// store/item/itemSaga.ts
import { put, takeLatest, call } from 'redux-saga/effects';
import getItems from '../../feature/getItem'; // 변경된 import 경로
import { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure } from './itemSlice';

function* fetchItemsSaga() {
    try {
        yield put(fetchItemsStart());
        // @ts-ignore
        const items = yield call(getItems);
        yield put(fetchItemsSuccess(items));
    } catch (error) {
        // @ts-ignore
        yield put(fetchItemsFailure(error.message));
    }
}

export function* watchItemSagas() {
    yield takeLatest('ITEM/FETCH_ITEMS_ASYNC', fetchItemsSaga);
}
