import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
// const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(promiseMiddleware),
    // other store enhancers if any
  ));
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
