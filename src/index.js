import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Loadable from 'react-loadable';

import './index.css';
import App from './App';


window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
            document.getElementById('root')
        );
    });
};