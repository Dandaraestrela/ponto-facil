import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.neutral.grey100};
`;
