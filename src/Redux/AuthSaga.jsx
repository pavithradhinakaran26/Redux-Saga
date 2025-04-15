import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./AuthSlice";

function* loginSaga(action) {
  try {
    const { username, password } = action.payload;

    
    const response = yield call(() =>
      fetch("https://67e4fa6218194932a583ee55.mockapi.io/User")
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }

    const data = yield response.json();

    console.log("Fetched Users:", data);

    
    const user = data.find(
      (u) =>
        u.name?.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (user) {
      console.log("Login Successful:", user);
      localStorage.setItem("user", JSON.stringify(user));
      yield put(loginSuccess(user)); 

    } else {
     
    }
  } catch (error) {
    console.log("Network Error:", error.message); 
    yield put(loginFailure("Network error! Please try again."));
  }
}


export function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}