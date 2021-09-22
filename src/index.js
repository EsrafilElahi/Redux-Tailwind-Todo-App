import React from 'react';
import { render } from 'react-dom';
import './index.src.css'
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store/store'


render( <
    Provider store = { store } >
    <
    PersistGate persistor = { persistor }
    loading = { null } > <
    App / >
    <
    /PersistGate> < /
    Provider > ,
    document.getElementById('root')
)