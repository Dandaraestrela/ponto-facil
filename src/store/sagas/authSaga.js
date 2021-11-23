import { call, put } from 'redux-saga/effects';
import api from 'services/api';
import history from 'utils/history';

import * as AuthTypes from '../types/authTypes';

export function* loginUser({ payload: { nome, senha } }) {
  try {
    const { data } = yield call(api.post, '', { login: true, nome, senha });

    localStorage.setItem('nome', data.nome);

    console.log(data);

    yield put({
      type: AuthTypes.LOGIN_USER_REQUEST_SUCCESS,
      payload: data,
    });

    yield call(history.push, '/');
  } catch (error) {
    console.error(error);
  }
}

export function* logoutUser() {
  yield call(history.push, '/login');
  localStorage.clear();

  yield put({
    type: AuthTypes.LOGOUT_USER_SUCCESS,
  });
}
