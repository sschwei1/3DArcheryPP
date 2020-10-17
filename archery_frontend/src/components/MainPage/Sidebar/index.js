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
import {scrollProps} from '../../ButtonEelement';

import {navData} from '../../../Data/Navbar';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {
            navData.navItems.map(({link, text}, index) => (
              <SidebarLink key={index} to={link} onClick={toggle} {...scrollProps}>{text}</SidebarLink>
            ))
          }
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={navData.btn.link}>{navData.btn.text}</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
