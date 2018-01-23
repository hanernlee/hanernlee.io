import React, { Component } from 'react';

import { burst } from './burst';

class Home extends Component {
  componentDidMount() {
    document.addEventListener('click' , (e) => {
       burst
           .tune({ x: e.pageX, y: e.pageY })
           .replay();
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click' , (e) => {
       burst
           .tune({ x: e.pageX, y: e.pageY })
           .replay();
    });
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Home;
