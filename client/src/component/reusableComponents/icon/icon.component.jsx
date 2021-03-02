import React from 'react';
import PropTypes from 'prop-types';
import './icon.styles.scss';

import { IconContext } from 'react-icons';

const Icon = ({ children, noRippleEffect, className, onClick, size = '25px' }) => {
    return (
        <div className="iconContainer" onClick={onClick} style={{ '--size': size }}>
            <IconContext.Provider value={{ className: `icon ${className}` }}>
                {children}
            </IconContext.Provider>
        </div >
    );
}

Icon.propTypes = {
    children: PropTypes.element.isRequired,
    noRippleEffect: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string
}

export default Icon;