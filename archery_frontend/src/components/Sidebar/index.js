import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='welcome' onClick={toggle}>Welcome</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='howto'onClick={toggle}>How To</SidebarLink>
          <SidebarLink to='company' onClick={toggle}>Company</SidebarLink>
          <SidebarLink to='devteam' onClick={toggle}>Dev Team</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
