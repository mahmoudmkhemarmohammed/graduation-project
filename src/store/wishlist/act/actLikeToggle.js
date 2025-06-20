import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async ({ product, type }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    try {
      if (type == "delete") {
        const res = await axios.delete("/wishlist", {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`
          }
        }, {product});
        return res.data.items;
      } else {
        const res = await axios.post("/wishlist", {product}, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        });
        return res.data.items;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred while fetching the data.");
      }
    }
  }
);
export default actLikeToggle;
