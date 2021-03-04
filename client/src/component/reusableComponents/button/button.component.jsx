import React from 'react';
import PropTypes from 'prop-types';
import './button.styles.scss';

const Button = ({ label, className, size = '30px', onClick }) => {
    return (
        <button className={className} style={{ '--size': size }} onClick={onClick}>
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    onClick:PropTypes.string
};

export default Button;