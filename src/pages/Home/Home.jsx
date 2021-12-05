import * as S from './Home.styles';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  Navbar,
  EmployeesTable,
  ClocksTable,
  EmployeesPunctuality,
} from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user: { id, flagAdmin },
  } = useSelector((state) => state.auth);
  const { userEntries, employeeClocks } = useSelector(
    (state) => state.employees,
  );

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_USER_LOGIN,
      payload: { redirectCallback },
    });
    dispatch({ type: EmployeesTypes.USER_ENTRIES_TODAY });
  }, []);

  useEffect(() => {
    dispatch({
      type: EmployeesTypes.EMPLOYEE_CLOCK_LIST,
      payload: { employeeID: id },
    });
  }, [id]);

  return (
    <S.Wrapper>
      <Navbar />
      <S.ContentWrapper>
        {!!parseInt(flagAdmin) && (
          <S.ContentRow>
            <S.ContentPanel col={10}>
              <S.Title>Lista de funcionários que deram entrada hoje</S.Title>
              {userEntries.length ? (
                <EmployeesTable headers="UserEntries" data={userEntries} />
              ) : (
                <p>Nenhum funcionário deu entrada hoje</p>
              )}
            </S.ContentPanel>
            <S.ContentPanel col={6}>
              <S.Title>Pontualidade de funcionários</S.Title>
              <EmployeesPunctuality />
            </S.ContentPanel>
          </S.ContentRow>
        )}
        <S.ClocksWrapper>
          <S.ContentPanel col={16}>
            <S.Title>Resumo de ponto</S.Title>
            <ClocksTable data={employeeClocks} />
          </S.ContentPanel>
        </S.ClocksWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;
