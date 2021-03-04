import React from 'react';
import './component.styles.scss';
import './theme/themeStyleSheet/theme.style.scss';

//importing custom components
import Auth from './auth/auth.component';
import App from './app/app.component';


//importing context
import CurrentUserContext from './globalContext/currentUser.context';
import ThemeContext from './theme/themeContext/theme.context';
import SocketContext from './globalContext/socket.context';

//importing theme names
import { BASIC } from './theme/themeClassNames/themeClassNames';

class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
            socket: null,
            themes: [BASIC],
            activeTheme: BASIC
        }
    }

    setCurrentUser = (userInfo) => {
        this.setState({ currentUser: { ...userInfo } });
    }

    setSocket = (socket) => {
        this.setState({ socket: socket });
    }

    render() {
        return (
            <ThemeContext.Provider value={BASIC}>
                <CurrentUserContext.Provider value={{ currentUser: this.state.currentUser, setCurrentUser: this.setCurrentUser }}>
                    <SocketContext.Provider value={this.socket}>
                        {this.state.currentUser ? <App /> : <Auth />}
                    </SocketContext.Provider>
                </CurrentUserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

export default Component;
