import * as S from './Login.styles';
import { useDispatch } from 'react-redux';
import * as AuthTypes from 'store/types/authTypes';

import LogoLarge from 'assets/images/LogoLarge.svg';
import { Button, Input } from 'components';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { nome, senha } = { nome: 'admin@pf.com.br', senha: 'admin' }; // = values

    dispatch({
      type: AuthTypes.LOGIN_USER_REQUEST_START,
      payload: { nome, senha },
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
        />
        <Input
          label="Senha"
          type="password"
          col={6}
          placeholder="Digite aqui a sua senha"
          marginBottom={48}
        />
        <Button col={6} type="primary" onClick={handleSubmit}>
          Login
        </Button>
      </S.StyledContent>
      <S.StyledBG />
    </S.StyledWrapper>
  );
};

export default Login;
