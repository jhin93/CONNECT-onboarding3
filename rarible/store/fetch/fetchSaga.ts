// fetchSaga.ts
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure } from './fetchSlice'; // fetchSlice 파일의 실제 경로

// API 호출 함수
const fetchData = async () => {
    try {
        const response = await axios.get('your_api_endpoint'); // 실제 API 엔드포인트로 대체
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 사가 워쳐 함수
function* fetchItemsSaga() {
    try {
        // 'fetchItemsStart' 액션 디스패치하여 로딩 상태를 설정
        yield put(fetchItemsStart());

        // API 호출
        const data = yield call(fetchData);

        // 'fetchItemsSuccess' 액션 디스패치하여 데이터 저장
        yield put(fetchItemsSuccess(data));
    } catch (error) {
        // 'fetchItemsFailure' 액션 디스패치하여 에러 저장
        yield put(fetchItemsFailure(error.message));
    }
}

// 'fetchItemsStart' 액션을 감시하고 'fetchItemsSaga' 함수를 호출하는 사가 워쳐
export function* watchFetchItems() {
    yield takeLatest(fetchItemsStart.type, fetchItemsSaga);
}
