import * as S from './Navbar.styles';
import { Link } from 'react-router-dom';

import NavItem from 'components/NavItem';

import { ReactComponent as ProductLogo } from 'assets/logos/pflogo.svg';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as People } from 'assets/icons/people.svg';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';

const Navbar = () => (
  <S.Container>
    <Link to="/">
      <ProductLogo />
    </Link>
    <S.NavItems>
      <NavItem icon={<Home />} title="Home" route="/" />
      <NavItem icon={<Clock />} title="Bater ponto" route="/ponto" />
      <NavItem icon={<People />} title="Funcionários" route="/funcionarios" />
      <NavItem icon={<Profile />} title="Perfil" route="/perfil" />
      <NavItem icon={<Logout />} title="Sair" route="/login" />
    </S.NavItems>
  </S.Container>
);

export default Navbar;
