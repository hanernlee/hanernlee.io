import React, { Component } from 'react';

import { Wrapper } from './styles';

import Mobile from '../Mobile';
import Web from '../Web';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Web />
        <Mobile />
      </Wrapper>
    )
  }
}

export default Home;
