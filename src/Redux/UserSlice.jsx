


const initialState = {
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return { ...state, loading: true };

    case "REGISTER_USER_SUCCESS":
      return { ...state, loading: false };

    case "REGISTER_USER_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;



