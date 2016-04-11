import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import myAppStore from './reducers/kanbanApp';

// react components
import { Hero } from './components';
import CreateTaskContainer from './containers/CreateTaskContainer';
import TasksContainer from './containers/TasksContainer';

const App = (props) => (
  <Provider store={createStore(myAppStore)}>
    <div>
      <Hero />
      <CreateTaskContainer />
      <TasksContainer />
    </div>
  </Provider>
)

ReactDOM.render(<App />, document.querySelector('#app'));
