import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsCart = createAsyncThunk(
  "cart/actGetProductsCart",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState();
    const itemsId = Object.keys(cart.itemsId);
    const concatenatedItemsId = itemsId.map((el) => `_id=${el}`).join("&");
    try {
        if(!itemsId.length) {
            return fulfillWithValue([])
        }
      const res = await axios.get(`/products?${concatenatedItemsId}`);
      return await res.data.Products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  }
);

export default actGetProductsCart