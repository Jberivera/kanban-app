import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

  render () {
    const { user: { uid } } = this.props;

    if (uid) {
      return (
        <Redirect to="/wall" />
      );
    }

    return (
      <div className="home">
        Home
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: Object.assign({}, state.user.res || {})
  };
}

export { Home };
export default connect(mapStateToProps, null)(Home);
