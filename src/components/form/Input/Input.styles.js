import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  ${({ col, marginTop, marginBottom }) => css`
    display: flex;
    flex-direction: column;
    width: ${(100 / 16) * col}%;
    margin-top: ${marginTop}px;
    margin-bottom: ${marginBottom}px;
  `}
`;

export const StyledLabel = styled.label`
  ${({ theme: { colors, typography } }) => css`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.md};
    color: ${colors.neutral.black};
    margin-bottom: 8px;
  `};
`;

export const InputContainer = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    width: 100%;
    height: 42px;
    background-color: ${colors.neutral.grey100};
    border-radius: 8px;

    &:active,
    &:focus-within {
      border: 2px solid ${colors.primary.light};
    }
    ${({ hasError }) =>
      hasError
        ? css`
            border: 2px solid ${colors.status.negative};
          `
        : css``};
  `};
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  padding: 0px 8px 0px 12px;
  ::placeholder {
    color: ${({ theme: { colors } }) => colors.neutral.grey300};
  }
`;
