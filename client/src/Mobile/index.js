import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from "react-motion";

import { Wrapper } from './styles';

import { Link } from 'react-router-dom';
import AnimatedWrapper from "../AnimatedWrapper";

class MobileComponent extends Component {
  render() {
    return (
          <Wrapper key="Mobile">
            <Link to="/web">Web</Link>
            <Link to="/">Home</Link>
          </Wrapper>
        )
      }
}

const Mobile = AnimatedWrapper(MobileComponent);
export default Mobile;
