import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetBestSalingProducts = createAsyncThunk(
  "actGetBestSalingProducts/getBestSalingProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        "/products?_sort=sales&_order=asc"
      );
      return await res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred while fetching the products");
      }
    }
  }
);

export default actGetBestSalingProducts;
