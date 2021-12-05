import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PunctualityText = styled.h1`
  ${({ punctuality, theme: { typography, colors } }) => css`
    font-weight: ${typography.fontWeight.bold};
    font-size: 60px;
    color ${
      punctuality >= 80
        ? colors.status.positive
        : punctuality < 70
        ? colors.status.negative
        : colors.status.attention
    };
  `}
`;

export const Title = styled.h1`
  ${({ theme: { typography, colors } }) => css`
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.neutral.grey400};
  `};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LightTitle = styled.strong`
  ${({ theme: { typography, colors } }) => css`
    font-size: ${typography.fontSize.xl};
    font-weight: ${typography.fontWeight.bold};
    color: ${colors.neutral.grey300};
  `};
`;
