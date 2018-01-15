import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import './stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducer from './rootReducer';
import Home from './Home';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <StyleRoot>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </StyleRoot>
  </Provider>
  , document.getElementById('root'));
