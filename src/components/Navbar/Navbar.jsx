import * as S from './Navbar.styles';
import { Link } from 'react-router-dom';

import NavItem from 'components/NavItem';

import ProductLogo from 'assets/logos/pflogo.svg';
import Home from 'assets/icons/home.svg';
import Clock from 'assets/icons/clock.svg';
import People from 'assets/icons/people.svg';
import Profile from 'assets/icons/profile.svg';
import Logout from 'assets/icons/logout.svg';

const Navbar = () => (
  <S.Container>
    <Link to="/">
      <img src={ProductLogo} alt="Ponto Fácil" />
    </Link>
    <S.NavItems>
      <NavItem icon={Home} title="Home" route="/" />
      <NavItem icon={Clock} title="Bater ponto" route="/" />
      <NavItem icon={People} title="Funcionários" route="/" />
      <NavItem icon={Profile} title="Perfil" route="/" />
      <NavItem icon={Logout} title="Sair" route="/" />
    </S.NavItems>
  </S.Container>
);

export default Navbar;
