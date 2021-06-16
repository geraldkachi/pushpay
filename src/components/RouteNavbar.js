import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // NavbarText,
} from "reactstrap";

import styled from "styled-components"

import { Link, withRouter } from "react-router-dom";

const RouteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <Navbar color="dark" light expand="sm" className="">
        <NavbarBrand>
          <Link to="/">Navbar-Logo</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Components</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact">Contact</Link>
              </NavLink>
              <NavLink>
                <Link to="/customreacthook">HookFormWith Logic</Link>
              </NavLink>
            </NavItem>
          </Nav>

          
        <Nav className="mr-auto float-right">
        <Listu>
            <Listli>
              <RouterLink to="signin">signIn</RouterLink>
            </Listli>
            <Listli>
              <RouterLink to="signup">signUp</RouterLink>
            </Listli>
          </Listu>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const Listu = styled.ul`
      margin: 0;
      list-style: none;
      display: flex;
      // flex-direction: row;
      padding: 5px 15px;
      justify-content: between;
`
const Listli = styled.li`
      padding: 0 15px;
`
const RouterLink = styled(Link)`
    text-underline: none; 
      color: white;
`

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };
// Navbar.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };
// Navbar.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };

export default withRouter(RouteNavbar);
