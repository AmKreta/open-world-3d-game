import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './header.styles.scss';

//importing custom components
import Logo from './logo/logo.component';
import NavBar from '../navBar/navBar.component';

//importing themeContext
import ThemeContext from '../theme/themeContext/theme.context';

//importing reusable components
import Icon from '../reusableComponents/icon/icon.component';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

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
                    isAsideActive
                        ? <Icon>
                            <CgClose />
                        </Icon>
                        : <Icon>
                            <FiMenu />
                        </Icon>
                }
            </div>
        </header>
    )
}

Header.propTypes = {
    isAsideActive: PropTypes.func.isRequired,
    setIsAsideActive: PropTypes.func.isRequired
}

export default Header;