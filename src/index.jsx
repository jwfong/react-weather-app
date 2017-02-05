// import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import weatherReducers from './reducers/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

let loggerMiddleware = createLogger();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(weatherReducers, composeEnhancers(
  applyMiddleware(thunk, loggerMiddleware)
))

const mountingPoint = document.createElement('div');
mountingPoint.className = 'app';
document.body.appendChild(mountingPoint);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  mountingPoint
);

