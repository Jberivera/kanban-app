import './main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import { setOnAuthStateChange } from './js/firebaseApi';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

// react components
import { TasksWall, EditProject, Root } from './components';

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // setOnAuthStateChange(store.dispatch);
  }

  render () {
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
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
