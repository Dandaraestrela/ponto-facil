import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme: { colors }, col, type }) => css`
    display: flex;
    width: ${(100 / 16) * col}%;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    ${type === 'primary'
      ? css`
          background-color: ${colors.primary.default};
        `
      : type === 'secondary'
      ? css`
      border: 1px solid ${colors.primary.light}
          background-color: none;
        `
      : css`
          background-color: none;
        `}
  `};
`;
