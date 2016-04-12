import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import myAppStore from './reducers/kanbanApp';

// react components
import { Hero, CreateTask, TasksWall } from './components';

const App = (props) => (
  <Provider store={createStore(myAppStore)}>
    <div>
      <Hero />
      <CreateTask />
      <TasksWall />
    </div>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'));
