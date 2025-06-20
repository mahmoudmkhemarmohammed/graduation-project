import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAddSubCategories = createAsyncThunk(
  "categories/actAddSubCategories",
  async (formData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    try {
      const res = await axios.post("/subCategories", formData, {
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

export default actAddSubCategories;
