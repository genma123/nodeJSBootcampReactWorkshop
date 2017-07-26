import { takeEvery, put, call, all } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure, tasksAddData, tasksAddDataSuccess, tasksDeleteData, tasksDeleteDataSuccess, tasksUpdateData, tasksUpdateDataSuccess} from '../actions/tasks';
import {fetchTasks, addTask, deleteTask, updateTask} from '../promisesApi';

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
    console.log("THE TASK: " + JSON.stringify(task));
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

function* updateData(action) {
  yield put (tasksUpdateData);
  const id = action.payload.id;
  const title  = action.payload.title;
  const selected = action.payload.selected;
  const task = yield call(updateTask, 'api/task', id, title, selected);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    console.log("TASK: " + JSON.stringify(task));
    yield put(tasksUpdateDataSuccess(task));
  /* } */
}
const taskSagas = [
    takeEvery("TASKS_FETCH_DATA", fetchData),
    takeEvery("TASKS_ADD_DATA", addData),
    takeEvery("TASKS_DELETE_DATA", deleteData),
    takeEvery("TASKS_UPDATE_DATA", updateData)
];

export function *rootSaga() {
    yield all ([
        taskSagas
    ]);
}