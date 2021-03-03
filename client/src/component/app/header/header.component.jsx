import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import './header.styles.scss';

//importing tab names
import { HOME } from '../tabs/tabs';

//importing context
import ThemeContext from '../../theme/themeContext/theme.context';
import ActiveTabContext from '../activeTabContext/activeTab.context';

//importing reusable components
import NavBar from '../../reusableComponents/navBar/navBar.component';
import NavBarButton from '../../reusableComponents/navBarButton/navBarButton.component';
import Icon from '../../reusableComponents/icon/icon.component';

//importing icons
import { AiFillHome, AiOutlineHome, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = ({ showAside, setShowAside }) => {

    const theme = useContext(ThemeContext);
    const { activeTab } = useContext(ActiveTabContext);

    const toggleShowAside = useCallback((e) => {
        setShowAside(prevState => !prevState);
    }, [setShowAside]);

    return (
        <header className={`${theme} primary contained`}>
            <div className="logo">
                <NavBarButton name={HOME} icon={<AiOutlineHome />} activeIcon={<AiFillHome />} />
            </div>
            <div className="headerNavBar">
                <NavBar />
            </div>
            {
                activeTab === HOME
                    ? <div className="activateAsideButton">
                        {
                            showAside
                                ? <Icon onClick={toggleShowAside} color>
                                    <AiOutlineClose />
                                </Icon>
                                : <Icon onClick={toggleShowAside}>
                                    <AiOutlineMenu />
                                </Icon>
                        }
                    </div>
                    : null
            }
        </header>
    );
}

Header.propTypes = {
    showAside: PropTypes.bool.isRequired,
    setShowAside: PropTypes.func.isRequired
}

export default Header;