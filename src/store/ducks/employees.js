import * as EmployeesTypes from '../types/employeesTypes';

/*id: 'string',
    nome: 'string',
    email: 'string',
    endereco: 'string',
    dataNascimento: 'string',
    flagAdmin: 'string',
    cargaHoraria: 'string',
    horaEntrada: 'string',
    horaSaida: 'string',
    status: 'string',
    idUsuarioMovTo: 'string',
    dataHoraMovTo: 'string',*/

const initialState = {
  employeesList: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EmployeesTypes.LIST_EMPLOYEES_SUCCESS:
      return { ...state, employeesList: action.payload };
    default:
      return state;
  }
};

export default employeesReducer;
