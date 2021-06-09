import { delay, takeEvery, put, call, all } from "redux-saga/effects";

export function* initializeList(list) {
  yield delay(1000);
  yield put({ type: "INITIALIZE_LIST_SUCCESS", list });
}

export function* createPost() {
  yield call(delay, 2000);
  yield put({ type: "CREATE_POST_SUCCESS" });
}

export default function* rootSaga() {
  // yield all([initializeList(), createPost()]);
  yield takeEvery("INITIALIZE_LIST_FETCH", initializeList);
  // yield takeEvery("CREATE_POST_FETCH", createPost);
}
