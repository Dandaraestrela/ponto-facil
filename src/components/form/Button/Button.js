import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = React.forwardRef(
  (
    { children, col, type, onClick, marginTop, marginBottom, ...props },
    ref,
  ) => (
    <S.ButtonWrapper
      ref={ref}
      col={col}
      type={type}
      onClick={onClick}
      marginTop={marginTop}
      marginBottom={marginBottom}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  ),
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  col: PropTypes.number,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

Button.defaultProps = {
  col: 16,
  type: 'primary',
  marginTop: 0,
  marginBottom: 0,
};

export default Button;
