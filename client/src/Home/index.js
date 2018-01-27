import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { bubbles, burst, timeline, swirl, swirl1, swirl3, swirl4 , swirl5} from './burst';
import { styles } from './styles';

import Menu from '../Menu';

class Home extends Component {
  componentDidMount() {
    swirl.generate().replay();
    swirl1.generate().replay();
    swirl3.generate().replay();
    swirl4.generate().replay();
    // swirl5.generate().replay();
    document.addEventListener('click', this.handleBurst);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleBurst);
  }

  handleBurst(event) {
    const x = event.pageX, y = event.pageY;
    const coords = { x, y };

    burst.tune(coords);
    timeline.add(burst);
    timeline.replay();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div id="title" className={classes.title}>
          <span>Christopher Lee</span>
          <span className={classes.headline}>Software Developer</span>
        </div>
        <div className={classes.menu}>
          <Menu />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Home);
