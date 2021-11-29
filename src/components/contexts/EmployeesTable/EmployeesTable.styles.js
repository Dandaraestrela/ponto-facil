import styled, { css } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  align-self: center;
  text-align: left;
  table-layout: fixed;

  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  border-collapse: collapse;
  border-radius: 8px;

  tbody tr:nth-child(even) {
    background-color: ${({ theme: { colors } }) => colors.neutral.grey200};
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  height: 36px;
`;

export const TableHeaders = styled.th`
  ${({ theme: { colors, typography } }) =>
    css`
      padding: 12px;
      font-size: ${typography.fontSize.xm};
      font-weight: ${typography.fontWeight.bold};
      line-height: 24px;
      border-bottom: 1px solid ${colors.neutral.grey200};
      color: ${colors.neutral.grey400};
      :last-of-type {
        width: 120px;
      }
    `};
`;

export const TableContent = styled.td`
  ${({ theme: { colors, typography } }) =>
    css`
      padding: 12px;
      font-size: ${typography.fontSize.xm};
      font-weight: ${typography.fontWeight.regular};
      line-height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
`;

export const TableText = styled.p`
  ${({ theme: { colors, typography } }) =>
    css`
      padding: 12px;
      font-size: ${typography.fontSize.xm};
      font-weight: ${typography.fontWeight.regular};
      line-height: 24px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
