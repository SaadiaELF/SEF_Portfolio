import React from "react";
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from "reactstrap";

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
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Collapse navbar id="navbarResponsive">
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