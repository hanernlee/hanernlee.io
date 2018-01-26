import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Motion, StaggeredMotion, spring } from 'react-motion';

import { styles } from './styles';

class Menu extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.base}>
        <div className={classes.plus}>+</div>
        <div className={classes.firstOpt}>h</div>
        <div className={classes.secondOpt}>g</div>
        <div className={classes.thirdOpt}>m</div>
      </div>
    )
  }
}

export default injectSheet(styles)(Menu);
