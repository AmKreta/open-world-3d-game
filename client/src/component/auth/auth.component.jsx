import React, { useState } from 'react';
import './auth.styles.scss';

import Login from './login/login.component';
import SignUp from './signUp/signUp.component';

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');
    return (
        <div className="Auth">
            {
                activeTab === 'login' ? <Login {...{ setActiveTab }} /> : <SignUp {...{ setActiveTab }} />
            }
        </div>
    );
}

export default Auth;