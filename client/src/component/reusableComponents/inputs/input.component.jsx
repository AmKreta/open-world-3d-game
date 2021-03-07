import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.styles.scss';

import Icon from '../icon/icon.component';

const Input = ({ label, type, isInvalid, errorMessage = '', onChange, value = '', className, icon }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`inputContainer ${isActive ? 'activeInputContainer' : null}`} >
            {
                label && (
                    <label htmlFor={label} className={`${isActive ? 'activeLabel' : null} ${!icon ? 'leftZero' : null}`}>
                        {label}
                    </label>
                )
            }
            <div className={`${className} input ${isActive ? 'activeInput' : null} ${isInvalid ? 'erroredInput' : null}`}>
                {
                    icon && <Icon size='20px' color='black'>{icon}</Icon>
                }
                <input
                    type={type}
                    onChange={onChange}
                    value={value}
                    onFocus={(e) => setIsActive(true)}
                    onBlur={(e) => { if (value === '') setIsActive(false) }}
                />
            </div>
            {
                isInvalid ? <p>error:-{errorMessage}</p> : null
            }
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password','e-mail']),
    isInvalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.element
};

export default Input;