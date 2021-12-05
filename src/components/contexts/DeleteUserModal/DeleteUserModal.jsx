import * as S from './DeleteUserModal.styles';
import * as employeesTypes from 'store/types/employeesTypes';
import { useDispatch } from 'react-redux';

import { Button } from 'components';

import { ReactComponent as Close } from 'assets/icons/close.svg';

const DeleteUserModal = ({ userData, onClose }) => {
  const dispatch = useDispatch();

  const dispatchDelete = () => {
    dispatch({
      type: employeesTypes.DELETE_EMPLOYEE,
      payload: { employeeId: userData.id, onClose },
    });
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Excluir usuário</S.Title>
          <S.CloseItem onClick={onClose}>
            <Close />
          </S.CloseItem>
        </S.TitleRow>
        <S.Paragraph>
          Tem certeza que deseja excluir o usuário{' '}
          <strong>{userData.nome.split(' ').slice(0, 2).join(' ')}</strong>?{' '}
          <u>Esta ação não poderá ser desfeita.</u>
        </S.Paragraph>
        <S.ButtonsRow>
          <Button buttonType="tertiary" col={8} onClick={onClose}>
            Cancelar
          </Button>
          <Button col={8} onClick={dispatchDelete}>
            Excluir
          </Button>
        </S.ButtonsRow>
      </S.Content>
    </S.Wrapper>
  );
};
export default DeleteUserModal;
