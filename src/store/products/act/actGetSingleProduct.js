import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetSingleProduct = createAsyncThunk(
  "actGetSingleProduct/getSingleProduct",
  async (productId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `/products/${productId}`
      );
      return await res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      else {
        return rejectWithValue("An error occurred while fetching the product.");
      }
    }
  }
);

export default actGetSingleProduct;
