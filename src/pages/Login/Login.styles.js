import styled from 'styled-components';
import LoginBG from '../../assets/images/LoginBG.svg';

export const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme: { colors } }) => colors.primary.lightest};
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  border-radius: 0px 40px 40px 0px;
  box-shadow: 5px 8px 28px -6px rgba(24, 39, 75, 0.12),
    5px 18px 88px -4px rgba(24, 39, 75, 0.14);
  z-index: 1;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledBG = styled.div`
  width: 50%;
  background-image: url(${LoginBG});
  background-position: center;
  background-repeat: no-repeat;
`;
