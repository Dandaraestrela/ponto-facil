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
  employeeClocks: [],
  employeePunctuality: 0,
  userEntries: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EmployeesTypes.LIST_EMPLOYEES_SUCCESS:
      return { ...state, employeesList: action.payload };
    case EmployeesTypes.EMPLOYEE_CLOCK_LIST:
      return { ...state, employeeClocks: [] };
    case EmployeesTypes.EMPLOYEE_CLOCK_LIST_SUCCESS:
      return { ...state, employeeClocks: action.payload };
    case EmployeesTypes.EMPLOYEE_PUNCTUALITY:
      return { ...state, employeePunctuality: 0 };
    case EmployeesTypes.EMPLOYEE_PUNCTUALITY_SUCCESS:
      return { ...state, employeePunctuality: action.payload };
    case EmployeesTypes.USER_ENTRIES_TODAY_SUCCESS:
      return { ...state, userEntries: action.payload };
    default:
      return state;
  }
};

export default employeesReducer;
