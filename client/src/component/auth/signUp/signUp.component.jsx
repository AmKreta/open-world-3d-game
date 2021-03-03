import React from 'react';
import PropTypes from 'prop-types';
import './sigUp.styles.scss';

const SignUp = ({ setActiveTab }) => {
    return (
        <div className="AuthSignUp">
            <button onClick={(e) => setActiveTab('login')}>go to login</button>
        </div>
    );
}

SignUp.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}

export default SignUp;