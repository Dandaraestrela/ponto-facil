import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './Funcionarios.styles';
import * as EmployeesType from 'store/types/employeesTypes';

import { Navbar, EmployeesTable } from 'components';

const Funcionarios = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: EmployeesType.LIST_EMPLOYEES,
      payload: { successCallback },
    });
  }, []);

  const { employeesList } = useSelector((state) => state.employees);

  const successCallback = () => {
    console.log('Sucesso');
  };

  return (
    <S.Wrapper>
      <Navbar />
      <S.TableWrapper>
        <S.Title>Lista de funcionários ativos</S.Title>
        <EmployeesTable
          data={employeesList}
          headers={{
            nome: 'Nome',
            email: 'E-mail',
            horaEntrada: 'Hora entrada',
            horaSaida: 'Hora saída',
          }}
        />
      </S.TableWrapper>
    </S.Wrapper>
  );
};

export default Funcionarios;
