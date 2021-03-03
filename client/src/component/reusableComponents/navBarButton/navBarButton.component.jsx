import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navBarButton.styles.scss';

//importing reusable components
import Icon from '../icon/icon.component';

//importing activetabContext
import ActiveTabContext from '../../app/activeTabContext/activeTab.context';

const NavBarButton = ({ name, icon, activeIcon }) => {
    const { activeTab, setActiveTab } = useContext(ActiveTabContext);

    const clickHandler = useCallback((e) => {
        setActiveTab(name);
    }, [setActiveTab])

    return (
        <div className={`navBarButton ${activeTab === name ? 'active' : null}`} title={name}>
            <Link to={`/${name}`}>
                <Icon onClick={clickHandler}>
                    {activeTab === name ? activeIcon : icon}
                </Icon>
            </Link>
        </div>
    );
}

NavBarButton.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    activeIcon: PropTypes.element.isRequired
}

export default NavBarButton;