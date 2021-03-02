import React, { useContext } from 'react';
import './header.styles.scss';

//importing custom components
import Logo from './logo/logo.component';
import NavBar from '../navBar/navBar.component';

//importing themeContext
import ThemeContext from '../theme/themeContext/theme.context';

const Header = ({ isAsideActive, setIsAsideActive }) => {
    const className = useContext(ThemeContext);

    return (
        <header className={`${className} primary contained`}>
            <Logo />
            <div id='headerNavBar'>
                <NavBar />
            </div>
            <div id='asideToggler' onClick={(e) => setIsAsideActive(prevState => !prevState)}>
                {
                    isAsideActive ? 'close' : 'open'
                }
            </div>
        </header>
    )
}

export default Header;