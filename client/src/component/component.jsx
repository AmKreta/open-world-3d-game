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


const Component = () => {
    const [isAsideActive, setIsAsideActive] = useState(false);
    return (
        <ThemeContext.Provider value={BASIC}>
            <Header {...{ isAsideActive, setIsAsideActive }} />
            <Aside {...{ isAsideActive }} />
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/chat' component={Chat} />
                    <Route path='/game' component={Game} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/setting' component={Setting} />
                    <Route path='/Shop' component={Shop} />
                    <Redirect to='/404' />
                </Switch>
            </main>
            <Footer />
        </ThemeContext.Provider>
    );
}

export default Component;