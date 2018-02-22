import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/setupStore';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
console.log(history);

const jsx = (
    <Provider store={store}>
        <Router basename="/admin-area" history={history}>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
