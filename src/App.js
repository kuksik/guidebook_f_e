import React, { Component } from 'react';
import './App.css';

import TopBar from './Modules/TopBar';
import DrawerUndockedExample from './Modules/LeftBar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <TopBar />
        <DrawerUndockedExample />
      </div>
    );
  }
}

export default App;
