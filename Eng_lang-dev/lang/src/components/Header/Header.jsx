import React from "react";
import { ReactComponent as Logo } from '../../assets/img/Icon.svg';
import * as headerStyles from './Header.module.css';
import Nav from '../Nav/Nav.jsx';

const Header = () => {
    return ( 
        <header className={headerStyles.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;