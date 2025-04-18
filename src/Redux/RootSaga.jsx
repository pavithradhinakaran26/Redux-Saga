import { all } from 'redux-saga/effects';
// import { watchLoginRequest } from './AuthSaga';

export default function* rootSaga() {
  yield all([
    watchLoginRequest()
  ]);
}
export function* watchLoginRequest() { }


