import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { ScrollToTop } from './utils/ScrollToTop';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>,
);
