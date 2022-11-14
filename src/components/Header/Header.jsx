import { HeaderContainer, NavLinkContainer, NavItem } from './Header.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavLinkContainer>
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </NavLinkContainer>
      </HeaderContainer>
    </>
  );
};
