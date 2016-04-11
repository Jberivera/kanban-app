import { Tasks } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const { toDo, inProgress, done } = state.tasks;

  return {
    toDo: toDo,
    inProgress: inProgress,
    done: done
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'INCREMENT' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
