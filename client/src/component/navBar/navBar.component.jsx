import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navBar.styles.scss';

//importing tabs names
import { GAME, CHAT, PROFILE, SETTING, SHOP } from '../services/tabs/tabs';

//importing Context
import ActiveTabContext from '../globalContext/activeTab.context';
import ThemeContext from '../theme/themeContext/theme.context';

const NavBar = () => {
    const { activeTab, setActiveTab } = useContext(ActiveTabContext);
    const className = useContext(ThemeContext);
    return (
        <div className="navBar">
            <div
                className={`${activeTab === GAME ? `${className} primary inverted` : null}`}
                onClick={(e) => { setActiveTab(GAME) }}
            >
                <Link to={`/${GAME}`}>
                    {GAME}
                </Link>
            </div>
            <div
                className={`${activeTab === CHAT ? `${className} primary inverted` : null}`}
                onClick={(e) => { setActiveTab(CHAT) }}
            >
                <Link to={`/${CHAT}`}>
                    {CHAT}
                </Link>
            </div>
            <div
                className={`${activeTab === PROFILE ? `${className} primary inverted` : null}`}
                onClick={(e) => { setActiveTab(PROFILE) }}
            >
                <Link to={`/${PROFILE}`}>
                    {PROFILE}
                </Link>
            </div>
            <div
                className={`${activeTab === SETTING ? `${className} primary inverted` : null}`}
                onClick={(e) => { setActiveTab(SETTING) }}
            >
                <Link to={`/${SETTING}`}>
                    {SETTING}
                </Link>
            </div>
            <div
                className={`${activeTab === SHOP ? `${className} primary inverted` : null}`}
                onClick={(e) => { setActiveTab(SHOP) }}
            >
                <Link to={`/${SHOP}`}>
                    {SHOP}
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
