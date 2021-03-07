import React from 'react';
import './app.styles.scss';

//importing custom components
import Header from './header/header.component';
import Footer from './footer/footer.component';
import Main from './main/main.component';

//impoting context
import ActiveTabContext from './activeTabContext/activeTab.context';

import { HOME } from './tabs/tabs';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeTab: HOME,
            showAside: false
        };
    }

    componentDidMount() {
        let activeTabInUrl = window.location.href.replace(`${window.location.origin}/`, '').split('/')[0];
        this.setState({ activeTab: activeTabInUrl === '' ? HOME : activeTabInUrl });
    }

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    setShowAside = () => {
        this.setState(prevState => ({ showAside: !prevState.showAside }));
    }

    render() {
        return (
            <React.Fragment>
                <ActiveTabContext.Provider value={{ activeTab: this.state.activeTab, setActiveTab: this.setActiveTab }}>
                    <Header {...{ showAside: this.state.showAside, setShowAside: this.setShowAside }} />
                </ActiveTabContext.Provider>
                <Main {...{ showAside: this.state.showAside, setShowAside: this.setShowAside }} />
                <ActiveTabContext.Provider value={{ activeTab: this.state.activeTab, setActiveTab: this.setActiveTab }}>
                    <Footer />
                </ActiveTabContext.Provider>
            </React.Fragment >
        );
    }
}

export default App;