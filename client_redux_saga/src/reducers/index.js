import { combineReducers } from 'redux';
import { tasks /* , tasksHasErrored, tasksIsLoading */ } from './tasks';

const rootReducer = combineReducers({
    tasks /* ,
    tasksHasErrored,
    tasksIsLoading */
});

export default rootReducer;