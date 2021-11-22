import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.neutral.grey400};
    font-size: 20px;
    font-weight: ${typography.fontWeight.bold};
  `}
`;
