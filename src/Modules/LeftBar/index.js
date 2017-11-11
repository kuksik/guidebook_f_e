import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LeftBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    const { moveLeftBar, open } = this.props;
    moveLeftBar({ leftBarVisible: !open });
  };

  render () {
    const { open } = this.props;

    return (
      <MuiThemeProvider>
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        />
        <Drawer
          width={200}
          open={open}
          docked={false}
          onRequestChange={this.handleToggle}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    );
  }
};

export default LeftBar;