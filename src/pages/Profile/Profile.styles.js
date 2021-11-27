import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey100};
  overflow: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  align-self: center;
  margin-top: 30px;
  padding: 32px 30px;
  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  border-radius: 8px;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);
`;

export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 0.5px);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 40px;
`;

export const DataDivider = styled.div`
  width: 1px;
  margin-right: 30px;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey300};
`;

export const TitleRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  margin-top: 16px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -1px;
`;
