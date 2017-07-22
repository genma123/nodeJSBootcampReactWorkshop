import { takeEvery, put, call, all } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure, tasksAddData, tasksAddDataSuccess} from '../actions/tasks';

function fetchTasksApi() {
    return fetch('/api/tasks')
       .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    })
    .then((response) => response.json())
    .then((tasks) => tasks);
}

function* fetchData() {
  yield put (tasksFetchData);
  const tasks = yield call(fetchTasksApi);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksFetchDataSuccess(tasks));
  /* } */
}

function addTaskApi(action) {
    var event = action.payload.event;
    var task = { title: event.target.elements.title.value, isDone: false };
    var body = JSON.stringify(task);
    return fetch(`api/task`, {
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
    .then((task) => task);
}


function* addData(action) {
  yield put (tasksAddData);
  const event = action.payload.event;
  const task = yield call(addTaskApi, event);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksAddDataSuccess(task));
  /* } */
}

const taskSagas = [
    takeEvery("TASKS_FETCH_DATA", fetchData),
    takeEvery("TASKS_ADD_DATA", addData)
];

export function *rootSaga() {
    yield all ([
        taskSagas
    ]);
}