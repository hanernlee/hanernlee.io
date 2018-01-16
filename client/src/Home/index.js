import React, { Component } from 'react';

import { Wrapper } from './styles';
import AnimatedWrapper from '../AnimatedWrapper';

import { Link } from 'react-router-dom';

import Mobile from '../Mobile';
import Web from '../Web';

class HomeComponent extends Component {
  handleClick() {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <Wrapper>
        <Web />
        <Mobile />
        <Link to="/mobile">Mobile</Link>
        <Link to="/web">Web</Link>
        <Link to="/">Home</Link>
      </Wrapper>
    )
  }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;
