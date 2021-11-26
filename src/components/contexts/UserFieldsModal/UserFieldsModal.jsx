import * as S from './UserFieldsModal.styles';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Input, Button, Checkbox } from 'components';
import { ReactComponent as Close } from 'assets/icons/close.svg';

const UserFieldsModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    const newEmployee = values;

    dispatch({
      type: EmployeesTypes.CREATE_EMPLOYEE,
      payload: { newEmployee, onClose },
    });
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Cadastro de novo usuário</S.Title>
          <S.CloseItem onClick={onClose}>
            <Close />
          </S.CloseItem>
        </S.TitleRow>

        <S.InputRow>
          <Input label="Nome" col={8} {...register('nome')} />
          <Input label="E-mail" col={8} type="email" {...register('email')} />
        </S.InputRow>
        <S.InputRow>
          <Input label="Endereço" col={8} {...register('endereco')} />
          <Input
            label="Data de nascimento"
            col={8}
            type="date"
            {...register('dataNascimento')}
          />
        </S.InputRow>
        <S.InputRow>
          <S.Row col={8}>
            <Input
              label="Carga Horária"
              suffix="Horas"
              col={5}
              type="number"
              {...register('cargaHoraria')}
              style={{ textAlign: 'center' }}
            />
            <Checkbox
              suffix="Usuário admin"
              {...register('flagUsuarioAdmin')}
            />
          </S.Row>
          <S.Row col={8}>
            <Input
              label="Horário de entrada"
              suffix="Horas"
              col={6}
              type="time"
              {...register('horaEntrada')}
              style={{ textAlign: 'center' }}
            />
            <Input
              label="Horário de saída"
              suffix="Horas"
              col={6}
              type="time"
              {...register('horaSaida')}
              style={{ textAlign: 'center' }}
            />
          </S.Row>
        </S.InputRow>
        <S.Paragraph>
          *Todos os novos usuários tem como senha padrão: 851Sse
        </S.Paragraph>
        <S.ButtonsRow>
          <Button type="tertiary" col={4} onClick={onClose}>
            Cancelar
          </Button>
          <Button col={4} onClick={handleSubmit(onSubmit)}>
            Criar novo usuário
          </Button>
        </S.ButtonsRow>
      </S.Content>
    </S.Wrapper>
  );
};
export default UserFieldsModal;
