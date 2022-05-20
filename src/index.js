import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);