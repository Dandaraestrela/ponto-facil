import { all, takeLatest } from 'redux-saga/effects';

import * as AuthSagas from 'store/sagas/authSaga';
import * as AuthTypes from 'store/types/authTypes';

function* SAGAS() {
  yield all([
    takeLatest(AuthTypes.LOGIN_USER_REQUEST_START, AuthSagas.loginUser),
    takeLatest(AuthTypes.LOGOUT_USER_REDIRECT, AuthSagas.logoutUser),
    takeLatest(AuthTypes.VALIDATE_USER_LOGIN, AuthSagas.validateLogin),
  ]);
}

export default SAGAS;
