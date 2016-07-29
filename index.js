import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import UsersApp from './components/UsersApp'
import reducers from './reducers/reducers'

const middleware = process.env.NODE_ENV === 'production' ?
    [thunk] :
    [thunk, logger()];

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

render(
    (<Provider store={store}>
            <UsersApp/>
        </Provider>
    )
    , document.getElementById('modul')
);


