import { HOME } from '../services/tabs/tabs';
import React from 'react';

const ActiveTabContext = React.createContext({ activeTab: HOME, setActiveTab: () => { } });

export default ActiveTabContext;

