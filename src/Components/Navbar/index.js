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
import {Button} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Nav>
                <NavMenu>
                    <Link to='/'>
                    <Button style={{
                        width: '80px',
                        height: '80px',
                        margin: '10px',
                    }}>Logo</Button>
                    </Link>
                    <h1 style={{
                        width: '150px',
                    }}>Mei Zhao Realty</h1>
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