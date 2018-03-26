import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/setupStore';

const jsx = (
    <Provider store={store}>
        <BrowserRouter basename="/admin-area">
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
