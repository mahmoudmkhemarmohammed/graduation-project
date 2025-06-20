import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProducts = createAsyncThunk(
  "actGetProducts/getProducts",
  async (search, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `${
          search && search !== "" ? `/products?search=${search}` : "/products"
        }`
      );
      return await res.data.Products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred while fetching products");
      }
    }
  }
);

export default actGetProducts;
