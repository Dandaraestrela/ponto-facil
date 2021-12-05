import styled, { css } from 'styled-components';
import { default as RootButton } from '../Button/Button';

const UploadButton = styled(RootButton)`
  ${({ theme: { colors }, uploaded }) =>
    css`
      ${uploaded
        ? css`
            border: 1px solid;
            background-color: ${colors.status.positiveLight};
            color: ${colors.status.positive};
            svg {
              path {
                fill: ${colors.status.positive};
              }
            }
            cursor: not-allowed;
          `
        : css`
            border-style: dotted;
            :hover {
              background-color: ${colors.primary.lightest};
            }
          `};
      svg {
        margin-right: 8px;
      }
    `}
`;

export default UploadButton;
