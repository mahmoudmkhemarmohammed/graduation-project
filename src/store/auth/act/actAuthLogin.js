import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("/auth/login", formData);
      return await res.data;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      else {
        return rejectWithValue("unexpected error")
      }
    }
  }
);
export default actAuthLogin;