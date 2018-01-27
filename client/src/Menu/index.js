import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Motion, spring } from 'react-motion';

import { styles } from './styles';

const config = { stiffness: 200, damping: 10 };
const toCSS = (translationX, translationY, scale) => ({
  transform: `translate(${translationX}px, ${translationY}px) scale3d(${scale}, ${scale}, ${scale}`,
});

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleMenuState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
}

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={classes.base} ref={this.setWrapperRef} onClick={this.handleMenuState}>
        <div className={classes.plus}>+</div>
        <Motion
           defaultStyle={{ translateX: 0, scale: 0 }}
           style={{ translateX: spring(isOpen ? -150 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) => <div className={classes.firstOpt} style={toCSS(value.translateX, 0, value.scale)}>h</div>
          }
        </Motion>
        <Motion
           defaultStyle={{ translate: 0, scale: 0 }}
           style={{ translate: spring(isOpen ? -100 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) => <div className={classes.firstOpt} style={toCSS(value.translate, value.translate, value.scale)}>m</div>
          }
        </Motion>
        <Motion
           defaultStyle={{ translateY: 0, scale: 0 }}
           style={{ translateY: spring(isOpen ? -150 : 0, config), scale: isOpen ? spring(1) : spring(0) }}
        >
          {
            (value) => <div className={classes.thirdOpt} style={toCSS(0, value.translateY, value.scale)}>g</div>
          }
        </Motion>
      </div>
    )
  }
}

export default injectSheet(styles)(Menu);
