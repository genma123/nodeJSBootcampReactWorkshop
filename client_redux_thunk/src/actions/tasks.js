export function tasksFetchDataSuccess(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_SUCCESS',
        payload: { 
            tasks: tasks
        }
    };
}

export function tasksFetchData() {
    return (dispatch) => {
        // dispatch(tasksIsLoading(true));

        fetch(`api/tasks`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                // dispatch(tasksIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(tasksFetchDataSuccess(tasks)))
            /* .catch(() => dispatch(tasksHasErrored(true))) */ ;
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

export function tasksAddData(event) {
    return (dispatch) => {
        // dispatch(tasksIsLoading(true));
        var task = { title: event.target.elements.title.value, isDone: false };
        var body = JSON.stringify(task);
        fetch(`api/task`, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: body
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((task) => dispatch(tasksAddDataSuccess(task)));
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

export function tasksDeleteData(id) {
    return (dispatch) => {
        // dispatch(tasksIsLoading(true));
        fetch(`api/task/${id}` , {
                headers: {
                    'Accept': 'application/json, text/plain, * / *',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(tasksDeleteDataSuccess(id)));
    };
}


export function tasksUpdateDataSuccess(id, title, selected) {
    return {
        type: 'TASKS_UPDATE_DATA_SUCCESS',
        payload: { 
            id: id,
            title: title,
            selected: selected
        }
    };
}

export function tasksUpdateData(id, title, selected) {
    return (dispatch) => {
        // dispatch(tasksIsLoading(true));
        var task = { _id: id, title: title, isDone: selected };
        var body = JSON.stringify(task);
        console.log("Updating " + id + ": " + body);
          fetch(`api/task/${id}` , {
                headers: {
                    'Accept': 'application/json, text/plain, * / *',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: body
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(tasksUpdateDataSuccess(id, title, selected)));
    };
}