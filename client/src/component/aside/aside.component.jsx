import React, { useContext } from 'react';
import './aside.styles.scss';

//importing theme
import ThemeContext from '../theme/themeContext/theme.context';

const Aside = ({ isAsideActive }) => {
    const className = useContext(ThemeContext);

    return (
        <aside className={`${className} danger contained ${isAsideActive ? 'active' : null}`}>
            aside
        </aside>
    );
}

export default Aside;