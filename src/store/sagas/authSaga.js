import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';

import * as AuthTypes from '../types/authTypes';

export function* loginUser({ payload: { email, senha, successCallback } }) {
  try {
    const { data } = yield call(
      api.get,
      `?login=true&email=${email}&senha=${senha}`,
    );

    if (data) {
      localStorage.setItem('user_id', data.id);
      localStorage.setItem('nome', data.nome);
      localStorage.setItem('email', data.email);
      localStorage.setItem('flag_admin', data.flagAdmin);

      yield put({
        type: AuthTypes.LOGIN_USER_REQUEST_SUCCESS,
        payload: data,
      });

      yield call(successCallback);
    } else {
      toast.error('Usuário não cadastrado ou credenciais incorretas.');
    }
  } catch (error) {
    console.error(error);
  }
}

export function* validateLogin({ payload: { redirectCallback } }) {
  const {
    user: { email },
  } = yield select((state) => state.auth);

  if (!email) {
    yield call(redirectCallback);
    return;
  }
}

export function* logoutUser({ payload: { logoutRedirect } }) {
  yield call(logoutRedirect);
  localStorage.clear();

  yield put({
    type: AuthTypes.LOGOUT_USER_SUCCESS,
  });
}
