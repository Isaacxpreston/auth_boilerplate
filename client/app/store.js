import {createStore, applyMiddleware, compose} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './reducers/index.js'
import {Promise} from 'bluebird'

const enhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension? window.devToolsExtension() : f => f
)

// Store Creation
const store = createStore(reducer, enhancers);

//Hot reload Redux reducers
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = syncHistoryWithStore(browserHistory, store)

export default store;






