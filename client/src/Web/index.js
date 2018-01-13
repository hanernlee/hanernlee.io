import React, { Component } from 'react';
import Radium from 'radium';

import { styles } from './styles';

class Web extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.pinkContainer}></div>
    )
  }
}

export default Radium(Web);
