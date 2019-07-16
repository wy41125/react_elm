import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import RouterConfig from './router/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>, 
    document.getElementById('root')
);


serviceWorker.unregister();
