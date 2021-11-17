import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

// Header component holding the navbar and links to pages
function Header() {
    return (
        <div>
            <Navbar
                color="light"
                expand="lg"
                fixed="top"
                light
            >
                <NavbarBrand href="/">
                    Saadia El fekak
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/about/">
                                About me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/portfolio/">
                                Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default Header;