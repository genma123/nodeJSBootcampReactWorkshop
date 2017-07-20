import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/tasks.js';
import rootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}