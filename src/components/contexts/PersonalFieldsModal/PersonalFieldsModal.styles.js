import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  background-color: white;
  width: 770px;
  padding: 30px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -1px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  ${({ col }) => css`
    width: ${(100 / 16) * col}%;
  `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ col }) => css`
    width: ${(100 / 16) * col}%;
  `}
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 33px;
`;

export const CloseItem = styled.div`
  position: relative;
  bottom: 5px;
  left: 5px;
  cursor: pointer;
`;
