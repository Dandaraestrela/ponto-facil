import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './ClocksTable.styles';

import { ClockInHeaders } from './ClocksTable.utils';
import { Button } from 'components';
import { ReactComponent as ImageIcon } from 'assets/icons/image.svg';
import ImageModal from '../ImageModal/ImageModal';

const ClocksTable = ({ data }) => {
  const tableHeaders = ClockInHeaders;
  console.log(data);
  const [imageModal, setImageModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const photoAction = (info, dataGroup) => {
    switch (info) {
      case 'entrada1':
        return (
          <S.TableContent key={info}>
            <S.ActionsRow>
              {dataGroup[info]}
              {dataGroup[info] !== '-' && (
                <Button
                  type="tertiary"
                  col={3}
                  onClick={() => {
                    setSelectedImg(dataGroup['imagens']['entrada1']);
                    setImageModal(true);
                  }}
                >
                  <ImageIcon />
                </Button>
              )}
            </S.ActionsRow>
          </S.TableContent>
        );
      case 'saida1':
        return (
          <S.TableContent key={info}>
            <S.ActionsRow>
              {dataGroup[info]}
              {dataGroup[info] !== '-' && (
                <Button
                  type="tertiary"
                  col={3}
                  onClick={() => {
                    setSelectedImg(dataGroup['imagens']['saida1']);
                    setImageModal(true);
                  }}
                >
                  <ImageIcon />
                </Button>
              )}
            </S.ActionsRow>
          </S.TableContent>
        );
      case 'entrada2':
        return (
          <S.TableContent key={info}>
            <S.ActionsRow>
              {dataGroup[info]}
              {dataGroup[info] !== '-' && (
                <Button
                  type="tertiary"
                  col={3}
                  onClick={() => {
                    setSelectedImg(dataGroup['imagens']['entrada2']);
                    setImageModal(true);
                  }}
                >
                  <ImageIcon />
                </Button>
              )}
            </S.ActionsRow>
          </S.TableContent>
        );
      case 'saida2':
        return (
          <S.TableContent key={info}>
            <S.ActionsRow>
              {dataGroup[info]}
              {dataGroup[info] !== '-' && (
                <Button
                  type="tertiary"
                  col={3}
                  onClick={() => {
                    setSelectedImg(dataGroup['imagens']['saida2']);
                    setImageModal(true);
                  }}
                >
                  <ImageIcon />
                </Button>
              )}
            </S.ActionsRow>
          </S.TableContent>
        );
      default:
        return <S.TableContent key={info}>{dataGroup[info]}</S.TableContent>;
    }
  };

  return (
    <S.Table>
      <thead>
        <S.TableRow>
          {Object.values(tableHeaders).map((header) => (
            <S.TableHeaders key={header}>{header}</S.TableHeaders>
          ))}
        </S.TableRow>
      </thead>
      <tbody>
        {data.map((dataGroup, index) => {
          return (
            <S.TableRow key={index}>
              {Object.keys(tableHeaders).map((info) =>
                photoAction(info, dataGroup),
              )}
            </S.TableRow>
          );
        })}
      </tbody>
      {imageModal && (
        <ImageModal imgUrl={selectedImg} onClose={() => setImageModal(false)} />
      )}
    </S.Table>
  );
};

ClocksTable.propTypes = {
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
};

export default ClocksTable;
