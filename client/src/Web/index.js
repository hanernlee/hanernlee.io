import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { Wrapper } from './styles';

class Web extends Component {
  render() {
    return (
      <Motion
        defaultStyle={{translateY: 1000}}
        style={{ translateY: spring(0, {stiffness: 200, damping: 5}) }}
      >
        {(style) => (
          <Wrapper
            style={{
              transform: `translateY(${style.translateY}px)`
            }}
          >
          </Wrapper>
        )}
      </Motion>    )
  }
}

export default Web;
