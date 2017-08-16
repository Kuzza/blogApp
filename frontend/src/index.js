import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'
import blogApp from './reducers'

const loggerMiddleware = createLogger();

const store = createStore(
  blogApp,
  applyMiddleware(
    thunkMiddleware
  ));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)