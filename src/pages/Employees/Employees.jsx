import * as S from './Employees.styles';
import * as AuthTypes from 'store/types/authTypes';
import * as EmployeesTypes from 'store/types/employeesTypes';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  Navbar,
  EmployeesTable,
  Button,
  CreateUserModal,
  DeleteUserModal,
} from 'components';

const Employees = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { id },
  } = useSelector((state) => state.auth);
  const { employeesList } = useSelector((state) => state.employees);

  const [selectedUser, setSelectedUser] = useState({});
  const [createUserModal, setCreateUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState([]);

  const handleDelete = (userData) => {
    setSelectedUser(userData);
    setDeleteUserModal(true);
  };

  const redirectCallback = () => {
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    setFilteredEmployeesList(
      employeesList.filter((employee) => employee.id !== id),
    );
  }, [employeesList]);

  useEffect(() => {
    dispatch({
      type: AuthTypes.VALIDATE_ADMIN_LOGIN,
      payload: { redirectCallback },
    });
    dispatch({
      type: AuthTypes.VALIDATE_USER_LOGIN,
      payload: { redirectCallback },
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: EmployeesTypes.LIST_EMPLOYEES,
    });
  }, []);

  return (
    <>
      <S.Wrapper>
        <Navbar />
        <S.ButtonRow>
          <Button col={3} onClick={() => setCreateUserModal(true)}>
            + Novo Funcionário
          </Button>
        </S.ButtonRow>
        <S.TableWrapper>
          <S.Title>Lista de funcionários ativos</S.Title>
          <EmployeesTable
            data={filteredEmployeesList}
            headers="Employees"
            handleDelete={handleDelete}
          />
        </S.TableWrapper>
      </S.Wrapper>
      {createUserModal && (
        <CreateUserModal onClose={() => setCreateUserModal(false)} />
      )}
      {deleteUserModal && (
        <DeleteUserModal
          onClose={() => setDeleteUserModal(false)}
          userData={selectedUser}
        />
      )}
    </>
  );
};

export default Employees;
