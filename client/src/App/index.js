import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from './Home';
import Web from './Web';
import Mobile from './Mobile';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>
        <Route
          path="/mobile"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Mobile {...rest} />}
            </TransitionGroup>
        )} />
        <Route
          path="/web"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Web {...rest} />}
            </TransitionGroup>
        )} />
        <Route
          exact path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
