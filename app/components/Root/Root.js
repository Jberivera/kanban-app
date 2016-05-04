import React, {
  Component
} from 'react';
import { connect } from 'react-redux';

import { Hero, TasksWall } from '../';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="main-container">
        <Hero />
        <TasksWall />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
}

export { React }
export default connect(mapStateToProps, null)(Root);
