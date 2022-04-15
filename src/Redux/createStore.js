import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer from './Rockets/Rockets';
import missionReducer from './Missions/Missions';

const rootReducer = combineReducers({ rocketsReducer, missionReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
