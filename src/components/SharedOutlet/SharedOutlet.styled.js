import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 17px 0;
`;

export const Navigation = styled.nav`
  margin-left: 50px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #0f0f0f;

  &.active{
    color: red;
  }
`;

