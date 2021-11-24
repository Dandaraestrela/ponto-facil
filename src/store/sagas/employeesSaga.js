import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { toast } from 'react-toastify';

import * as EmployeesTypes from '../types/employeesTypes';

export function* listEmployees({
  payload: { employeeslist, successCallback },
}) {
  try {
    const { data } = yield call(api.get, `?listaFuncionarios=true`);
    if (data) {
      console.log(data);
      yield put({ type: EmployeesTypes.LIST_EMPLOYEES_SUCCESS, payload: data });
      yield call(successCallback);
    }
  } catch (error) {}
}

export function* createEmployee({ payload: { newEmployee, successCallback } }) {
  console.log('response');
  try {
    const response = yield call(
      api.get,
      `?cadastrarUsuario=true&nome=teste1&email=email@teste&endereco=av&dataNascimento=12/11&cargaHoraria=8&flagUsuarioAdmin=1&horaEntrada=1&horaSaida=11&idUsuarioMovTo=1`,
    );
    console.log('response');
    if (response) {
      console.log(response);
      yield put({
        type: EmployeesTypes.CREATE_EMPLOYEE_SUCCESS,
        payload: newEmployee,
      });
      yield call(successCallback);
    }
  } catch (error) {}
}
