import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const MainApp = () => <Routes />;

const appDiv = document.getElementById('main-app');
ReactDOM.render(<MainApp />, appDiv);
