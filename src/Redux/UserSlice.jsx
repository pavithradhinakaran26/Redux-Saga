import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    registerUserStart: (state) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { registerUserStart, registerUserSuccess, registerUserFailure } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
