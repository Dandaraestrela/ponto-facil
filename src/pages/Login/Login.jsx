import * as S from './Login.styles';

import LogoLarge from 'assets/images/LogoLarge.svg';
import { Button } from 'components';

const Login = () => {
  return (
    <S.StyledWrapper>
      <S.StyledContent>
        <img src={LogoLarge} width="40%" />
        <Button col={6} type="primary" onClick={() => {}}>
          Login
        </Button>
      </S.StyledContent>
      <S.StyledBG />
    </S.StyledWrapper>
  );
};

export default Login;
