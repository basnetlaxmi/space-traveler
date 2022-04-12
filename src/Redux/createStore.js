import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './Rockets/Rockets';

const rootReducer = combineReducers({ rocketsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
