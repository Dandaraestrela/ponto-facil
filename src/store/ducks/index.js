import { combineReducers } from 'redux';

import authReducer from './auth';

const REDUCERS = combineReducers({
  auth: authReducer,
});

export default REDUCERS;
