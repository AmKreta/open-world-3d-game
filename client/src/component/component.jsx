import React, { useState } from 'react';
import './component.styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

//importing custom components
import Chat from './chat/chat.component';
import Game from './game/game.component';
import Home from './home/home.component';
import Profile from './profile/profile.component';
import Setting from './setting/setting.component';
import Shop from './shop/shop.component';
import Header from './header/header.component';
import Aside from './aside/aside.component';
import Footer from './footer/footer.component';

//importing theme context
import ThemeContext from './theme/themeContext/theme.context';
import { BASIC } from './theme/themeClassNames/themeClassNames';
import './theme/themeStyleSheet/theme.style.scss'

//importing context
import ActiveTabContext from './globalContext/activeTab.context';

//importing tab names
import { HOME, CHAT, GAME, PROFILE, SETTING, SHOP } from './services/tabs/tabs';

const Component = () => {
    const [isAsideActive, setIsAsideActive] = useState(false);
    const [activeTab, setActiveTab] = useState(HOME);

    return (
        <ThemeContext.Provider value={BASIC}>
            <ActiveTabContext.Provider value={{ ...{ activeTab, setActiveTab } }}>
                <Header {...{ isAsideActive, setIsAsideActive }} />
                <Aside {...{ isAsideActive }} />
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path={`/${CHAT}`} component={Chat} />
                        <Route path={`/${GAME}`} component={Game} />
                        <Route path={`/${PROFILE}`} component={Profile} />
                        <Route path={`/${SETTING}`} component={Setting} />
                        <Route path={`/${SHOP}`} component={Shop} />
                        <Redirect to='/404' />
                    </Switch>
                </main>
                <Footer />
            </ActiveTabContext.Provider>
        </ThemeContext.Provider>
    );
}

export default Component;