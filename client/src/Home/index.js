import React, { Component } from 'react';
import Radium from 'radium';

import { styles } from './styles';

import Mobile from '../Mobile';
import Web from '../Web';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageReady: false
    }
  }

  render() {
    return (
      <div style={styles.mainContainer}>
        <Web />
        <Mobile />
      </div>
    )
  }
}

export default Radium(App);
