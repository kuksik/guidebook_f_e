import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import './App.css';
import TopBar from './Modules/TopBar';
import LeftBar from './Modules/LeftBar';
import * as pageActions from './Redux/actions';

class App extends Component {
  render () {
    const {
      leftBarVisible,
      pageActions: { moveLeftBar }
    } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <TopBar />
        <LeftBar
          open={leftBarVisible}
          moveLeftBar={moveLeftBar}
        />
      </div>
    );
  }
}

function mapStateToProps ({ leftBar: { leftBarVisible } }) {
  return { leftBarVisible };
}

function mapDispatchToProps (dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
}

App.propTypes = {
  pageActions: PropTypes.func,
  leftBarVisible: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
