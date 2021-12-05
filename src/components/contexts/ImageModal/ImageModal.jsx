import PropTypes from 'prop-types';
import * as S from './ImageModal.styles';

import { ReactComponent as Close } from 'assets/icons/close.svg';

const ImageModal = ({ imgUrl, onClose }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.TitleRow>
          <S.Title>Registro do funcionário!</S.Title>
          <Close cursor="pointer" onClick={onClose} />
        </S.TitleRow>
        <img src={imgUrl.replaceAll(' ', '+')} />
      </S.Content>
    </S.Wrapper>
  );
};

export default ImageModal;
