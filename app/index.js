import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// react components
import { TasksWall, EditProject, Root } from './components';

const App = (props) => {

  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ Root }>
          <IndexRoute to="/wall" />
          <Route path="wall" component={ TasksWall } />
          <Route path="edit-mode" component={ EditProject } />
        </Route>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
