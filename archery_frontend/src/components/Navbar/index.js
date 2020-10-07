import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {scrollProps} from '../ButtonEelement'
import { 
  Nav,
  NavbarContainer,
  NavLogoLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import {navData} from './Data';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    setScrollNav(window.scrollY >= 80 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoLink to='welcome' {...scrollProps}>
            <NavLogo src={require('../../images/logos/logo_transparent_no_name_swapped_colors.png')} />
            3dium
          </NavLogoLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {
              navData.navItems.map(({link,text}) => (
                <NavItem>
                  <NavLink to={link} {...scrollProps}>{text}</NavLink>
                </NavItem>
              ))
            }
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={navData.btn.link}>{navData.btn.text}</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;