import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import './icon.styles.scss';

const Icon = ({ className, children, noRippleEffect, onClick, size = '30px', color = 'white' }) => {
    return (
        <div className="iconContainer" style={{ '--size': size, '--color': color }} onClick={onClick}>
            <IconContext.Provider value={{ className: `${className} icon` }}>
                {children}
            </IconContext.Provider>
        </div>
    );
}

Icon.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.element.isRequired,
    noRippleEffect: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string
}

export default Icon;