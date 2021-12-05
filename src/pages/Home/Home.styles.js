import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey100};
  overflow: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 96%;
  margin-top: 16px;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

export const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: ${({ col }) => (100 / 16) * col}%;
  padding: 16px;
  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  border-radius: 8px;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);

  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.neutral.grey300};
    border-radius: 4px;
  }
`;

export const Title = styled.h1`
  ${({ theme: { typography, colors } }) => css`
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 16px;
    color: ${colors.neutral.grey400};
  `};
`;

export const ContentRow = styled.div`
  display: flex;
  height: 32vh;
  gap: 16px;
  width: 100%;
`;

export const ClocksWrapper = styled(ContentRow)`
  height: 50vh;
`;
