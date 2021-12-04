import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './PersonalFieldsModal.styles';
import * as EmployeesTypes from 'store/types/employeesTypes';

import { Input, Button } from 'components';
import { ReactComponent as Close } from 'assets/icons/close.svg';

export const schema = yup
  .object({
    nome: yup.string().required('Campo obrigatório.'),
    email: yup.string().required('Campo obrigatório.'),
    endereco: yup.string().required('Campo obrigatório.'),
    dataNascimento: yup.string().required('Campo obrigatório.'),
  })
  .required();

const PersonalFieldsModal = ({ onClose, userData }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    const { nome, email, endereco, dataNascimento } = values;
    const editedData = { ...userData, nome, endereco, email, dataNascimento };

    dispatch({
      type: EmployeesTypes.EDIT_EMPLOYEE,
      payload: { editedData, onClose },
    });
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Edição de dados pessoais</S.Title>
          <S.CloseItem onClick={onClose}>
            <Close />
          </S.CloseItem>
        </S.TitleRow>

        <S.InputRow>
          <Input
            label="Nome"
            col={8}
            defaultValue={userData.nome}
            {...register('nome')}
            error={errors.nome}
          />
          <Input
            label="E-mail"
            col={8}
            type="email"
            defaultValue={userData.email}
            {...register('email')}
            error={errors.email}
          />
        </S.InputRow>
        <S.InputRow>
          <Input
            label="Endereço"
            defaultValue={userData.endereco}
            col={8}
            {...register('endereco')}
            error={errors.endereco}
          />
          <Input
            label="Data de nascimento"
            col={8}
            type="date"
            defaultValue={userData.dataNascimento
              .split('/')
              .reverse()
              .join('-')}
            {...register('dataNascimento')}
            error={errors.dataNascimento}
          />
        </S.InputRow>
        <S.ButtonsRow>
          <Button buttonType="tertiary" col={4} onClick={onClose}>
            Cancelar
          </Button>
          <Button col={4} onClick={handleSubmit(onSubmit)}>
            Salvar alterações
          </Button>
        </S.ButtonsRow>
      </S.Content>
    </S.Wrapper>
  );
};
export default PersonalFieldsModal;
