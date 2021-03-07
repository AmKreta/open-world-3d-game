import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './setting.styles.scss';

//importing context
import CurrentUserContext from '../../../globalContext/currentUser.context'
import ThemeContext from '../../../theme/themeContext/theme.context';

//importing reusable components
import Button from '../../../reusableComponents/button/button.component';

//importing icon
import { FiLogOut } from 'react-icons/fi';

const Setting = () => {
    const { setCurrentUser } = useContext(CurrentUserContext);
    const theme = useContext(ThemeContext);
    const history = useHistory();

    const logout = useCallback((e) => {
        //removing current user info and redirecting to '/'
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        history.push('/');
    }, [setCurrentUser]);


    return (
        <div className="setting">
            <Button
                label='logout'
                className={`${theme} primary contained`}
                icon={<FiLogOut />}
                onClick={logout}
            />
        </div>
    );
}

export default Setting;