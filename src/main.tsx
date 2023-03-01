import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/index';
import { Provider } from 'react-redux';

import { ScrollToTop } from './utils/ScrollToTop';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>,
);
