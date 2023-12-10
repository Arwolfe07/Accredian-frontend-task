import { combineReducers } from 'redux';
import currentUserReducer from './currentUser';
import authReducer from './auth';
import messageReducer from './message';

export default combineReducers({ currentUserReducer, authReducer, messageReducer });

