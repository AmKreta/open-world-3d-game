import React, { useContext } from 'react';
import './footer.styles.scss';

//importing custom components
import NavBar from '../navBar/navBar.component';

//importing themeContext
import ThemeContext from '../theme/themeContext/theme.context';

const Footer = () => {
    const className = useContext(ThemeContext);
    return (
        <footer className={`${className} primary contained`}>
            <NavBar />
        </footer>
    );
}

export default Footer;

