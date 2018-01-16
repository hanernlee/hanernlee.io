import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AnimatedSwitch from "../AnimatedSwitch";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from '../Home';
import Web from '../Web';
import Mobile from '../Mobile';

class App extends Component {
  render() {
    return (
      <div>
        <Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route
									path="/web"
									render={props => (
										<Web {...props}  />
									)}
								/>
                <Route
                  path="/mobile"
                  render={props => (
                    <Mobile {...props}  />
                  )}
                />
                <Route exact path="/" component={Home} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
      </div>
    );
  }
}

export default App;
