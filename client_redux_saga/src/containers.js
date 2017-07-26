import { connect } from 'react-redux';
import { tasksFetchData, tasksAddData, tasksDeleteData, tasksUpdateData } from './actions/tasks';
import App from './App';

const mapStateToProps = (state) => {
    return {
          tasks: state.tasks /* ,
        hasErrored: state.tasksHasErrored,
        isLoading: state.tasksIsLoading */
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(tasksFetchData()),
        addData: (event) => dispatch(tasksAddData(event)),
        deleteData: (id) => dispatch(tasksDeleteData(id)),
        updateData: (id, title, selected) => dispatch(tasksUpdateData(id, title, selected))
    };
};

export const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

