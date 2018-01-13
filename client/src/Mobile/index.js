import React, { Component } from 'react';
import Radium from 'radium';

import { styles } from './styles';

class Mobile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.blueContainer}></div>
    )
  }
}

export default Radium(Mobile);
