import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/categories");
      return res.data.categories;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actGetCategories;
