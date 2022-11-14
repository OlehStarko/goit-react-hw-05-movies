import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieListContainer = styled.div``;

export const MovieListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;
export const MovieListItem = styled.li`
  position: relative;
  width: calc((100% - 32px * 4) / 4);
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 32px;
  float: left;
  list-style: none;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
`;
