import { createSlice } from "@reduxjs/toolkit";
import actGetSingleProduct from "./act/actGetSingleProduct";

const singleProductSlice = createSlice({
  name: "singleProductSlice",
  initialState: {
    records: {},
    loading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(actGetSingleProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetSingleProduct.fulfilled, (state, action) => {
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetSingleProduct.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default singleProductSlice.reducer;
