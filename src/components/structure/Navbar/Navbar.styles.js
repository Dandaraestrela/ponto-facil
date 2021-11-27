import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  min-height: 60px;

  justify-content: space-between;
  align-items: center;

  padding: 0 60px;

  background-color: ${({ theme: { colors } }) => colors.neutral.white};
  box-shadow: 0px 6px 8px -6px rgba(24, 39, 75, 0.12),
    0px 8px 16px -6px rgba(24, 39, 75, 0.08);
`;

export const NavItems = styled.div`
  display: flex;
  gap: 36px;
`;
