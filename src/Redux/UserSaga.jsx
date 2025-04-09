// import { call, put, takeLatest } from "redux-saga/effects";
// import axios from "../api/axios";

// import {
//   REGISTER_USER_START,
//   UPDATE_USER_START,
//   FETCH_USER_START,
// } from "./UserType";
// import {
//   registerUserSuccess,
//   registerUserFailure,
//   updateUserSuccess,
//   updateUserFailure,
//   fetchUserSuccess,
//   fetchUserFailure,
// } from "./userAction";

// // Register Saga
// function* registerUserSaga(action) {
//   try {
//     yield call(api.post, "/users", action.payload.userData);
//     yield put(registerUserSuccess());

//     yield put({ type: FETCH_USER_START });  // Fetch latest
//     action.payload.navigate("/table");       // Navigate
//   } catch (error) {
//     yield put(registerUserFailure(error));
//   }
// }

// // Update Saga
// function* updateUserSaga(action) {
//   try {
//     yield call(api.put, `/users/${action.payload.userData.id}`, action.payload.userData);
//     yield put(updateUserSuccess());

//     yield put({ type: FETCH_USER_START });  // Fetch latest
//     action.payload.navigate("/table");       // Navigate
//   } catch (error) {
//     yield put(updateUserFailure(error));
//   }
// }

// // Fetch User Saga
// function* fetchUserSaga() {
//   try {
//     const response = yield call(api.get, "/users");
//     yield put(fetchUserSuccess(response.data));
//   } catch (error) {
//     yield put(fetchUserFailure(error));
//   }
// }

// export default function* UserSaga() {
//   yield takeLatest(REGISTER_USER_START, registerUserSaga);
//   yield takeLatest(UPDATE_USER_START, updateUserSaga);
//   yield takeLatest(FETCH_USER_START, fetchUserSaga);
// }
