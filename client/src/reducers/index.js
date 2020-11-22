import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import counter from './counter'
import wiki from './wiki'

const reducers = combineReducers({ counter, wiki })

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default store
