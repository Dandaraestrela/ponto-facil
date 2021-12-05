import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({
    theme: { colors, typography },
    col,
    buttonType,
    marginTop,
    marginBottom,
  }) => css`
    display: flex;
    width: ${(100 / 16) * col}%;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-top: ${marginTop}px;
    margin-bottom: ${marginBottom}px;
    border: none;
    border-radius: 20px;
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.lg};
    cursor: pointer;
    background: none;

    &:disabled {
      background-color: ${colors.neutral.grey300};
      cursor: not-allowed;
      :hover {
        background-color: ${colors.neutral.grey300};
      }
    }

    ${buttonType === 'primary'
      ? css`
          background-color: ${colors.primary.default};
          color: ${colors.neutral.white};
          :hover {
            background-color: ${colors.primary.light};
          }
        `
      : buttonType === 'secondary'
      ? css`
          border: 1px solid ${colors.primary.light};
          color: ${colors.primary.light};
          :hover {
            background-color: ${colors.primary.lightest};
          }
        `
      : css`
          background-color: none;
          color: ${colors.primary.light};
        `}
  `};
`;
