import React, { useContext } from 'react';
import './footer.styles.scss';

//importing theme context
import ThemeContext from '../../theme/themeContext/theme.context';

//importing reusable components
import NavBar from '../../reusableComponents/navBar/navBar.component';

const Footer = () => {
    const theme = useContext(ThemeContext);
    return (
        <footer className={`${theme} primary contained`}>
            <NavBar />
        </footer>
    );
}

export default Footer;