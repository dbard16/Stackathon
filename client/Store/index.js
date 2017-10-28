import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMidleware from 'redux-logger';
import currentLevel from './currentLevel'

const reducer = combineReducers({
  currentLevel
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMidleware));

export default store

export * from './currentLevel';
//export * from component from everything
