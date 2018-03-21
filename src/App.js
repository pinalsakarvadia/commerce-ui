import React from 'react';

import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import history from './history';
import store from './store';
import routePaths from './router';

import CommerceApp from './CommerceApp';

const App = () => 
  <Provider store={store}>
    <Router history={history}>
      <CommerceApp getState={store.getState} dispatch={store.dispatch}>
        {routePaths(store)}
      </CommerceApp>
    </Router>
  </Provider>;

export default App;