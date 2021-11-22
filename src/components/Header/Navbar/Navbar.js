import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';
import logo from '../../../assets/logo.jpg';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' style={{height: '80px', width: '100px'}}/>
        </NavLink>
        <Bars />
        <NavMenu>
         <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/faq' activeStyle>
            FAQ
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;