import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Menu from './menu.js';

class TopBar extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <AppBar
          title="GuideBook"
          iconElementRight={<Menu />}
        />
      </MuiThemeProvider>
    );
  }
}

export default TopBar;
