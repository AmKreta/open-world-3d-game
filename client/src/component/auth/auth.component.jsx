import React, { useState } from 'react';
import './auth.styles.scss';

import Login from './login/login.component';
import SignUp from './signUp/signUp.component';

import background from './Preview2.gif';

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');
    return (
        <div className="Auth" style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%' }}>
            {
                activeTab === 'login' ? <Login {...{ setActiveTab }} /> : <SignUp {...{ setActiveTab }} />
            }
        </div>
    );
}

export default Auth;