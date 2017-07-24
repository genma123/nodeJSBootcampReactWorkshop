export function tasksFetchData() {
    return {
        type: 'TASKS_FETCH_DATA'
    };
}

export function tasksFetchDataSuccess(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_SUCCESS',
        payload: { 
            tasks: tasks
        }
    };
}

export function tasksFetchDataFailure(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_FAILURE'
    };
}

export function tasksAddData(event) {
    return {
        type: 'TASKS_ADD_DATA',
        payload: { 
            event: event
        }
    };
}

export function tasksAddDataSuccess(task) {
    return {
        type: 'TASKS_ADD_DATA_SUCCESS',
        payload: { 
            task: task
        }
    };
}

export function tasksDeleteData(id) {
    console.log("ID: " + id);
    return {
        type: 'TASKS_DELETE_DATA',
        payload: { 
            id: id
        }
    };
}

export function tasksDeleteDataSuccess(id) {
    return {
        type: 'TASKS_DELETE_DATA_SUCCESS',
        payload: { 
            id: id
        }
    };
}
