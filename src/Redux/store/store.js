import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

import persistedReducer from './../reducers/index';

export const store = createStore(persistedReducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export const persistor = persistStore(store)

persistor.subscribe(() => console.log(persistor.getState()))