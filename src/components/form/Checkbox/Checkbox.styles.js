import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  ${({ theme: { colors, typography } }) => css`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.md};
    color: ${colors.neutral.black};
  `};
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 16px;
  height: 16px;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 26px;
`;
