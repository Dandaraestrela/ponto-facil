import { combineReducers } from 'redux';

import authReducer from './auth';
import employeesReducer from './employees';

const REDUCERS = combineReducers({
  auth: authReducer,
  employees: employeesReducer,
});

export default REDUCERS;
