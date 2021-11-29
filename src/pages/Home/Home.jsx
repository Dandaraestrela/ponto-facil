import * as S from './Home.styles';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesType from 'store/types/employeesTypes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Navbar, EmployeesTable } from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userEntries } = useSelector((state) => state.employees);

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_USER_LOGIN,
      payload: { redirectCallback },
    });
    dispatch({ type: EmployeesType.USER_ENTRIES_TODAY });
  }, []);

  return (
    <S.Wrapper>
      <Navbar />
      <S.TableWrapper>
        <S.Title>Lista de funcionários que deram entrada hoje</S.Title>
        {userEntries.length ? (
          <EmployeesTable headers="UserEntries" data={userEntries} />
        ) : (
          <p>Nenhum funcionário deu entrada hoje</p>
        )}
      </S.TableWrapper>
    </S.Wrapper>
  );
};

export default Home;
