import * as S from './ClockinModal.styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, WebcamLayout } from 'components';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Upload } from 'assets/images/image-upload.svg';

const ClockinModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState(null);

  const [webcamLayout, setWebcamLayout] = useState(false);

  const dispatchClockin = () => {
    console.log('bateu');
    // dispatch({
    //   type: EmployeesTypes.CREATE_EMPLOYEE,
    //   payload: { newEmployee, onClose },
    // });
  };

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
          <Upload cursor="pointer" onClick={() => setWebcamLayout(true)} />
          {imgSrc && <p>Upload concluído</p>}
          <S.ButtonsRow>
            <Button type="tertiary" col={6} onClick={onClose}>
              Cancelar
            </Button>
            <Button col={6} onClick={dispatchClockin}>
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
