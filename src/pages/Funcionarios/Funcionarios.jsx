import * as S from './Funcionarios.styles';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Navbar, EmployeesTable, Button, UserFieldsModal } from 'components';

const Funcionarios = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createUserModal, setCreateUserModal] = useState(false);

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_USER_LOGIN,
      payload: { redirectCallback },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: EmployeesTypes.LIST_EMPLOYEES,
    });
  }, []);

  const { employeesList } = useSelector((state) => state.employees);

  return (
    <>
      <S.Wrapper>
        <Navbar />
        <S.ButtonRow>
          <Button col={2} onClick={() => setCreateUserModal(true)}>
            + Novo Funcionário
          </Button>
        </S.ButtonRow>
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
      {createUserModal && (
        <UserFieldsModal onClose={() => setCreateUserModal(false)} />
      )}
    </>
  );
};

export default Funcionarios;
