// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counterReducer from './counterSlice';

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
