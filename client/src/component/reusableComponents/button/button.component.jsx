import React from 'react';
import PropTypes from 'prop-types';
import './button.styles.scss';

//importing reusable components
import Icon from '../icon/icon.component';

const Button = ({ icon, label, className, size = '30px', onClick }) => {
    return (
        <button className={className} style={{ '--size': size }} onClick={onClick}>
            {
                icon && <div className="buttonIcon">
                    <Icon size='100%'>{icon}</Icon>
                </div>
            }
            <p>{label}</p>
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;