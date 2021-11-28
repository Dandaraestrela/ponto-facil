import PropTypes from 'prop-types';
import * as S from './EmployeesTable.styles';
import { Link } from 'react-router-dom';

import { ReactComponent as ViewIcon } from 'assets/icons/view.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

const TableHeaders = {
  nome: 'Nome',
  email: 'E-mail',
  horaEntrada: 'Hora entrada',
  horaSaida: 'Hora saída',
};

const EmployeesTable = ({ data, headers }) => {
  const headersKeys = Object.keys(headers);
  return (
    <S.Table>
      <thead>
        <S.TableRow>
          {Object.values(TableHeaders).map((header) => (
            <S.TableHeaders key={header}>{header}</S.TableHeaders>
          ))}
          <S.TableActionsLabel key="Ações">Ações</S.TableActionsLabel>
        </S.TableRow>
      </thead>
      <tbody>
        {data.map((dataGroup, index) => {
          return (
            <S.TableRow key={index}>
              {headersKeys.map((info) => (
                <S.TableContent key={info}>{dataGroup[info]}</S.TableContent>
              ))}
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
  headers: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default EmployeesTable;
