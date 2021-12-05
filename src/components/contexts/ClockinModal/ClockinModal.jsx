import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import * as S from './ClockinModal.styles';

import { Button, WebcamLayout, UploadButton } from 'components';
import * as employeesTypes from 'store/types/employeesTypes';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';

const ClockinModal = ({ onClose }) => {
  moment().locale('pt-br');
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState(null);

  const [webcamLayout, setWebcamLayout] = useState(false);

  const [date, setDate] = useState(new Date());
  //console.log(moment().locale('pt-br').format('LTS'));
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const dispatchClockin = useCallback(() => {
    const employeeIMG = imgSrc;
    dispatch({
      type: employeesTypes.CLOCK_IN,
      payload: { employeeIMG, onSuccess: onClose },
    });
  }, [imgSrc]);

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.TitleRow>
            <S.Title>Registro de horário</S.Title>
            <S.CloseItem onClick={onClose}>
              <Close />
            </S.CloseItem>
          </S.TitleRow>
          <S.Paragraph>
            <strong>Horário atual: </strong>
            {date.toLocaleTimeString()}
          </S.Paragraph>
          {imgSrc ? (
            <UploadButton buttonType="tertiary" uploaded>
              <Check />
              Upload concluído
            </UploadButton>
          ) : (
            <UploadButton
              buttonType="tertiary"
              onClick={() => setWebcamLayout(true)}
            >
              <Camera />
              Fazer Upload
            </UploadButton>
          )}
          <S.ButtonsRow>
            <Button buttonType="tertiary" col={8} onClick={onClose}>
              Cancelar
            </Button>
            <Button col={8} onClick={dispatchClockin} disabled={!imgSrc}>
              Bater ponto
            </Button>
          </S.ButtonsRow>
        </S.Content>
      </S.Wrapper>
      {webcamLayout && (
        <WebcamLayout
          onClose={() => setWebcamLayout(false)}
          setUploadedImage={setImgSrc}
        />
      )}
    </>
  );
};
export default ClockinModal;
