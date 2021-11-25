import * as S from './Home.styles';
import * as AuthTypes from 'store/types/authTypes';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Navbar } from 'components';
import { Button, UserFieldsModal } from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nome, flagAdmin } = useSelector((state) => state.auth.user);

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

  return (
    <>
      <S.Wrapper>
        <Navbar />
        <p>Olá, {nome}!</p>
        <p>Você é um {flagAdmin ? 'administrador' : 'funcionário'}</p>
        <Button col={2} onClick={() => setCreateUserModal(true)}>
          + Novo Funcionário
        </Button>
      </S.Wrapper>
      {createUserModal && (
        <UserFieldsModal onClose={() => setCreateUserModal(false)} />
      )}
    </>
  );
};

export default Home;
