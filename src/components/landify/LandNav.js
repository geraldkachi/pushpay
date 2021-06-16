import React, { useState } from 'react';
import {Link}  from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { ReactComponent as LogoIcon } from "../../assest/images/Dark.svg";
import { ReactComponent as GoodleLogo } from "../../assest/images/Google.svg";
import { ReactComponent as AppStoreLogo } from "../../assest/images/AppStore.svg";


const LandNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const styleheader = {
       color:'#18191F', 
       fontSize: "14px",
       fontWeight: 700,
       lineHeiht: '20px',
       marginTop: "4px",
       marginBottom: '5444px'
    }

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          <Navbar color="white" className='container' light expand="md">
            <NavbarBrand href="/"><LogoIcon /></NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto my-2 mt-3" navbar>
                <NavItem className="my-2 mx-2">
                <Link style={styleheader} to="/" >
                    <div>About</div>
                  </Link>
                </NavItem>
                <NavItem  className="my-2 mx-2">
                  <Link style={styleheader} to="/">
                    <div>Products</div>
                  </Link>
                </NavItem>
                <NavItem  className="my-2 mx-2">
                  <Link style={styleheader} to="/"><div>Pricing</div></Link>
                </NavItem>
                <NavItem  className="my-2 mx-2">
                  <Link style={styleheader} to="/"><div>Blog</div></Link>
                </NavItem>
                <NavItem  className="my-2 mx-2">
                  <Link style={styleheader} to="/"><div>jobs</div></Link>
                </NavItem>
                <NavItem  className="my-2 mx-2">
                  <Link style={styleheader} to="/"><div>More</div></Link>
                </NavItem>

              </Nav>
                <div className="justify-content-between mr-3 ">
                    <GoodleLogo />
                    <AppStoreLogo />
              </div>
            </Collapse>
          </Navbar>
        </div>
    )
}

export default LandNav
