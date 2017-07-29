import { takeEvery, put, call, all } from 'redux-saga/effects';
import {tasksFetchData, tasksFetchDataSuccess, tasksFetchDataFailure, tasksAddData, tasksAddDataSuccess, tasksDeleteData, tasksDeleteDataSuccess, tasksUpdateData, tasksUpdateDataSuccess} from '../actions/tasks';
import {fetchTasks, addTask, deleteTask, updateTask} from '../promisesApi';

function* fetchData(action) {
  const tasks = yield call(fetchTasks, 'api/tasks');
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    yield put(tasksFetchDataSuccess(tasks));
  /* } */
}

function* addData(action) {
  const event = action.payload.event;
  // console.log(`title: ${event.target.elements.title.value}`)
  const task = yield call(addTask, 'api/task', event);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    console.log("THE TASK: " + JSON.stringify(task));
    yield put(tasksAddDataSuccess(task));
  /* } */
}

function* updateData(action) {
  const id = action.payload.id;
  const title  = action.payload.title;
  const selected = action.payload.selected;
  console.log(`id: ${id}, title: ${title}, selected: ${selected}`)
  const task = yield call(updateTask, 'api/task', id, title, selected);
  /* if (err) {// failure not an option LOL
    yield put(tasksFetchDataFailure(err));
  } else { */
    console.log("TASK: " + JSON.stringify(task));
    yield put(tasksUpdateDataSuccess(task));
  /* } */
}

function* deleteData(action) {
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
    takeEvery("TASKS_DELETE_DATA", deleteData),
    takeEvery("TASKS_UPDATE_DATA", updateData)
];

export function *rootSaga() {
    yield all ([
        taskSagas
    ]);
}