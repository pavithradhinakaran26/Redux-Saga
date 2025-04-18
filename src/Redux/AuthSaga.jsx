import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./AuthSlice";
import axios from "axios";

function* handleLogin(action) {
  try {
    const response = yield call(axios.get, "https://67e4fa6218194932a583ee55.mockapi.io/User");
    const users = response.data;

    // Find the matching user
    const matchedUser = users.find(
      (user) => user.username === action.payload.username && user.password === action.payload.password
    );

    if (matchedUser) {
      yield put(loginSuccess(matchedUser)); // If login successful
    } else {
      yield put(loginFailure("Invalid username or password")); // Failure message
    }
  } catch (error) {
    yield put(loginFailure("Login failed, please try again"));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
