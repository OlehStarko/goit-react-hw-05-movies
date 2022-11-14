import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  top: 0px;
  background-color: #262628;
  margin-top: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.38);
`;

export const NavLinkContainer = styled.div`
  width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  height: 72px;
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  text-decoration: none;
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;

  &.active {
    color: #e6324b;
  }
  :hover:not(.active) {
    color: #e6324b;
  }
`;

export const TrendingText = styled.p`
  color: #e6324b;

  margin-left: auto;
  display: flex;
  right: 0;
`;
