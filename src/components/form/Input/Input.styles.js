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

export const Suffix = styled.p`
  ${({ theme: { colors, typography } }) => css`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.md};
    color: ${colors.neutral.black};
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
  padding: 0 8px;
  ::placeholder {
    color: ${({ theme: { colors } }) => colors.neutral.grey300};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ErrorText = styled.p`
  ${({ theme: { colors, typography } }) => css`
    font-weight: ${typography.fontWeight.regular};
    font-size: ${typography.fontSize.md};
    color: ${colors.status.negative};
    text-align: right;
  `};
`;
