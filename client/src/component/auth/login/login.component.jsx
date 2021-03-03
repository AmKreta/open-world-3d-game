import React from 'react';
import PropTypes from 'prop-types';
import './login.styles.scss';

const Login = ({ setActiveTab }) => {
    return (
        <div className="AuthLogin">
            <button onClick={(e) => setActiveTab('signUp')}>go to signUp</button>
            <input></input>
            <input></input>
        </div>
    );
}

Login.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}

export default Login;