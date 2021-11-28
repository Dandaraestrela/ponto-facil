import * as S from './NavItem.styles';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ icon, title, route = '', action }) => {
  const location = useLocation();
  const [active] = useState(route === location.pathname);

  return (
    <Link to={route} onClick={action}>
      <S.Item active={active}>
        {icon}
        <S.Title>{title}</S.Title>
      </S.Item>
    </Link>
  );
};

export default NavItem;
