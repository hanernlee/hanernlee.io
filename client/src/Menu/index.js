import React, { Component } from 'react';
import Radium from 'radium';

import { styles } from './styles';

class Menu extends Component {

  render() {
    return (
      <div style={styles.base}>
        <div style={styles.plus}>+</div>
      </div>
    )
  }
}

export default Radium(Menu);
