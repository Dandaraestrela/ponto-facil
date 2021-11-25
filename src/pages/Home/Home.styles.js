import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey100};
  overflow: auto;
`;
