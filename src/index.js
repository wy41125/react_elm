import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import RouterConfig from './router/index';

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>, 
    document.getElementById('root')
);
