import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actGetUser from "./act/actGetUser";

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.error = null;
    },
    // logout
    logOut: (state) => {
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });

    // Login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      state.error = null;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
    // Get User Data
    builder.addCase(actGetUser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(actGetUser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { resetUI, logOut } = authSlice.actions;
export default authSlice.reducer;
