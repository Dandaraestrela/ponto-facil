import * as React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

const Button = React.forwardRef(
  ({ children, col, type, onClick, ...props }, ref) => (
    <S.ButtonWrapper
      ref={ref}
      col={col}
      type={type}
      onClick={onClick}
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
};

Button.defaultProps = {
  col: 16,
  type: 'primary',
};

export default Button;
