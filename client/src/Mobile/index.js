import React, { Component } from 'react';
import { Motion, spring, stiffness, damping } from 'react-motion';

import { Wrapper } from './styles';

class Mobile extends Component {
  render() {
    return (
      <Motion
        defaultStyle={{ translateY: 1000 }}
        style={{ translateY: spring(0, { stiffness: 150, damping: 10 }) }}
      >
        {(style) => (
          <Wrapper
            style={{
              transform: `translateY(${style.translateY}px)`
            }}
          >
          </Wrapper>
        )}
      </Motion>
    )
  }
}

export default Mobile;
