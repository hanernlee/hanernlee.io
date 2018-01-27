import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Route } from "react-router-dom";

import { burst, swirl, swirl1, swirl3, swirl4 , swirl5} from './burst';
import { styles } from './styles';

class Home extends Component {
  componentDidMount() {
    swirl.generate().replay();
    swirl1.generate().replay();
    swirl3.generate().replay();
    swirl4.generate().replay();
    swirl5.generate().replay();
    document.addEventListener('click', this.handleBurst);
  }

  componentWillUnmount() {
    swirl.stop();
    swirl1.stop();
    swirl3.stop();
    swirl4.stop();
    swirl5.stop();
    document.removeEventListener('click', this.handleBurst);
  }

  handleBurst(event) {
    const x = event.pageX, y = event.pageY;
    const coords = { x, y };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.title}>
          <span id="title">Christopher Lee</span>
          <span id="headline" className={classes.headline}>Software Developer</span>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Home);
