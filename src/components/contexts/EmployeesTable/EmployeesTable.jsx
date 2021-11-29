import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './EmployeesTable.styles';

import {
  EmployeesHeaders,
  ClockInHeaders,
  UserEntries,
} from './EmployeesTable.utils';

import { ReactComponent as ViewIcon } from 'assets/icons/view.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

const EmployeesTable = ({ data, headers }) => {
  const tableHeaders =
    headers === 'Employees'
      ? EmployeesHeaders
      : headers === 'UserEntries'
      ? UserEntries
      : ClockInHeaders;

  return (
    <S.Table>
      <thead>
        <S.TableRow>
          {Object.values(tableHeaders).map((header) => (
            <S.TableHeaders key={header}>{header}</S.TableHeaders>
          ))}
          {headers === 'Employees' && (
            <S.TableHeaders key="Ações">Ações</S.TableHeaders>
          )}
        </S.TableRow>
      </thead>
      <tbody>
        {data.map((dataGroup, index) => {
          return (
            <S.TableRow key={index}>
              {Object.keys(tableHeaders).map((info) => (
                <S.TableContent key={info}>{dataGroup[info]}</S.TableContent>
              ))}
              {headers === 'Employees' && (
                <S.TableContent>
                  <S.ActionsRow>
                    <Link
                      style={{ height: '30px' }}
                      title="Ver perfil de funcionário"
                      to={`/funcionario/${dataGroup.id}`}
                    >
                      <ViewIcon cursor="pointer" />
                    </Link>
                    <DeleteIcon cursor="pointer" />
                  </S.ActionsRow>
                </S.TableContent>
              )}
            </S.TableRow>
          );
        })}
      </tbody>
    </S.Table>
  );
};

EmployeesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      nome: PropTypes.string,
      email: PropTypes.string,
      endereco: PropTypes.string,
      dataNascimento: PropTypes.string,
      flagAdmin: PropTypes.string,
      cargaHoraria: PropTypes.string,
      horaEntrada: PropTypes.string,
      horaSaida: PropTypes.string,
      status: PropTypes.string,
      idUsuarioMovTo: PropTypes.string,
      dataHoraMovTo: PropTypes.string,
    }).isRequired,
  ),
  headers: PropTypes.oneOf(['Employees', 'ClockIn', 'UserEntries']),
};

export default EmployeesTable;
