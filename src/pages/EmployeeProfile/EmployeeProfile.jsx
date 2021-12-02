import * as S from './EmployeeProfile.styles';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser } from 'utils/userGetter';
import { useParams, useNavigate } from 'react-router-dom';

import { Navbar, TimeFieldsModal, EmployeesTable } from 'components';

import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ReturnIcon } from 'assets/icons/return.svg';

const EmployeeProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const employeeID = id;
  const { employeesList, employeeClocks, employeePunctuality } = useSelector(
    (state) => state.employees,
  );

  const [selectedUser, setSelectedUser] = useState({});
  const [timeFieldsModal, setTimeFieldsModal] = useState(false);

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_ADMIN_LOGIN,
      payload: { redirectCallback },
    });
    dispatch({
      type: EmployeesTypes.LIST_EMPLOYEES,
    });
    dispatch({
      type: EmployeesTypes.EMPLOYEE_CLOCK_LIST,
      payload: { employeeID },
    });
    dispatch({
      type: EmployeesTypes.EMPLOYEE_PUNCTUALITY,
      payload: { employeeId: id },
    });
  }, []);

  useEffect(() => {
    if (employeesList.length) {
      setSelectedUser(getSingleUser(id, employeesList));
    }
    dispatch({
      type: EmployeesTypes.EMPLOYEE_CLOCK_LIST,
      payload: { employeeID },
    });
  }, [employeesList]);

  return (
    <>
      <S.Wrapper>
        <Navbar />
        <S.ReturnWrapper onClick={() => navigate('/funcionarios')}>
          <ReturnIcon />
          <S.ReturnText>Voltar para a listagem</S.ReturnText>
        </S.ReturnWrapper>
        {Object.keys(selectedUser).length > 0 && (
          <S.ContentWrapper>
            <S.UserDataWrapper>
              <S.UserDataContainer>
                <S.TitleRow>
                  <S.Title>Dados Pessoais</S.Title>
                </S.TitleRow>
                <S.UserData>
                  <p>
                    <strong>Nome: </strong>
                    {selectedUser.nome}
                  </p>
                  <p>
                    <strong>Data de nascimento: </strong>
                    {selectedUser.dataNascimento}
                  </p>
                  <p>
                    <strong>Email: </strong>
                    {selectedUser.email}
                  </p>
                  <p>
                    <strong>Endereço: </strong>
                    {selectedUser.endereco}
                  </p>
                </S.UserData>
              </S.UserDataContainer>
              <S.DataDivider />
              <S.UserDataContainer>
                <S.TitleRow>
                  <S.Title>Informações de trabalho</S.Title>
                  <EditIcon
                    cursor="pointer"
                    onClick={() => setTimeFieldsModal(true)}
                  />
                </S.TitleRow>
                <S.UserData>
                  <p>
                    <strong>Carga horária: </strong>
                    {selectedUser.cargaHoraria} horas
                  </p>
                  <p>
                    <strong>Horário de início: </strong>
                    {selectedUser.horaEntrada.split(':').slice(0, 2).join(':')}
                  </p>
                  <p>
                    <strong>Horário final: </strong>
                    {selectedUser.horaSaida.split(':').slice(0, 2).join(':')}
                  </p>
                  <p>
                    <strong>Pontualidade geral: </strong>
                    {Math.round(employeePunctuality)}%
                  </p>
                </S.UserData>
              </S.UserDataContainer>
            </S.UserDataWrapper>
            <EmployeesTable data={employeeClocks} headers="ClockIn" />
          </S.ContentWrapper>
        )}
      </S.Wrapper>
      {timeFieldsModal && (
        <TimeFieldsModal
          onClose={() => setTimeFieldsModal(false)}
          userData={selectedUser}
        />
      )}
    </>
  );
};

export default EmployeeProfile;
