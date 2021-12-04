import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './Login.styles';
import * as AuthTypes from 'store/types/authTypes';

import LogoLarge from 'assets/images/LogoLarge.svg';
import { Button, Input } from 'components';

export const schema = yup
  .object({
    email: yup.string().required('Digite um email válido.'),
    senha: yup.string().required('Digite sua senha.'),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
        <S.StyledForm>
          <Input
            label="E-mail"
            col={6}
            placeholder="Digite aqui o seu e-mail"
            marginBottom={16}
            marginTop={48}
            {...register('email')}
            error={errors.email}
          />
          <Input
            label="Senha"
            type="password"
            col={6}
            placeholder="Digite aqui a sua senha"
            marginBottom={48}
            {...register('senha')}
            error={errors.senha}
          />
          <Button
            col={6}
            buttonType="primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </S.StyledForm>
      </S.StyledContent>
      <S.StyledBG />
    </S.StyledWrapper>
  );
};

export default Login;
