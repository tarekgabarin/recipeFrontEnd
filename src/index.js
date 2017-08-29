import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {HashRouter, Route} from 'react-router-dom';
//// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import promise from 'redux-promise';
import App from './components/app.js'



import reducers from './reducers';

import 'bootstrap/dist/css/bootstrap.css'

require('../style/style.scss');


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(

    <div>

        <Provider store={createStoreWithMiddleware(reducers)}>
            <HashRouter>

                <Route path="/" component={App}>

                </Route>

            </HashRouter>

        </Provider>

    </div>


    , document.querySelector('.container'));