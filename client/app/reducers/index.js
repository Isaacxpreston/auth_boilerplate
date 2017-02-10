import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {simpleReducer} from './simpleReducer'

const appReducer = combineReducers({
  simpleReducer,
  routing: routerReducer
})

const reducer = (state, action) => {
  return appReducer(state, action)
}

export default reducer;