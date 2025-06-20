import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    try {
      const res = await axios.get(`/wishlist`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      return res.data.items;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred while fetching the data.");
      }
    }
  }
);

export default actGetWishlist;
