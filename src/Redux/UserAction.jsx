import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./UserType";

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});
