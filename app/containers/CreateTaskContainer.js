import { CreateTask } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (id, title, description) => {
      dispatch({ type: 'ADDTODO', id: id, 'title': title, 'description': description });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
