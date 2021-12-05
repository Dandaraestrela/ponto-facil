import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = React.forwardRef(
  (
    { children, col, buttonType, onClick, marginTop, marginBottom, ...props },
    ref,
  ) => (
    <S.ButtonWrapper
      ref={ref}
      col={col}
      buttonType={buttonType}
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
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onClick: PropTypes.func.isRequired,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

Button.defaultProps = {
  col: 16,
  buttonType: 'primary',
  marginTop: 0,
  marginBottom: 0,
};

export default Button;
