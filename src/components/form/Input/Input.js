import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';

const Input = React.forwardRef(
  ({ label, col, error, marginTop, marginBottom, suffix, ...props }, ref) => (
    <S.StyledWrapper
      col={col}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.InputRow>
        <S.InputContainer hasError={error}>
          <S.StyledInput ref={ref} {...props} />
        </S.InputContainer>
        {suffix && <S.Suffix>{suffix}</S.Suffix>}
      </S.InputRow>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.StyledWrapper>
  ),
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  col: PropTypes.number,
  hasError: PropTypes.bool,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  suffix: PropTypes.string,
};

Input.defaultProps = {
  col: 16,
  hasError: false,
  marginTop: 0,
  marginBottom: 0,
};

export default Input;
