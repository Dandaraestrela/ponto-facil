import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';

import * as EmployeesTypes from '../types/employeesTypes';

export function* listEmployees() {
  try {
    const { data } = yield call(api.get, `?listaFuncionarios=true`);
    if (data) {
      yield put({ type: EmployeesTypes.LIST_EMPLOYEES_SUCCESS, payload: data });
    }
  } catch (error) {}
}

export function* createEmployee({ payload: { newEmployee, onClose } }) {
  const {
    user: { loggedId },
  } = yield select((state) => state.auth);

  try {
    const response = yield call(
      api.get,
      `?cadastrarUsuario=true&nome=${newEmployee.nome}&email=${
        newEmployee.email
      }&endereco=${newEmployee.endereco}&dataNascimento=${
        newEmployee.dataNascimento
      }&cargaHoraria=${newEmployee.cargaHoraria}&flagUsuarioAdmin=${Number(
        newEmployee.flagUsuarioAdmin,
      )}&horaEntrada=${newEmployee.horaEntrada}&horaSaida=${
        newEmployee.horaSaida
      }&idUsuarioMovTo=${loggedId}`,
    );
    if (response.data == 1) {
      toast.success('Usuário criado!');
      yield put({
        type: EmployeesTypes.LIST_EMPLOYEES,
      });
      yield call(onClose);
    } else if (response.data == 0) {
      toast.error('Este e-mail já está cadastrado no sistema.');
    } else {
      toast.error('Ocorreu um erro, tente novamente.');
    }
  } catch (error) {}
}
