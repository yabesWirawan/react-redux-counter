import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import counter from './Modules/Counter/Reducers/Counter';

import './index.css';
import App from './Modules/Counter/Components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
