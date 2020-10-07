import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {color, convertHexToRgba} from '../../colors';

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? color.dark1.bg : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${({scrollNav}) => (
    scrollNav ?
    `0 1px 2px 0 ${convertHexToRgba(color.light1.bg, 0.45)}`
    : 0
  )};

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogoLink = styled(LinkS)`
  color: ${color.light1.fg};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogo = styled.img`
  max-height: 45px;
  max-width: 45px;
  margin-right: 5px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${color.light1.fg};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: ${color.light1.fg};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 0 -4px 0 0 ${convertHexToRgba(color.primary, 0.55)};
  }

  &.active {
    box-shadow: inset 0 -4px 0 0 ${convertHexToRgba(color.primary, 0.85)};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${color.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${color.dark1.fg};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s -ease-in-out;
    background: ${color.light1.bg};
    color: ${color.dark1.fg};
  }
`;