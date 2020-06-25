import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './rootReducer';
import rootSaga from '../sagas';

// TODO: break down reducers types for each reducer instead of all together

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
    const middlewares = [sagaMiddleware];

    const middleWareEnhancer = applyMiddleware(...middlewares);

    if (process.env.NODE_ENV === 'development') {
        return createStore(
            rootReducers,
            // TODO: find out if we should remove redux dev tools in production or not.
            composeWithDevTools(middleWareEnhancer)
        );
    }
    
    return createStore(rootReducers, middleWareEnhancer);
}

export default configureStore();

sagaMiddleware.run(rootSaga);