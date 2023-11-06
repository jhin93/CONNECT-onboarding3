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
    yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
