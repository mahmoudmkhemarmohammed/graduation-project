import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetUser = createAsyncThunk("user/actGetUser", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const {auth} = getState();
  
  try {
    const res = await axios.get("users/me", {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    return res.data.user;
  } catch (error) {
    if(axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
    }
    else {
        return rejectWithValue("unexpected error")
    }
  }
});

export default actGetUser