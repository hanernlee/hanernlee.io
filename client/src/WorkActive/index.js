import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Motion, spring } from 'react-motion';

import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (scale) => ({
  transform: `scale3d(${scale}, ${scale}, ${scale}) translate(-50%, -50%)`,
});

class WorkMini extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleWorkActiveClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleWorkActiveClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleWorkActiveClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.removeWork();
    }
  }

  render() {
    const { classes, work } = this.props;

    return (
      <Motion
         defaultStyle={{ scale: 0 }}
         style={{ scale: work ? spring(1, config) : spring(0) }}
      >
        {
          (value) =>
            <div className={classes.baseModal} ref={this.setWrapperRef} style={toCSS(value.scale)}>
              {work &&
                (
                  <div className={classes.modal}>{work.meta}</div>
                )
              }
            </div>
        }
      </Motion>
    )
  }
}

export default injectSheet(styles)(WorkMini);
