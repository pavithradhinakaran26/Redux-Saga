// AuthSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { loginSuccess, loginFailure } from "./AuthSlice"; 

function* loginSaga(action) {
  try {
    const response = yield call(axios.get, `https://67e4fa6218194932a583ee55.mockapi.io/User`);
    
    if (response.data.length > 0) {
      // Login successful
      yield put(loginSuccess(response.data[0]));  // `loginSuccess` la correct user data dispatch pannum
    } else {
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    yield put(loginFailure("Error logging in. Try again!"));
  }
}


export function* watchLogin() {
  yield takeLatest("auth/loginRequest", loginSaga); 
}
