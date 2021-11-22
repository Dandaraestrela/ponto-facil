import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    color: ${({ active, theme: { colors } }) =>
      active ? colors.primary.default : colors.neutral.grey400};
  }

  svg {
    path {
      fill: ${({ active, theme: { colors } }) =>
        active ? colors.primary.default : colors.neutral.grey400};
    }
  }
`;

export const Title = styled.p`
  ${({ theme: { colors, typography } }) => css`
    color: ${colors.neutral.grey400};
    font-size: 20px;
    font-weight: ${typography.fontWeight.bold};
  `}
`;
