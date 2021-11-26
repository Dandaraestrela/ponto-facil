import * as S from './Home.styles';
import * as AuthTypes from 'store/types/authTypes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Navbar } from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nome, flagAdmin } = useSelector((state) => state.auth.user);

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
    <S.Wrapper>
      <Navbar />
      <p>Olá, {nome}!</p>
      <p>Você é um {flagAdmin ? 'administrador' : 'funcionário'}</p>
    </S.Wrapper>
  );
};

export default Home;
