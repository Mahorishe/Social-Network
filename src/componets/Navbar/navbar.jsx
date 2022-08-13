import React from "react";
import navbares from './navbar.module.css'

const Navbar = () => {
    return (
    <nav className={navbares.nav}>
        <ul className='nav_sidebar'>
            <li className='nav_sidebar__item'>Profile</li>
            <li className='nav_sidebar__item'>Messages</li>
            <li className='nav_sidebar__item'>News</li>
            <li className='nav_sidebar__item'>Music</li>
            <li className='nav_sidebar__item'>Settings</li>
        </ul>
      </nav>

    );
}

export default Navbar;