import React from 'react';
import ReactDOM from 'react-dom';
// main app
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import './bootstrap/dist/css/bootstrap.css';
import './bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
)