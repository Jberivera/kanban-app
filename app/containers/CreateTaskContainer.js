import { CreateTask } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (title, description) => {
      dispatch({ type: 'ADDTODO', 'title': title, 'description': description });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
