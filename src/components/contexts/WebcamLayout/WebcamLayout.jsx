import * as S from './WebcamLayout.styles';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

import { ReactComponent as Close } from 'assets/icons/close.svg';
import { Button } from 'components';

const WebcamLayout = ({ onClose, setUploadedImage }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = () => {
    setImgSrc(webcamRef.current.getScreenshot());
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Tirar foto</S.Title>
          <Close cursor="pointer" onClick={onClose} />
        </S.TitleRow>

        {imgSrc ? (
          <img src={imgSrc} />
        ) : (
          <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
        )}

        <S.ButtonsRow>
          {imgSrc ? (
            <>
              <Button onClick={() => setImgSrc(null)} col={4} type="secondary">
                Tirar denovo
              </Button>
              <Button
                onClick={() => {
                  setUploadedImage(imgSrc);
                  onClose();
                }}
                col={4}
              >
                OK
              </Button>
            </>
          ) : (
            <Button onClick={capture} col={4}>
              Tirar foto
            </Button>
          )}
        </S.ButtonsRow>
      </S.Content>
    </S.Wrapper>
  );
};

export default WebcamLayout;
