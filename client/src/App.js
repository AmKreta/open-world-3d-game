import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Component from './component/component';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </div>
  );
}

export default App;
