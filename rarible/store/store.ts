// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counterReducer from './counterSlice';

// RootState 타입 정의
export type RootState = ReturnType<typeof rootReducer>;

// Saga
function* rootSaga() {
    // yield : 제어를 호출자에게 반환하고 함수의 상태를 일시 중지하는 데 사용. 주로 비동기 작업을 수행하고 그 결과를 기다리는 데 사용
    // all : 여러 Saga 이펙트를 배열로 전달하면 all은 이들을 동시에 시작하고 모든 작업이 완료될 때까지 기다립니다. 즉, 병렬 실행을 지원합니다.
    yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
