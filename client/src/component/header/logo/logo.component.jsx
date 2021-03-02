import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//importing tab names
import { HOME } from '../../services/tabs/tabs';

//importing Contxt
import ActiveTabContext from '../../globalContext/activeTab.context';
import ThemeContext from '../../theme/themeContext/theme.context';

const Logo = () => {

    const { activeTab, setActiveTab } = useContext(ActiveTabContext);
    const className = useContext(ThemeContext);

    return (
        <div
            className={`logo ${activeTab === HOME ? `${className} primary inverted` : null}`}
            onClick={(e) => { setActiveTab(HOME) }}
        >
            <Link to={`/${HOME}`}>
                Amk
           </Link>
        </div>
    );
}

export default Logo;

