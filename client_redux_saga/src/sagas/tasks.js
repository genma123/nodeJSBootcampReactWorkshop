import { takeEvery, put, call, all } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure, tasksAddData, tasksAddDataSuccess, tasksDeleteData, tasksDeleteDataSuccess} from '../actions/tasks';
import {fetchTasks, addTask, deleteTask} from '../promisesApi';

function* fetchData() {
  yield put (tasksFetchData);
  const tasks = yield call(fetchTasks, 'api/tasks');
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksFetchDataSuccess(tasks));
  /* } */
}

function* addData(action) {
  yield put (tasksAddData);
  const event = action.payload.event;
  const task = yield call(addTask, 'api/task', event);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksAddDataSuccess(task));
  /* } */
}

function* deleteData(action) {
  yield put (tasksDeleteData);
  const id = action.payload.id;
  const id2 = yield call(deleteTask, 'api/task', id);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksDeleteDataSuccess(id2));
  /* } */
}

const taskSagas = [
    takeEvery("TASKS_FETCH_DATA", fetchData),
    takeEvery("TASKS_ADD_DATA", addData),
    takeEvery("TASKS_DELETE_DATA", deleteData)
];

export function *rootSaga() {
    yield all ([
        taskSagas
    ]);
}