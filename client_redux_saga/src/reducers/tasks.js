import { List } from 'immutable';

/* export function tasksHasErrored(state = false, action) {
    switch (action.type) {
        case 'TASKS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function tasksIsLoading(state = false, action) {
    switch (action.type) {
        case 'TASKS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
} */

export function tasks(state, action) {
    switch (action.type) {
        case 'TASKS_FETCH_DATA_SUCCESS':
            return List(action.payload.tasks);

        case 'TASKS_ADD_DATA_SUCCESS':
            return state.push(action.payload.task);     
            
        case 'TASKS_DELETE_DATA_SUCCESS':
            return state.filter(t => t._id !== action.payload.id);
        
        case 'TASKS_UPDATE_DATA_SUCCESS':
            let ix = state.findIndex(t => { return t._id === action.payload.id; });
            return state.set(ix,
                { _id: action.payload.id,
                    title: action.payload.title,
                    isDone: action.payload.selected
                });

        default:
            return List([]);
    }
}