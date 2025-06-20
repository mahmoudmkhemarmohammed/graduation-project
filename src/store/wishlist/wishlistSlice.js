import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";

const initialState = {
  itemsIds: [],
  productFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToggleLike: (state, action) => {
      if (state.itemsIds.includes(action.payload)) {
        state.itemsIds = state.itemsIds.filter((el) => el != action.payload);
      } else {
        state.itemsIds.push(action.payload)
      }
    },
  },
  extraReducers: (builder) => {
    // Get Wishlist
    builder.addCase(actGetWishlist.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      });
      builder.addCase(actGetWishlist.fulfilled, (state,action) => {
        state.loading = "succeeded";
        state.productFullInfo = action.payload
        state.error = null;
      });
      builder.addCase(actGetWishlist.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });


    // Toggle Like
    builder.addCase(actLikeToggle.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const {addToggleLike} = wishlistSlice.actions
export default wishlistSlice.reducer;
