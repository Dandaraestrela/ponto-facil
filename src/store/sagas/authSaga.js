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

export function* changeUserPassword({ payload: { novaSenha } }) {
  const {
    user: { id },
  } = yield select((state) => state.auth);

  try {
    const { data: success } = yield call(
      api.get,
      `?alterarSenha=true&idUsuario=${parseInt(id)}&novaSenha=${novaSenha}`,
    );

    if (success) {
      toast.success('Senha alterada!');
    } else {
      toast.error('Erro ao alterar senha. Tente novamente');
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

export function* validateAdmin({ payload: { redirectCallback } }) {
  const {
    user: { flagAdmin },
  } = yield select((state) => state.auth);

  if (!parseInt(flagAdmin)) {
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
