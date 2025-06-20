import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAddBrand = createAsyncThunk(
  "brand/actAddBrand",
  async (formData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    try {
      const res = await axios.post("/brands", formData, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actAddBrand;
