import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey100};
  overflow: auto;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  align-self: center;
  margin-top: 16px;
  padding: 16px 0;
  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  border-radius: 8px;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);
`;

export const Title = styled.h1`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.bold};
    padding-left: 12px;
  `};
`;
