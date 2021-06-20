import React from 'react';
import { render } from 'react-dom';
import './index.src.css'
import App from './App';
import { Provider } from 'react-redux'
import { store } from './Redux/store/store'


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)