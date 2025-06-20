import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("/auth/signup", formData);
      return await res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);
export default actAuthRegister;
