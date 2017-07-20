import { takeEvery, put, call } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure} from '../actions/tasks';

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
  /* if (err) {
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksFetchDataSuccess(tasks));
  /* } */
}

export function *rootSaga() {
    yield [
        fetchData()
    ]
}