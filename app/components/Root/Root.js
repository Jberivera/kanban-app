import React from 'react';

import { Nav } from '../';

class Root extends React.Component {

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
