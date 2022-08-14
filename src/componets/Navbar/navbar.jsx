import React from "react";
import {NavLink} from 'react-router-dom';
import s from './navbar.module.css'

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <ul className='nav_sidebar'>
            <li className='nav_sidebar__item'> <NavLink to="/profile" className={({isActive}) => isActive ? 'active-link' : '' }>Profile</NavLink></li>
            <li className='nav_sidebar__item'><NavLink to="/dialogs" className={({isActive}) => isActive ? 'active-link' : '' }>Messages</NavLink></li>
            <li className='nav_sidebar__item'>News</li>
            <li className='nav_sidebar__item'>Music</li>
            <li className='nav_sidebar__item'>Settings</li>
        </ul>
      </nav>

    );
}

export default Navbar;