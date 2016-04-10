import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import myAppStore from './reducers/kanbanApp';

// react components
import TasksContainer from './containers/TasksContainer';

const App = (props) => (
  <Provider store={createStore(myAppStore)}>
    <TasksContainer />
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'));
