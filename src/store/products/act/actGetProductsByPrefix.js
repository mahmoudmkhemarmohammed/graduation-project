import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsByPrefix = createAsyncThunk(
  "products/actGetProductsByCategories",
  async ({name,prefixId}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    console.log(name,prefixId);
    
    try {
      const res = await axios.get(`/products?${name}=${prefixId}`);
      return res.data.Products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actGetProductsByPrefix