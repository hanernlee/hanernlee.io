import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { styles } from './styles';

class WorkMini extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.baseWorkMini}></div>
    )
  }
}

export default injectSheet(styles)(WorkMini);
