import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to='/'>
                Amk
           </NavLink>
        </div>
    );
}

export default Logo;

