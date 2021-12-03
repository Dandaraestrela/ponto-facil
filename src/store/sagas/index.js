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
    takeLatest(AuthTypes.VALIDATE_ADMIN_LOGIN, AuthSagas.validateAdmin),
    takeLatest(AuthTypes.CHANGE_USER_PASSWORD, AuthSagas.changeUserPassword),
    takeLatest(EmployeesTypes.LIST_EMPLOYEES, EmployeesSagas.listEmployees),
    takeLatest(EmployeesTypes.CREATE_EMPLOYEE, EmployeesSagas.createEmployee),
    takeLatest(EmployeesTypes.EDIT_EMPLOYEE, EmployeesSagas.editEmployee),
    takeLatest(EmployeesTypes.DELETE_EMPLOYEE, EmployeesSagas.deleteEmployee),
    takeLatest(EmployeesTypes.CLOCK_IN, EmployeesSagas.clockIn),
    takeLatest(EmployeesTypes.USER_ENTRIES_TODAY, EmployeesSagas.UserEntries),
    takeLatest(
      EmployeesTypes.EMPLOYEE_CLOCK_LIST,
      EmployeesSagas.listEmployeeClock,
    ),
    takeLatest(
      EmployeesTypes.EMPLOYEE_PUNCTUALITY,
      EmployeesSagas.employeePunctuality,
    ),
  ]);
}

export default SAGAS;
