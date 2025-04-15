const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null, 
    loading: false,
    error: null,
    registerStatus: null,  
  },
  reducers: {
    registerUserStart: (state) => {
      state.loading = true;
      state.error = null;
      state.registerStatus = null;  
    },
    registerUserSuccess: (state) => {
      state.loading = false;
      state.registerStatus = "success";  
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.registerStatus = "failed";
    },
    loginUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;  
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
