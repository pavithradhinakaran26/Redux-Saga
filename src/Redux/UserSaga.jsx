import { call, put, takeLatest } from "redux-saga/effects";
import api from "../api/axios";

import {
  REGISTER_USER_START,
  UPDATE_USER_START,
  FETCH_USER_START,
} from "./UserType";

import {
  registerUserSuccess,
  registerUserFailure,
  updateUserSuccess,
  updateUserFailure,
  fetchUserSuccess,
  fetchUserFailure,
} from "./userAction";

function* registerUserSaga(action) {
    try {
      yield call(api.post, "/users", action.payload.userData);
      yield put(registerUserSuccess());
      yield put({ type: FETCH_USER_START });
      action.payload.navigate("/Table");
    } catch (error) {
      yield put(registerUserFailure(error.message));
    }
  }
  


// function* registerUserSaga(action) {
//     try {
  
//       const response = yield call(api.post, "/users", action.payload.userData);
      

//       yield put(registerUserSuccess());
  
    
//       yield put(loginUserSuccess(action.payload.userData));
  
     
//       action.payload.navigate("/Table");
//     } catch (error) {
      
//       yield put(registerUserFailure(error.message));
//     }
//   }
  


function* fetchUserSaga() {
  try {
    const response = yield call(api.get, "/users");
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* updateUserSaga(action) {
    try {
      const { userData, navigate } = action.payload;
  
      // Check if userData has ID
      if (!userData.id) {
        throw new Error("User ID is missing for update");
      }
  
      yield call(api.put, `/users/${userData.id}`, userData);
      yield put(updateUserSuccess());
  
      yield put({ type: FETCH_USER_START });
  
      navigate("/Table"); // ✅ Navigate after update
    } catch (error) {
      yield put(updateUserFailure(error.message));
    }
  }
  
  

export default function* UserSaga() {
  yield takeLatest(REGISTER_USER_START, registerUserSaga);
  yield takeLatest(UPDATE_USER_START, updateUserSaga);

  yield takeLatest(FETCH_USER_START, fetchUserSaga);
}




// import { call, put, takeLatest } from "redux-saga/effects";
// import api from "../api/axios"; 

// import {
//   REGISTER_USER_START,
//   UPDATE_USER_START,
//   DELETE_USER_START,
//   FETCH_USER_START,
// } from "./UserType";

// import {
//   registerUserSuccess,
//   registerUserFailure,
//   updateUserSuccess,
//   updateUserFailure,
//   deleteUserSuccess,
//   deleteUserFailure,
//   fetchUserSuccess,
//   fetchUserFailure,
// } from "./UserAction";

// const mockAPI = "https://67e4fa6218194932a583ee55.mockapi.io/users";


// function* registerUserSaga(action) {
//   try {
//     yield call(api.post, mockAPI, action.payload.userData); 
//     yield put(registerUserSuccess());
//     yield put({ type: FETCH_USER_START });
//     action.payload.navigate("/Table");
//   } catch (error) {
//     yield put(registerUserFailure(error.message));
//   }
// }
 
//   try {
//     const { userData, navigate } = action.payload;

//     if (!userData.id) {
//       throw new Error("User ID is missing for update");
//     }

//     yield call(api.put, `${mockAPI}/${userData.id}`, userData); 
//     yield put(updateUserSuccess());
//     yield put({ type: FETCH_USER_START });
//     navigate("/Table");
//   } catch (error) {
//     yield put(updateUserFailure(error.message));
//   }
// }

// // Delete User Saga
// function* deleteUserSaga(action) {
//   try {
//     const { userId, navigate } = action.payload;

//     if (!userId) {
//       throw new Error("User ID is missing for delete");
//     }

//     yield call(api.delete, `${mockAPI}/${userId}`); 
//     yield put(deleteUserSuccess());
//     yield put({ type: FETCH_USER_START }); 
//     navigate("/Table");
//   } catch (error) {
//     yield put(deleteUserFailure(error.message));
//   }
// }


// function* fetchUserSaga() {
//   try {
//     const response = yield call(api.get, mockAPI); 
//     yield put(fetchUserSuccess(response.data));
//   } catch (error) {
//     yield put(fetchUserFailure(error.message));
//   }
// }

// // Watchers
// export default function* UserSaga() {
//   yield takeLatest(REGISTER_USER_START, registerUserSaga);
//   yield takeLatest(UPDATE_USER_START, updateUserSaga);
//   yield takeLatest(DELETE_USER_START, deleteUserSaga);
//   yield takeLatest(FETCH_USER_START, fetchUserSaga);
// }
