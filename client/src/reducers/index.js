import { combineReducers, createStore } from 'redux'
// import ReduxThunk from 'redux-thunk'
import counter from './counter'

const reducers = combineReducers({ counter })

const store = createStore(reducers) //, applyMiddleware(ReduxThunk))

export default store
