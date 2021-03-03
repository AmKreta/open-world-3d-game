import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './main.styles.scss';

//importing custom components
import Home from './home/home.component';
import Game from './game/game.component';
import Chat from './chat/chat.component';
import Setting from './setting/setting.component';
import Profile from './profile/profile.component';
import Shop from './shop/shop.component';

//importing tabsNames
import { HOME, GAME, SETTING, SHOP, PROFILE, CHAT } from '../tabs/tabs';

const Main = ({ showAside }) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' render={() => <Home showAside={showAside} />} />
                <Route path={`/${GAME}`} component={Game} />
                <Route path={`/${CHAT}`} component={Chat} />
                <Route path={`/${PROFILE}`} component={Profile} />
                <Route path={`/${SETTING}`} component={Setting} />
                <Route path={`/${SHOP}`} component={Shop} />
                <Route path={`/${HOME}`} render={() => <Redirect to='/' />} />
            </Switch>
        </main>
    );
}

Main.propTypes = {
    showAside: PropTypes.bool.isRequired
}

export default withRouter(Main);