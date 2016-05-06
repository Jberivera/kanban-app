import React, {
  Component
} from 'react';
import { connect } from 'react-redux';

import { Hero } from '../';

class Root extends Component {

  render () {
    return (
      <div className="main-container">
        <Hero />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
}

export { React }
export default connect(mapStateToProps, null)(Root);
