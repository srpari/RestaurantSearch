import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

const store=configureStore();

const jsx=(
   <Provider store={store} >
        <AppRouter/>
   </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
