import React, { Component } from 'react';

import { styles } from './styles';
import animation from './animation';

class Web extends Component {
  componentDidMount() {
    animation.show(this.web);
  }

  render() {
    return (
      <div ref={(val) => (this.web = val)} style={styles.base}></div>
    )
  }
}

export default Web;
