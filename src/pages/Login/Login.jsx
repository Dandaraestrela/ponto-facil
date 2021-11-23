import * as S from './Login.styles';
import * as AuthTypes from 'store/types/authTypes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import LogoLarge from 'assets/images/LogoLarge.svg';
import { Button, Input } from 'components';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const successCallback = () => {
    navigate('/', { replace: true });
  };

  const onSubmit = (values) => {
    const { email, senha } = values;

    dispatch({
      type: AuthTypes.LOGIN_USER_REQUEST_START,
      payload: { email, senha, successCallback },
    });
  };

  return (
    <S.StyledWrapper>
      <S.StyledContent>
        <img src={LogoLarge} width="30%" />
        <Input
          label="E-mail"
          col={6}
          placeholder="Digite aqui o seu e-mail"
          marginBottom={16}
          marginTop={48}
          {...register('email')}
        />
        <Input
          label="Senha"
          type="password"
          col={6}
          placeholder="Digite aqui a sua senha"
          marginBottom={48}
          {...register('senha')}
        />
        <Button col={6} type="primary" onClick={handleSubmit(onSubmit)}>
          Login
        </Button>
      </S.StyledContent>
      <S.StyledBG />
    </S.StyledWrapper>
  );
};

export default Login;
