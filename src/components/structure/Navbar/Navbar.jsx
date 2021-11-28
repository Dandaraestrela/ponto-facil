import * as S from './Navbar.styles';
import * as AuthTypes from 'store/types/authTypes';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import NavItem from 'components/structure/NavItem';
import { ClockinModal } from 'components';

import { ReactComponent as ProductLogo } from 'assets/logos/pflogo.svg';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as People } from 'assets/icons/people.svg';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [clockinModal, setClockinModal] = useState(false);

  const { flagAdmin } = useSelector((state) => state.auth.user);

  const logoutRedirect = () => {
    navigate('/login', { replace: true });
  };

  const logout = () => {
    dispatch({
      type: AuthTypes.LOGOUT_USER_REDIRECT,
      payload: { logoutRedirect },
    });
  };

  return (
    <>
      <S.Container>
        <Link to="/">
          <ProductLogo />
        </Link>
        <S.NavItems>
          <NavItem icon={<Home />} title="Home" route="/" />
          <NavItem
            icon={<Clock />}
            title="Bater ponto"
            action={() => setClockinModal(true)}
          />
          {!!parseInt(flagAdmin) && (
            <NavItem
              icon={<People />}
              title="Funcionários"
              route="/funcionarios"
            />
          )}
          <NavItem icon={<Profile />} title="Perfil" route="/perfil" />
          <NavItem
            icon={<Logout />}
            title="Sair"
            route="/login"
            action={logout}
          />
        </S.NavItems>
      </S.Container>
      {clockinModal && <ClockinModal onClose={() => setClockinModal(false)} />}
    </>
  );
};

export default Navbar;
