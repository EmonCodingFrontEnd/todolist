import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// ReduxThunk-3
// import thunk from 'redux-thunk';
// ReduxSaga-1
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// ReduxSaga-2
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    // ReduxThunk-4
    // applyMiddleware(thunk),
    // ReduxSaga-3
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer);
// ReduxSaga-4
sagaMiddleware.run(todoSagas);

export default store;