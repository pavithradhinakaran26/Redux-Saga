import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { registerUserSuccess, registerUserFailure } from "./UserAction";

function* registerUserSaga(action) {
  try {
    yield call(axios.post, "https://your-api-url.com/users", action.payload);
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

export function* UserSaga() {
  yield takeLatest("REGISTER_USER_REQUEST", registerUserSaga);
}