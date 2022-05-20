import React from "react";
import logo from "../images/logo.svg"
import "../styles/nav.css"

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="navItems">
                <li className="navItem"><a href="#about">About Me</a></li>
                <li className="navItem"><a href="#projects">Project</a></li>
                <li className="navItem"><a href="#contact">Contact</a></li>
            </ul>

        </div>
    )
}


export default NavBar; 