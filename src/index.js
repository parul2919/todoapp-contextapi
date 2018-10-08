import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import './index.css';
import App from './App';


window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            <App/>,
            document.getElementById('root')
        );
    });
};