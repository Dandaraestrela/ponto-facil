import * as S from './WebcamLayout.styles';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import imageCompression from 'browser-image-compression';

import { ReactComponent as Close } from 'assets/icons/close.svg';
import { Button } from 'components';

const WebcamLayout = ({ onClose, setUploadedImage }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = () => {
    setImgSrc(webcamRef.current.getScreenshot());
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const compressPhoto = () => {
    var options = {
      maxSizeMB: 0.01,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };

    imageCompression
      .getFilefromDataUrl(imgSrc)
      .then((file) => imageCompression(file, options))
      .then(toBase64)
      .then((newPic) => {
        setUploadedImage(newPic);
      })
      .catch(function (error) {
        console.log(error.message);
      });
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
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.1}
          />
        )}

        <S.ButtonsRow>
          {imgSrc ? (
            <>
              <Button
                onClick={() => setImgSrc(null)}
                col={4}
                buttonType="secondary"
              >
                Tirar denovo
              </Button>
              <Button
                onClick={() => {
                  compressPhoto();
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
