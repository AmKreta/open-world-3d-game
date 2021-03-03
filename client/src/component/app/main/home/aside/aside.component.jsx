import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './aside.styles.scss'

//importing themeContext
import ThemeContext from '../../../../theme/themeContext/theme.context';

const Aside = ({ showAside }) => {
    const theme = useContext(ThemeContext);
    return (
        <aside className={`${theme} primary fade ${showAside ? 'asideActive' : null}`}>
            aside
        </aside>
    );
}

Aside.propTypes = {
    showAside: PropTypes.bool.isRequired
}

export default Aside;