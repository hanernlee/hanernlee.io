import React, { Component } from 'react';

import { Wrapper } from './styles';

import { Link } from 'react-router-dom';
import AnimatedWrapper from "../AnimatedWrapper";

class WebComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/mobile">Mobile</Link>
        <Link to="/web">Web</Link>
        <Link to="/">Home</Link>
      </Wrapper>
    )
  }
}

const Web = AnimatedWrapper(WebComponent);
export default Web;
