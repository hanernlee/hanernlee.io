import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from '../Home';
import Menu from '../Menu';
import Work from '../Work';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/work/:id?" component={Work} />
      </div>
    );
  }
}

export default App;
