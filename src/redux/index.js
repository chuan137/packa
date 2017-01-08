import { createStore, combineReducers } from 'redux';
import authReducer from './auth';

let rootReducer = combineReducers({
  authReducer
});

// redux-observerable
//import {createEppicMiddleware} from 'redux-observable';
//let epicMiddleware = createEppicMiddleware();
// applyMiddleware(epicMiddleware)

const store = createStore(
  rootReducer
);

export default store;