import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='welcome'>Welcome</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='howto'>How To</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='company'>Company</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='devteam'>Dev Team</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;