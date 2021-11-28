import * as S from './TimeFieldsModal.styles';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Input, Button } from 'components';
import { ReactComponent as Close } from 'assets/icons/close.svg';

const TimeFieldsModal = ({ userData, onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    const { cargaHoraria, horaEntrada, horaSaida } = values;
    const editedData = { ...userData, cargaHoraria, horaEntrada, horaSaida };

    dispatch({
      type: EmployeesTypes.EDIT_EMPLOYEE,
      payload: { editedData, onClose },
    });
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Editar carga horária</S.Title>
          <S.CloseItem onClick={onClose}>
            <Close />
          </S.CloseItem>
        </S.TitleRow>
        <S.InputRow>
          <S.Row col={16}>
            <Input
              label="Carga Horária"
              suffix="Horas"
              col={4}
              type="number"
              defaultValue={userData.cargaHoraria}
              {...register('cargaHoraria')}
              style={{ textAlign: 'center' }}
            />
            <Input
              label="Horário de entrada"
              suffix="Horas"
              col={6}
              type="time"
              defaultValue={userData.horaEntrada}
              {...register('horaEntrada')}
              style={{ textAlign: 'center' }}
            />
            <Input
              label="Horário de saída"
              suffix="Horas"
              col={6}
              type="time"
              defaultValue={userData.horaSaida}
              {...register('horaSaida')}
              style={{ textAlign: 'center' }}
            />
          </S.Row>
        </S.InputRow>
        <S.ButtonsRow>
          <Button type="tertiary" col={6} onClick={onClose}>
            Cancelar
          </Button>
          <Button col={6} onClick={handleSubmit(onSubmit)}>
            Salvar alterações
          </Button>
        </S.ButtonsRow>
      </S.Content>
    </S.Wrapper>
  );
};
export default TimeFieldsModal;
