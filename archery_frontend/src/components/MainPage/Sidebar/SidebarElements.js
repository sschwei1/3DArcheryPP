import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {color} from '../../../colors';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  min-width: 100%;
  overflow: scroll;
  height: 100%;
  background: ${color.dark1.bg};
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({$isOpen}) => ($isOpen ? '100%' : '0%')};
  top: ${({$isOpen}) => ($isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${color.light1.fg};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${color.light1.fg};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${color.light1.fg};
  cursor: pointer;

  &:hover {
    color: ${color.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${color.primary};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${color.dark1.fg};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${color.light1.bg};
    color: ${color.dark1.fg};
  }
`;