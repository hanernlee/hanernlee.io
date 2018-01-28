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
    const { classes, title, demo, github, meta } = this.props;

    return (
      <div className={classes.baseWorkMini}>
        <div className={classes.info}>
          <div className={classes.titleContainer}>
            <div className={classes.miniTitle}>{title}</div>
            <div className={classes.miniMeta}>{meta}</div>
          </div>
          <div className={classes.iconContainer}>
            <i className="fa fa-desktop fa-2x"/>
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(WorkMini);
