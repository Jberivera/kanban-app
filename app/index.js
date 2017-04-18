import './main.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './redux/configureStore';
import { setOnAuthStateChange } from './js/firebaseApi';

const { store, history } = configureStore();

// react components
import { Root, Home, TasksWall, EditProject } from './components';

class App extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    setOnAuthStateChange(store.dispatch);
  }

  render () {
    return (
      <Provider store={ store } >
        <ConnectedRouter history={ history } >
          <Root>
            <Route exact path="/" component={ Home } />
            <Route path="/wall" component={ TasksWall } />
            <Route path="/edit-mode" component={ EditProject } />
          </Root>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
