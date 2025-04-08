import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./AuthSaga";

export default function* rootSaga() {
  yield all([watchAuthSaga()]);
}