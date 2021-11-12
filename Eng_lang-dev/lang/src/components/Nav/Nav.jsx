import React from "react";
import { NavLink } from "react-router-dom";
import * as navStyles from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <NavLink to="/dashboard">
                Home
            </NavLink>
            <NavLink to="/games">
                Games
            </NavLink>
            <NavLink to="/library">
                Library
            </NavLink>
            <NavLink to="/learn">
                Learn
            </NavLink>
        </nav>
    )
}

export default Nav;