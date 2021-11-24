import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Funcionarios.styles';
import * as EmployeesType from 'store/types/employeesTypes';

import { Navbar } from 'components';

const Funcionarios = () => {
  const dispatch = useDispatch();

  const { employeesList } = useSelector(
    (state) => state.employees.employeesList,
  );

  const successCallback = () => {
    console.log('Sucesso');
  };

  useEffect(() => {
    dispatch({
      type: EmployeesType.LIST_EMPLOYEES,
      payload: { successCallback },
    });
  }, []);

  return (
    <S.Wrapper>
      <Navbar />
    </S.Wrapper>
  );
};

export default Funcionarios;
