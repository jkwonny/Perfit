import React from 'react';
import REACTDOM from 'react-dom';
import App from './App.jsx';
import style from './assets/stylesheet.css'

REACTDOM.render(
    <App />,
    document.getElementById('app')
)