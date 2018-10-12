import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers';

const clients = createStore(allReducers);

ReactDOM.render(
    <Provider store={clients}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
