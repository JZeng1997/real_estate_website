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
                </NavMenu>
            </Nav>
        </div>
    );
}

export default Navbar;