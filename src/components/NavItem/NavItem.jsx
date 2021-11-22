import * as S from './NavItem.styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, title, route }) => {
  const [active, setActive] = useState(false);

  return (
    <Link to={route}>
      <S.Wrapper>
        <img src={icon} alt={'menu icon'} />
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </Link>
  );
};

export default NavItem;
