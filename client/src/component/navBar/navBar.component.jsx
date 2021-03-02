import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.styles.scss';

const NavBar = () => {
    return (
        <div className="navBar">
            <NavLink to='/game'>
                Play
            </NavLink>
            <NavLink to='/chat'>
                Chat
            </NavLink>
            <NavLink to='/profile'>
                Profile
            </NavLink>
            <NavLink to='/setting'>
                Setting
            </NavLink>
            <NavLink to='/shop'>
                Shop
            </NavLink>
        </div>
    );
}

export default NavBar;
