export const registerUserRequest = (user) => ({
    type: "REGISTER_USER_REQUEST",
    payload: user,
  });
  
  export const registerUserSuccess = () => ({
    type: "REGISTER_USER_SUCCESS",
  });
  
  export const registerUserFailure = (error) => ({
    type: "REGISTER_USER_FAILURE",
    payload: error,
  });
  