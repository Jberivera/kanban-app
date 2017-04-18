import React, {
  Component
} from 'react';

import { Nav } from '../';

class Root extends Component {

  render () {
    return (
      <div className="main-container">
        <Nav />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Root;
