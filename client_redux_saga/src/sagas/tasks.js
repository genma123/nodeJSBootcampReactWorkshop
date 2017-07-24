import { takeEvery, put, call, all } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure, tasksAddData, tasksAddDataSuccess} from '../actions/tasks';
import {fetchTasks, addTask} from '../promisesApi';

function* fetchData() {
  yield put (tasksFetchData);
  const tasks = yield call(fetchTasks, '/api/tasks');
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksFetchDataSuccess(tasks));
  /* } */
}

function* addData(action) {
  yield put (tasksAddData);
  const event = action.payload.event;
  const task = yield call(addTask, `api/task`, event);
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