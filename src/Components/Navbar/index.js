import react from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

function Navbar() {
    return (
        <div className="navbar">
            <Nav>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/buy">Buying</NavLink>
                    <NavLink to="/sell">Selling</NavLink>
                    <NavLink to="/insurance">Insurance</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
}

export default Navbar;