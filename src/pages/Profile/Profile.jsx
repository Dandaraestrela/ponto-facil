import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser } from 'utils/userGetter';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './Profile.styles';

import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesTypes from 'store/types/employeesTypes';

import {
  Navbar,
  Input,
  Button,
  PersonalFieldsModal,
  TimeFieldsModal,
} from 'components';

import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';

export const schema = yup
  .object({
    novaSenha: yup
      .string()
      .min(6, 'A senha não atende ao padrão exigido')
      .matches(/^.*[A-Z]+.*[0-9]+.*$/, 'A senha não atende ao padrão exigido.')
      .required('Preencha os dois campos.'),
    novaSenha2: yup
      .string()
      .min(6, 'A senha não atende ao padrão exigido.')
      .matches(/^.*[A-Z]+.*[0-9]+.*$/, 'A senha não atende ao padrão exigido.')
      .required('Preencha os dois campos.'),
  })
  .required('Preencha os dois campos.');

const Profile = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id, flagAdmin } = useSelector((state) => state.auth.user);
  const { employeesList, employeePunctuality } = useSelector(
    (state) => state.employees,
  );

  const [loggedUser, setLoggedUser] = useState({});
  const [personalFieldsModal, setPersonalFieldsModal] = useState(false);
  const [timeFieldsModal, setTimeFieldsModal] = useState(false);

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_USER_LOGIN,
      payload: { redirectCallback },
    });
    dispatch({
      type: EmployeesTypes.LIST_EMPLOYEES,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: EmployeesTypes.EMPLOYEE_PUNCTUALITY,
      payload: { employeeId: id },
    });
  }, [id]);

  useEffect(() => {
    if (employeesList.length) {
      setLoggedUser(getSingleUser(id, employeesList));
    }
  }, [employeesList]);

  const onSubmit = (values) => {
    const { novaSenha, novaSenha2 } = values;

    if (novaSenha === novaSenha2) {
      dispatch({
        type: AuthTypes.CHANGE_USER_PASSWORD,
        payload: { novaSenha },
      });
    } else {
      toast.error('As senhas inseridas não correspondem.');
    }
  };

  return (
    <>
      <S.Wrapper>
        <Navbar />
        {Object.keys(loggedUser).length > 0 && (
          <S.ContentWrapper>
            <S.UserDataWrapper>
              <S.UserDataContainer>
                <S.TitleRow>
                  <S.Title>Meus Dados Pessoais</S.Title>
                  <EditIcon
                    cursor="pointer"
                    onClick={() => setPersonalFieldsModal(true)}
                  />
                </S.TitleRow>
                <S.UserData>
                  <p>
                    <strong>Nome: </strong>
                    {loggedUser.nome}
                  </p>
                  <p>
                    <strong>Data de nascimento: </strong>
                    {loggedUser.dataNascimento}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {loggedUser.email}
                  </p>
                  <p>
                    <strong>Endereço: </strong>
                    {loggedUser.endereco}
                  </p>
                </S.UserData>
              </S.UserDataContainer>
              <S.DataDivider />
              <S.UserDataContainer>
                <S.TitleRow>
                  <S.Title>Informações de trabalho</S.Title>
                  {!!parseInt(flagAdmin) && (
                    <EditIcon
                      cursor="pointer"
                      onClick={() => setTimeFieldsModal(true)}
                    />
                  )}
                </S.TitleRow>
                <S.UserData>
                  <p>
                    <strong>Carga horária: </strong>
                    {loggedUser.cargaHoraria} horas
                  </p>
                  <p>
                    <strong>Horário de início: </strong>
                    {loggedUser.horaEntrada.split(':').slice(0, 2).join(':')}
                  </p>
                  <p>
                    <strong>Horário final: </strong>
                    {loggedUser.horaSaida.split(':').slice(0, 2).join(':')}
                  </p>
                  <p>
                    <strong>Pontualidade geral: </strong>
                    {Math.round(employeePunctuality)}%
                  </p>
                </S.UserData>
              </S.UserDataContainer>
            </S.UserDataWrapper>
            <S.Title>Alterar senha</S.Title>
            <p>
              A nova senha deve conter no mínimo 6 caracteres, entre esses
              caracteres um deles deve ser uma letra maíuscula e um número.
            </p>
            <S.InputRow>
              <Input
                label="Nova senha"
                type="password"
                col={4}
                {...register('novaSenha')}
                error={errors.novaSenha}
              />
              <Input
                label="Confirmação de nova senha"
                type="password"
                col={4}
                {...register('novaSenha2')}
                error={errors.novaSenha2}
              />
              <Button col={2} onClick={handleSubmit(onSubmit)}>
                Salvar senha
              </Button>
            </S.InputRow>
          </S.ContentWrapper>
        )}
      </S.Wrapper>
      {personalFieldsModal && (
        <PersonalFieldsModal
          onClose={() => setPersonalFieldsModal(false)}
          userData={loggedUser}
        />
      )}
      {timeFieldsModal && (
        <TimeFieldsModal
          onClose={() => setTimeFieldsModal(false)}
          userData={loggedUser}
        />
      )}
    </>
  );
};

export default Profile;
