import * as React from 'react';
import * as S from './Checkbox.styles';

const Checkbox = React.forwardRef(({ suffix, ...props }, ref) => (
  <S.StyledWrapper>
    <S.InputRow>
      <S.StyledInput type="checkbox" ref={ref} {...props} />
      {suffix && <S.StyledLabel>{suffix}</S.StyledLabel>}
    </S.InputRow>
  </S.StyledWrapper>
));

export default Checkbox;
