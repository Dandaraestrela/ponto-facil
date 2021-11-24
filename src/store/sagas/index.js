import { all, takeLatest } from 'redux-saga/effects';

import * as AuthSagas from 'store/sagas/authSaga';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesSagas from './employeesSaga';
import * as EmployeesTypes from '../types/employeesTypes';

function* SAGAS() {
  yield all([
    takeLatest(AuthTypes.LOGIN_USER_REQUEST_START, AuthSagas.loginUser),
    takeLatest(AuthTypes.LOGOUT_USER_REDIRECT, AuthSagas.logoutUser),
    takeLatest(AuthTypes.VALIDATE_USER_LOGIN, AuthSagas.validateLogin),
    takeLatest(EmployeesTypes.LIST_EMPLOYEES, EmployeesSagas.listEmployees),
    takeLatest(EmployeesTypes.CREATE_EMPLOYEE, EmployeesSagas.createEmployee),
  ]);
}

export default SAGAS;
