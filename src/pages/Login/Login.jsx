import * as S from './Login.styles';

import LogoLarge from 'assets/images/LogoLarge.svg';
import { Button, Input } from 'components';

const Login = () => {
  return (
    <S.StyledWrapper>
      <S.StyledContent>
        <img src={LogoLarge} width="30%" />
        <Input
          label="E-mail"
          col={5}
          placeholder="Digite aqui o seu e-mail"
          marginBottom={16}
          marginTop={48}
        />
        <Input
          label="Senha"
          col={5}
          placeholder="Digite aqui a sua senha"
          marginBottom={48}
        />
        <Button col={5} type="primary" onClick={() => {}}>
          Login
        </Button>
      </S.StyledContent>
      <S.StyledBG />
    </S.StyledWrapper>
  );
};

export default Login;
