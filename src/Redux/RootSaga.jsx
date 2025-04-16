// RootSaga.jsx
import { all } from "redux-saga/effects";
import { watchLogin } from "./AuthSaga"; // ✅ Now properly imported

export default function* rootSaga() {
  yield all([
    watchLogin(), // ✅ no more "not defined"
  ]);
}
