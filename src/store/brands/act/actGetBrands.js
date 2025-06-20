import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetBrands = createAsyncThunk(
  "brands/actGetBrands",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/brands");
      return res.data.Brands;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);
export default actGetBrands