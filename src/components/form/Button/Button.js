import { ButtonHTMLAttributes, fowardRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = ({ children, col, type }) => {
  return (
    <S.ButtonWrapper col={col} type={type}>
      {children}
    </S.ButtonWrapper>
  );
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  col: PropTypes.number,
  type: PropTypes.string,
};

Button.defaultProps = {
  col: 16,
  type: 'primary',
};

export default Button;
